import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
  OutputFormat,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { mergeDeep } from "gboost-common";

export interface FunctionProps extends NodejsFunctionProps {
  entry: string;
}

const defaultFunctionProps: NodejsFunctionProps = {
  architecture: Architecture.ARM_64,
  bundling: {
    format: OutputFormat.ESM,
    minify: true,
    sourceMap: true,
  },
  environment: {
    NODE_OPTIONS: "--enable-source-maps",
  },
  runtime: Runtime.NODEJS_18_X,
};

/**
 * Node.js Lambda Function with default source maps and minification enabled,
 * and ARM_64 architecture, and ESM format.
 */
export class Function extends NodejsFunction {
  constructor(scope: Construct, id: string, props: FunctionProps) {
    const newProps = mergeDeep(defaultFunctionProps, props);
    super(scope, id, newProps);
    this.#suppressOkNags();
    this._functionNode().addMetadata("gboost:function-entrypoint", props.entry);
  }

  #suppressOkNags() {
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
