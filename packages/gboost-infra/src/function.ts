import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
  OutputFormat,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { CommonProps, Stage } from "./common-props.js";

export interface FunctionProps extends CommonProps, NodejsFunctionProps {}

/**
 * Node.js Lambda Function with default log retention set based on stage,
 * bundling with source maps and minification enabled, and ARM_64 architecture
 */
export class Function extends NodejsFunction {
  constructor(scope: Construct, id: string, props: FunctionProps) {
    const { stage = Stage.Dev, ...newProps } = props;
    if (!newProps.logRetention) {
      if (stage === Stage.Prod) {
        newProps.logRetention = RetentionDays.SIX_MONTHS;
      } else {
        newProps.logRetention = RetentionDays.ONE_MONTH;
      }
    }
    newProps.bundling = {
      sourceMap: true,
      minify: true,
      format: OutputFormat.ESM,
      ...newProps.bundling,
    };
    if (!newProps.environment) {
      newProps.environment = {};
    }
    const stageLogLevel: Record<Stage, string> = {
      [Stage.Dev]: "debug",
      [Stage.Test]: "debug",
      [Stage.Prod]: "error",
    };
    newProps.environment = {
      NODE_OPTIONS: "--enable-source-maps",
      LOG_LEVEL: stageLogLevel[stage],
      ...newProps.environment,
    };
    if (!newProps.environment.POWERTOOLS_LOGGER_LOG_EVENT) {
      if (stage === Stage.Dev) {
        newProps.environment.POWERTOOLS_LOGGER_LOG_EVENT = "true";
      }
    }
    if (!newProps.environment.POWERTOOLS_LOGGER_SAMPLE_RATE) {
      if (stage === Stage.Prod) {
        newProps.environment.POWERTOOLS_LOGGER_SAMPLE_RATE = "0.2";
      }
    }
    if (!newProps.architecture) {
      newProps.architecture = Architecture.ARM_64;
    }
    if (!newProps.runtime) {
      newProps.runtime = Runtime.NODEJS_16_X;
    }
    super(scope, id, newProps);
    NagSuppressions.addResourceSuppressions(
      this,
      [
        {
          id: "AwsSolutions-IAM4",
          reason:
            "AWS Managed Policy is not overly permissive for AWSLambdaBasicExecutionRole",
        },
      ],
      true
    );
    NagSuppressions.addResourceSuppressions(
      this,
      [
        {
          id: "AwsSolutions-IAM5",
          reason: "Allow wildcard permission for Lambda Logs",
        },
      ],
      true
    );
  }
}
