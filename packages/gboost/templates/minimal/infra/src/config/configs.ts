// @ts-nocheck
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { StageConfig } from "./stage-config.js";
import { StageName } from "@{{GB_APP_ID}}/core";

export const configs: Record<StageName, StageConfig> = {
  [StageName.Local]: new StageConfig({
    stageName: StageName.Local,
    constructDefaultProps: {
      function: {
        logRetention: RetentionDays.ONE_MONTH,
        environment: {
          LOG_LEVEL: "DEBUG",
          POWERTOOLS_LOGGER_LOG_EVENT: "true",
          POWERTOOLS_DEV: "true",
        },
      },
    },
  }),
  [StageName.Dev]: new StageConfig({
    stageName: StageName.Dev,
    constructDefaultProps: {
      function: {
        logRetention: RetentionDays.ONE_MONTH,
      },
    },
  }),
  [StageName.Test]: new StageConfig({
    stageName: StageName.Test,
    constructDefaultProps: {
      function: {
        logRetention: RetentionDays.SIX_MONTHS,
      },
    },
  }),
  [StageName.Prod]: new StageConfig({
    stageName: StageName.Prod,
    constructDefaultProps: {
      function: {
        logRetention: RetentionDays.ONE_MONTH,
        environment: {
          LOG_LEVEL: "WARN",
          POWERTOOLS_LOGGER_SAMPLE_RATE: "0.1",
        },
      },
    },
  }),
};
