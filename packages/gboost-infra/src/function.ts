import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  type NodejsFunctionProps,
  OutputFormat,
} from "aws-cdk-lib/aws-lambda-nodejs";
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
    // https://twitter.com/vvoyer/status/1498436054851981320
    // NODE_OPTIONS: "--enable-source-maps",
  },
  runtime: Runtime.NODEJS_18_X,
};

/**
 * Node.js Lambda Function with default source maps and minification enabled,
 * and ARM_64 architecture, and ESM format.
 */
export class Function extends NodejsFunction {
  constructor(scope: Construct, id: string, props: FunctionProps) {
    const newProps = mergeDeep(
      defaultFunctionProps,
      constructDefaultProps?.function,
      props,
    );
    super(scope, id, newProps);
    this._functionNode().addMetadata("gboost:function-entrypoint", props.entry);
  }
}
