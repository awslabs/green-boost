import { Architecture } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { Stage } from "./stages.js";

interface FunctionProps extends NodejsFunctionProps {
  stage: string;
}

export class Function extends NodejsFunction {
  constructor(scope: Construct, id: string, props: FunctionProps) {
    const { stage, ...newProps } = props;
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
