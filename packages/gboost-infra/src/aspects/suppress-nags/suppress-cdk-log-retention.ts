import { NagSuppressions } from "cdk-nag";
import type { IConstruct } from "constructs";

export function suppressCdkLogRetention(construct: IConstruct) {
  if (
    construct.node.path.match(
      /.+LogRetention[a-z0-9]{32}\/ServiceRole\/DefaultPolicy\/Resource$/
    )
  ) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "LogRetention IAM policy requires wildcards to update log group expiration",
      },
    ]);
  }
}
