// @ts-nocheck
import { type Environment, RemovalPolicy } from "aws-cdk-lib";
import { BucketEncryption } from "aws-cdk-lib/aws-s3";
import { mergeDeep } from "gboost-common";
import type { ConstructDefaultProps } from "gboost-infra";
import { ServerConfig } from "@{{GB_APP_ID}}/core/server";
import { StageName } from "@{{GB_APP_ID}}/core/shared";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

/**
 * Configuration per stage.
 */
export class Config extends ServerConfig {
  static stageAccounts: Record<StageName, string> = {
    [StageName.Local]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
    [StageName.Dev]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
    [StageName.Test]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
    [StageName.Prod]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
  };
  static stageRegions: Record<StageName, string> = {
    [StageName.Local]: String(process.env["CDK_DEFAULT_REGION"]),
    [StageName.Dev]: String(process.env["CDK_DEFAULT_REGION"]),
    [StageName.Test]: String(process.env["CDK_DEFAULT_REGION"]),
    [StageName.Prod]: String(process.env["CDK_DEFAULT_REGION"]),
  };
  static stageConstructDefaultProps: Record<StageName, ConstructDefaultProps> =
    {
      [StageName.Local]: {
        bucket: {
          autoDeleteObjects: true,
          removalPolicy: RemovalPolicy.DESTROY,
        },
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

  constructor(stageName: string) {
    super(stageName);
  }
  /**
   * AWS Account ID
   */
  get account() {
    return Config.stageAccounts[this.enumStageName];
  }
  get constructDefaultProps(): ConstructDefaultProps {
    return mergeDeep(
      this.#baseConstructDefaultProps,
      Config.stageConstructDefaultProps[this.enumStageName],
    );
  }
  get env(): Environment {
    return { account: this.account, region: this.region };
  }
  /**
   * AWS Region
   */
  get region() {
    return Config.stageRegions[this.enumStageName];
  }
  /**
   * `${appId}-${stageName}`
   */
  get stageId() {
    return Config.appId + "-" + this.stageName;
  }
  #baseConstructDefaultProps: ConstructDefaultProps = {
    function: {
      bundling: {
        // enables use of CJS node_modules in ESM Lambda
        banner: `import module from 'module';if (typeof globalThis.require === "undefined"){globalThis.require = module.createRequire(import.meta.url);}`,
      },
      environment: {
        POWERTOOLS_SERVICE_NAME: Config.appId,
        STAGE_NAME: this.stageName,
      },
    },
    bucket: {
      encryption: BucketEncryption.S3_MANAGED,
    },
  };
}
