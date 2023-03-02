import { NagSuppressions } from "cdk-nag";
import type { IConstruct } from "constructs";

export function suppressCdkCustomResourceProvider(construct: IConstruct) {
  if (
    construct.node.path.endsWith(
      "Provider/framework-onEvent/ServiceRole/DefaultPolicy/Resource"
    )
  ) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "AWS CDK Custom Resource Provider Framework can access all versions of specified function",
      },
    ]);
  } else if (
    construct.node.path.endsWith("Provider/framework-onEvent/Resource")
  ) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-L1",
        reason: "AWS CDK team will update runtime if security issue arises",
      },
    ]);
  }
}
