import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { CommonProps, Stage } from "./common-props.js";

interface FunctionProps extends CommonProps, NodejsFunctionProps {}

/**
 * Node.js Lambda Function with default log retention set based on stage,
 * bundling with source maps and minification enabled, and ARM_64 architecture
 */
export class Function extends NodejsFunction {
  constructor(scope: Construct, id: string, props: FunctionProps) {
    const { stage = Stage.Dev, ...newProps } = props;
    if (newProps.logRetention === undefined) {
      if (stage === Stage.Prod) {
        newProps.logRetention = RetentionDays.SIX_MONTHS;
      } else {
        newProps.logRetention = RetentionDays.ONE_MONTH;
      }
    }
    if (newProps.bundling === undefined) {
      newProps.bundling = {
        sourceMap: true,
        minify: true,
      };
    }
    if (newProps.environment?.NODE_OPTIONS === undefined) {
      if (newProps.environment === undefined) newProps.environment = {};
      newProps.environment.NODE_OPTIONS = "--enable-source-maps";
    }
    if (newProps.architecture === undefined) {
      newProps.architecture = Architecture.ARM_64;
    }
    if (newProps.runtime === undefined) {
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
