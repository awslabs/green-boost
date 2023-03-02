import { NagSuppressions } from "cdk-nag";
import type { IConstruct } from "constructs";

export function suppressCdkBucketDeployment(construct: IConstruct) {
  if (construct.node.path.includes("Custom::CDKBucketDeployment")) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "Wildcards are used to succinctly define a specific set or permissions to defined resources.",
      },
      {
        id: "AwsSolutions-L1",
        reason:
          "Ok for CDKBucketDeployment function to not use latest Lambda runtime",
      },
    ]);
  }
}
