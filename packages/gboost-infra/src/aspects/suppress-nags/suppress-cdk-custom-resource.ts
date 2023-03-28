import { NagSuppressions } from "cdk-nag";
import type { IConstruct } from "constructs";

export function suppressCdkCustomResource(construct: IConstruct) {
  if (construct.node.path.match(/^.+\/AWS[a-z0-9]{32}\/Resource$/)) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-L1",
        reason: "AWS CDK team will update runtime if security issue arises",
      },
    ]);
  }
}
