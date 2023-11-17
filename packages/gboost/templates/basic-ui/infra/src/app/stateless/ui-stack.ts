// @ts-nocheck
import { CfnOutput, RemovalPolicy, Stack, type StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Config } from "../../config/config";
import { Nextjs, type NextjsDistributionProps } from "cdk-nextjs-standalone";
import {
  FunctionUrlAuthType,
  Function as CdkFunction,
} from "aws-cdk-lib/aws-lambda";
import { type DistributionProps } from "aws-cdk-lib/aws-cloudfront";
import { NagSuppressions } from "cdk-nag";

interface UiProps extends StackProps {
  config: Config;
  webAclArn: string;
}

const thisFilePath = fileURLToPath(import.meta.url);

export class UiStack extends Stack {
  #props: UiProps;
  #nextjs: Nextjs;
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id, props);
    this.#props = props;
    this.#nextjs = this.#createNextjsSite();
    this.#retainEdgeFnOnDelete();
    this.#suppressNags();
  }

  #createNextjsSite() {
    const nextjs = new Nextjs(this, "Nextjs", {
      nextjsPath: resolve(thisFilePath, "../../../../../ui"),
      defaults: {
        lambda: {
          environment: {
            [Config.envVarNames.STAGE_NAME]: this.#props.config.stageName,
          },
        },
        distribution: {
          functionUrlAuthType: FunctionUrlAuthType.AWS_IAM,
          cdk: {
            distribution: {
              webAclId: this.#props.webAclArn,
              comment: `${Config.appId} Distribution for stage: ${
                this.#props.config.stageName
              }`,
            } as unknown as DistributionProps,
          },
        } satisfies Partial<NextjsDistributionProps>,
      },
    });
    new CfnOutput(this, "CloudFrontDistributionDomain", {
      value: nextjs.distribution.distributionDomain,
    });
    return nextjs;
  }

  /**
   * Don't fail on CloudFormation delete due to replicated function
   * @link https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-delete-replicas.html
   */
  #retainEdgeFnOnDelete() {
    const edgeFn = this.#nextjs.distribution?.node
      .tryFindChild("EdgeFn")
      ?.node.tryFindChild("Fn");
    if (edgeFn instanceof CdkFunction) {
      edgeFn.applyRemovalPolicy(RemovalPolicy.RETAIN);
    }
  }

  #suppressNags() {
    const staticAssetsBucket = this.#nextjs.node
      .findChild("StaticAssets")
      .node.findChild("Bucket")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(staticAssetsBucket, [
      {
        id: "AwsSolutions-S1",
        reason: "Server access logs not needed on Next.js bucket",
      },
    ]);
    const bucketDeploymentFnPolicy = this.#nextjs.node
      .findChild("StaticAssets")
      .node.findChild("BucketDeployment")
      .node.findChild("Fn")
      .node.findChild("ServiceRole")
      .node.findChild("DefaultPolicy")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(bucketDeploymentFnPolicy, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "Bucket Deployment lambda can access any object in code asset bucket",
      },
    ]);
    const serverFnPolicy = this.#nextjs.node
      .findChild("Server")
      .node.findChild("Fn")
      .node.findChild("ServiceRole")
      .node.findChild("DefaultPolicy")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(serverFnPolicy, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "Next.js server function can read/write any object in Next.js bucket",
      },
    ]);
    const bucketDeployment = this.#nextjs.node
      .findChild("StaticAssets")
      .node.tryFindChild("BucketDeployment");
    if (bucketDeployment) {
      // bucket deployment is undefined on cdk destroy
      const bucketDeploymentFnPolicy = bucketDeployment.node
        .findChild("Fn")
        .node.findChild("ServiceRole")
        .node.findChild("DefaultPolicy")
        .node.findChild("Resource");
      NagSuppressions.addResourceSuppressions(bucketDeploymentFnPolicy, [
        {
          id: "AwsSolutions-IAM5",
          reason:
            "Bucket Deployment lambda can access any object in code asset bucket",
        },
      ]);
    }
    const imgOptFnPolicy = this.#nextjs.node
      .findChild("ImgOptFn")
      .node.findChild("ServiceRole")
      .node.findChild("DefaultPolicy")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(imgOptFnPolicy, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "Next.js Image Optimization Function can access any object in Next.js bucket",
      },
    ]);
    const distribution = this.#nextjs.node
      .findChild("Distribution")
      .node.findChild("Distribution")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(distribution, [
      {
        id: "AwsSolutions-CFR4",
        reason: "See: https://github.com/cdklabs/cdk-nag/issues/1320",
      },
      {
        id: "AwsSolutions-CFR3",
        reason: "Logging not needed for Distribution",
      },
    ]);
    const revalidationQueue = this.#nextjs.node
      .findChild("Revalidation")
      .node.findChild("Queue")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(revalidationQueue, [
      {
        id: "AwsSolutions-SQS3",
        reason: "Revalidation Queue doesn't need DLQ.",
      },
    ]);
  }
}
