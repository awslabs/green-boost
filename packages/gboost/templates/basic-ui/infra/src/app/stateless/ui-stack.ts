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
import {
  SecurityPolicyProtocol,
  type DistributionProps,
} from "aws-cdk-lib/aws-cloudfront";
import { Bucket } from "gboost-infra";
import { NagSuppressions } from "cdk-nag";
import { SharedConfig } from "@{{GB_APP_ID}}/core/shared";
import { type CfnBucket } from "aws-cdk-lib/aws-s3";

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
      isPlaceholder: false,
      defaults: {
        assetDeployment: {
          bucket: this.#createAssetDeploymentBucket(),
        },
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
              minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
              comment: `${SharedConfig.appId} Distribution for stage: ${
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

  #createAssetDeploymentBucket(): Bucket {
    const bucket = new Bucket(this, "NextjsAssetDeploymentBucket", {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
    if (bucket.node.defaultChild) {
      NagSuppressions.addResourceSuppressions(bucket.node.defaultChild, [
        {
          id: "AwsSolutions-S1",
          reason: "CloudFront Access Logs bucket doesn't need access logs",
        },
      ]);
    }
    return bucket;
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
    const configBucket = this.#nextjs.node
      .findChild("ServerFn")
      .node.findChild("NextjsConfigBucket");
    NagSuppressions.addResourceSuppressions(
      configBucket,
      [
        {
          id: "AwsSolutions-S1",
          reason: "Next.js config bucket doesn't need server access logs",
        },
        {
          id: "AwsSolutions-S10",
          reason: "TODO: remove me once cdk-nextjs-standalone is updated",
        },
      ],
      true,
    );
    const lambdaCodeRewriter = this.#nextjs.node
      .findChild("ServerFn")
      .node.findChild("LambdaCodeRewriter")
      .node.findChild("RewriteOnEventHandler");
    NagSuppressions.addResourceSuppressions(
      lambdaCodeRewriter,
      [
        {
          id: "AwsSolutions-L1",
          reason: "TODO: remove me once cdk-nextjs-standalone is updated",
        },
        {
          id: "AwsSolutions-IAM5",
          reason:
            "Next.js code rewriter can write to any object in CDK assets bucket",
        },
      ],
      true,
    );
    const serverHandlerPolicy = this.#nextjs.node
      .findChild("ServerHandler")
      .node.findChild("ServiceRole")
      .node.findChild("DefaultPolicy")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(serverHandlerPolicy, [
      {
        id: "AwsSolutions-IAM5",
        reason: "Next.js server handler can write to analysis input bucket",
      },
    ]);
    const imgOptFnPolicy = this.#nextjs.node
      .findChild("ImgOptFn")
      .node.findChild("get-image-policy")
      .node.findChild("Resource");
    const bucket = this.#nextjs.bucket;
    const bucketLogicalId = Stack.of(this).getLogicalId(
      bucket.node.defaultChild as CfnBucket,
    );
    NagSuppressions.addResourceSuppressions(imgOptFnPolicy, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "Next.js Image Optimization Function can access any object in Next.js bucket",
        appliesTo: [`Resource::<${bucketLogicalId}.Arn>/*`],
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
      .node.findChild("RevalidationQueue")
      .node.findChild("Resource");
    NagSuppressions.addResourceSuppressions(revalidationQueue, [
      {
        id: "AwsSolutions-SQS3",
        reason: "Revalidation Queue doesn't need DLQ.",
      },
      {
        id: "AwsSolutions-SQS4",
        reason: "TODO: remove once this is fixed in cdk-nextjs-standalone",
      },
    ]);
  }
}
