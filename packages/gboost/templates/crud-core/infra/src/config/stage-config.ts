// @ts-nocheck
import { Environment, RemovalPolicy } from "aws-cdk-lib";
import { BucketEncryption } from "aws-cdk-lib/aws-s3";
import { mergeDeep } from "gboost-common";
import type { ConstructDefaultProps } from "gboost-infra";
import { StageConfig as CoreStageConfig, StageName } from "@myapp1/core";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

/**
 * Configuration per stage.
 */
export class StageConfig extends CoreStageConfig {
  constructor(stageName: string) {
    super(stageName);
  }
  /**
   * AWS Account ID
   */
  get account() {
    const stageAccounts: Record<StageName, string> = {
      [StageName.Local]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [StageName.Dev]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [StageName.Test]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [StageName.Prod]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
    };
    return stageAccounts[this.enumStageName];
  }
  get constructDefaultProps(): ConstructDefaultProps {
    const stageConstructDefaultProps: Record<StageName, ConstructDefaultProps> =
      {
        [StageName.Local]: {
          function: {
            logRetention: RetentionDays.ONE_MONTH,
            environment: {
              LOG_LEVEL: "DEBUG",
              POWERTOOLS_LOGGER_LOG_EVENT: "true",
              POWERTOOLS_DEV: "true",
            },
          },
        },
        [StageName.Dev]: {
          function: {
            logRetention: RetentionDays.ONE_MONTH,
          },
        },
        [StageName.Test]: {
          function: {
            logRetention: RetentionDays.SIX_MONTHS,
          },
        },
        [StageName.Prod]: {
          function: {
            logRetention: RetentionDays.ONE_YEAR,
            environment: {
              LOG_LEVEL: "WARN",
              POWERTOOLS_LOGGER_SAMPLE_RATE: "0.1",
            },
          },
        },
      };
    return mergeDeep(
      this.#baseConstructDefaultProps,
      stageConstructDefaultProps[this.enumStageName]
    );
  }
  get env(): Environment {
    return { account: this.account, region: this.region };
  }
  /**
   * AWS Region
   */
  get region() {
    const stageRegions: Record<StageName, string> = {
      [StageName.Local]: String(process.env["CDK_DEFAULT_REGION"]),
      [StageName.Dev]: String(process.env["CDK_DEFAULT_REGION"]),
      [StageName.Test]: String(process.env["CDK_DEFAULT_REGION"]),
      [StageName.Prod]: String(process.env["CDK_DEFAULT_REGION"]),
    };
    return stageRegions[this.enumStageName];
  }
  /**
   * `${appId}-${stageName}`
   */
  get stageId() {
    return this.appId + "-" + this.stageName;
  }
  #baseConstructDefaultProps: ConstructDefaultProps = {
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
}
