// @ts-nocheck
import type { Environment } from "aws-cdk-lib";
import { BucketEncryption } from "aws-cdk-lib/aws-s3";
import { deepmerge } from "deepmerge-ts";
import type { ConstructDefaultProps } from "gboost-infra";
import { userInfo } from "node:os";
import { StageName } from "./stage-name.js";

interface StageConfigParams {
  stageName: StageName;
  account?: string;
  region?: string;
  constructDefaultProps?: ConstructDefaultProps;
}

/**
 * Configuration per stage.
 */
export class StageConfig {
  account = String(process.env["CDK_DEFAULT_ACCOUNT"]);
  appId = "{{GB_APP_ID}}";
  env: Environment;
  constructDefaultProps: ConstructDefaultProps;
  isLocal: boolean;
  region = String(process.env["CDK_DEFAULT_REGION"]);
  stageName: StageName;

  constructor(params: StageConfigParams) {
    this.stageName = params.stageName;
    if (params.account) {
      this.account = params.account;
    }
    if (params.region) {
      this.region = params.region;
    }
    this.env = { account: this.account, region: this.region };
    this.isLocal = this.stageName === StageName.Local;
    const baseConstructDefaultProps: ConstructDefaultProps = {
      function: {
        environment: {
          POWERTOOLS_SERVICE_NAME: this.appId,
          STAGE_NAME: this.stageName,
        },
      },
      bucket: {
        encryption: BucketEncryption.S3_MANAGED,
      },
    };
    if (params.constructDefaultProps) {
      this.constructDefaultProps = deepmerge(
        baseConstructDefaultProps,
        params.constructDefaultProps
      );
    } else {
      this.constructDefaultProps = baseConstructDefaultProps;
    }
  }

  /**
   * Creates consistent stack name of format: "appId-stageName-stackId"
   */
  getStackName(stackName: string) {
    if (this.isLocal) {
      const localStageName = process.env["STAGE_NAME"] || userInfo().username;
      return `${this.appId}-${localStageName}-${stackName}`;
    } else {
      return `${this.appId}-${this.stageName}-${stackName}`;
    }
  }
}
