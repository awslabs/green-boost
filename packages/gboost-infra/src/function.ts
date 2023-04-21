import { Stack } from "aws-cdk-lib";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
  OutputFormat,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { mergeDeep } from "gboost-common";
import { constructDefaultProps } from "./construct-default-props.js";

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
 *
 * Gives permissions to ssm:GetParameter for gboost/* resources which enables
 * functionality in other gboost-infra constructs.
 */
export class Function extends NodejsFunction {
  constructor(scope: Construct, id: string, props: FunctionProps) {
    const newProps = mergeDeep(
      defaultFunctionProps,
      constructDefaultProps?.function,
      props
    );
    super(scope, id, newProps);
    this._functionNode().addMetadata("gboost:function-entrypoint", props.entry);
    const policyStatement = new PolicyStatement({
      actions: ["ssm:GetParameter"],
      resources: [
        Stack.of(this).formatArn({
          resource: "parameter",
          resourceName: "gboost/*",
          service: "ssm",
        }),
      ],
    });
    this.addToRolePolicy(policyStatement);
    const defaultPolicy = this.permissionsNode
      .findChild("ServiceRole")
      .node.findChild("DefaultPolicy");
    NagSuppressions.addResourceSuppressions(
      defaultPolicy,
      [
        {
          id: "AwsSolutions-IAM5",
          appliesTo: [
            `Resource::${Stack.of(this).formatArn({
              resource: "parameter",
              resourceName: "gboost/*",
              service: "ssm",
              partition: "<AWS::Partition>",
            })}`,
          ],
          reason:
            "Green Boost Functions can have access to all Green Boost SSM Parameters",
        },
      ],
      true
    );
  }
}
