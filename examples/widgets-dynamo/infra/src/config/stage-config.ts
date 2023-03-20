import type { Environment } from "aws-cdk-lib";
import { BucketEncryption } from "aws-cdk-lib/aws-s3";
import { mergeDeep } from "gboost-common";
import type { ConstructDefaultProps } from "gboost-infra";
import { userInfo } from "node:os";
import { StageName } from "@myapp/core";

interface StageConfigParams {
  /**
   * Note, this value will be set on `enumStageName` on instance. Instance's
   * `stageName` will be different if `StageName.Local`.
   */
  stageName: StageName;
  account?: string;
  region?: string;
  constructDefaultProps?: ConstructDefaultProps;
}

/**
 * Configuration per stage.
 */
export class StageConfig {
  /**
   * `process.env.CDK_DEFAULT_ACCOUNT`
   */
  account = String(process.env["CDK_DEFAULT_ACCOUNT"]);
  appId = "myapp";
  env: Environment;
  /**
   * Called **enum**StageName to distinguish between stageName. enumStageName is
   * always of type StageName whereas stageName is a string allowing for
   * alternative stage names for developing locally
   */
  enumStageName: StageName;
  constructDefaultProps: ConstructDefaultProps;
  /**
   * `this.enumStage === StageName.Local`
   */
  isLocal: boolean;
  region = String(process.env["CDK_DEFAULT_REGION"]);
  /**
   * `${appId}-${stageName}`
   */
  stageId: string;
  /**
   * If `isLocal === true`, then `stageName` is `process.env.STAGE_NAME || os.userInfo().username`
   * Else, `stageName === enumStageName`.
   */
  stageName: string;

  constructor(params: StageConfigParams) {
    this.enumStageName = params.stageName;
    this.isLocal = this.enumStageName === StageName.Local;
    this.stageName = this.isLocal
      ? process.env["STAGE_NAME"] || userInfo().username
      : this.enumStageName;
    this.stageId = this.appId + "-" + this.stageName;
    if (params.account) {
      this.account = params.account;
    }
    if (params.region) {
      this.region = params.region;
    }
    this.env = { account: this.account, region: this.region };
    const baseConstructDefaultProps: ConstructDefaultProps = {
      function: {
        bundling: {
          // enables use of CJS node_modules in ESM Lambda
          banner: `import module from 'module';if (typeof globalThis.require === "undefined"){globalThis.require = module.createRequire(import.meta.url);}`,
        },
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
      this.constructDefaultProps = mergeDeep(
        baseConstructDefaultProps,
        params.constructDefaultProps
      );
    } else {
      this.constructDefaultProps = baseConstructDefaultProps;
    }
  }
}
