// @ts-nocheck
import { Duration, RemovalPolicy, Stack, type StackProps } from "aws-cdk-lib";
import {
  SecurityPolicyProtocol,
  type DistributionProps,
  type IDistribution,
} from "aws-cdk-lib/aws-cloudfront";
import type { Construct } from "constructs";
import { fileURLToPath } from "node:url";
import { Config } from "../../config/config";
import { Nextjs, type NextjsDistributionProps } from "cdk-nextjs-standalone";
import { resolve } from "node:path";
import { FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";
import { NagSuppressions } from "cdk-nag";
import { ObjectOwnership, type CfnBucket } from "aws-cdk-lib/aws-s3";
import { Bucket, type DbIamCluster } from "gboost-infra";
import { connectFnToDb } from "../../utils/connect-fn-to-db";
import { getDbFnProps } from "../../utils/get-db-fn-props";

interface UiStackProps extends StackProps {
  config: Config;
  cluster: DbIamCluster;
  webAclArn: string;
}

const thisFilePath = fileURLToPath(import.meta.url);

export class UiStack extends Stack {
  #props: UiStackProps;
  #assetDeploymentBucket: Bucket;
  #nextjs: Nextjs;
  distribution: IDistribution;

  constructor(scope: Construct, id: string, props: UiStackProps) {
    super(scope, id, props);
    this.#props = props;
    this.#assetDeploymentBucket = this.#createAssetDeploymentBucket();
    this.#nextjs = this.#createNextjs();
    this.distribution = this.#nextjs.distribution.distribution;
    this.#suppressNags();
  }

  #createAssetDeploymentBucket() {
    const bucket = new Bucket(this, "NextjsAssetDeploymentBucket", {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
    if (bucket.node.defaultChild) {
      NagSuppressions.addResourceSuppressions(bucket.node.defaultChild, [
        {
          id: "AwsSolutions-S1",
          reason: "Nextjs Asset Deployment bucket doesn't need access logs",
        },
      ]);
    }
    return bucket;
  }

  #createNextjs(): Nextjs {
    const nextjs = new Nextjs(this, "NextSite", {
      nextjsPath: resolve(thisFilePath, "../../../../../ui"),
      // use true when exclusively deploying other parts of infra and don't want to wait for Next.js build
      isPlaceholder: false,
      defaults: {
        assetDeployment: {
          bucket: this.#assetDeploymentBucket,
        },
        lambda: {
          timeout: Duration.seconds(20),
          // additional env vars added in #updateNextjsServerFn below
          environment: {
            [Config.envVarNames.STAGE_NAME]: this.#props.config.stageName,
            [Config.envVarNames.NEXT_PUBLIC_STAGE_NAME]:
              this.#props.config.stageName,
          },
          ...getDbFnProps(this.#props.cluster),
        },
        distribution: {
          functionUrlAuthType: FunctionUrlAuthType.AWS_IAM,
          cdk: {
            distribution: {
              logBucket: this.#createCloudFrontLogsBucket(),
              webAclId: this.#props.webAclArn,
              minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
              comment: `${Config.appId} Distribution for stage: ${
                this.#props.config.stageName
              }`,
            } as unknown as DistributionProps,
          },
        } satisfies Partial<NextjsDistributionProps>,
      },
    });
    connectFnToDb(this.#props.cluster, nextjs.serverFunction.lambdaFunction);
    return nextjs;
  }

  #createCloudFrontLogsBucket(): Bucket {
    const bucket = new Bucket(this, "NextjsCloudFrontLoggingBucket", {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
      objectOwnership: ObjectOwnership.BUCKET_OWNER_PREFERRED,
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

  #suppressNags() {
    const configBucket = this.#nextjs.node
      .tryFindChild("Fn")
      ?.node.tryFindChild("NextjsConfigBucket");
    if (configBucket) {
      NagSuppressions.addResourceSuppressions(
        configBucket,
        [
          {
            id: "AwsSolutions-S1",
            reason: "Next.js config bucket doesn't need server access logs",
          },
          {
            id: "AwsSolutions-S10",
            reason: "Next.js config bucket doesn't need SSL",
          },
        ],
        true,
      );
    }
    const lambdaCodeRewriter = this.#nextjs.node
      .tryFindChild("Fn")
      ?.node.tryFindChild("LambdaCodeRewriter")
      ?.node.tryFindChild("RewriteOnEventHandler");
    if (lambdaCodeRewriter) {
      NagSuppressions.addResourceSuppressions(
        lambdaCodeRewriter,
        [
          {
            id: "AwsSolutions-L1",
            reason: "Next.js code rewriter doesn't require latest runtime",
          },
          {
            id: "AwsSolutions-IAM5",
            reason:
              "Next.js code rewriter can write to any object in CDK assets bucket",
          },
        ],
        true,
      );
    }
    const serverHandlerPolicy = this.#nextjs.node
      .tryFindChild("ServerHandler")
      ?.node.tryFindChild("ServiceRole")
      ?.node.tryFindChild("DefaultPolicy")
      ?.node.tryFindChild("Resource");
    if (serverHandlerPolicy) {
      NagSuppressions.addResourceSuppressions(serverHandlerPolicy, [
        {
          id: "AwsSolutions-IAM5",
          reason: "Next.js server handler can write to analysis input bucket",
        },
      ]);
    }
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
    ]);
  }
}
