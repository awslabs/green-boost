import type { IAspect } from "aws-cdk-lib";
import { CfnFunction } from "aws-cdk-lib/aws-lambda";
import type { IConstruct } from "constructs";

/**
 * Fix compatability issues with gboost-infra constructs and AWS GovCloud. For
 * example, change all arm64 Lambdas to x86_64
 */
export class GovCloudCompat implements IAspect {
  visit(node: IConstruct) {
    if (node instanceof CfnFunction) {
      const fn = node as CfnFunction;
      fn.architectures = ["x86_64"];
    }
  }
}
