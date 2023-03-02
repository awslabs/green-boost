import { NagSuppressions } from "cdk-nag";
import type { IConstruct } from "constructs";

export function suppressCdkBucketNotifications(construct: IConstruct) {
  if (construct.node.path.includes("BucketNotificationsHandler")) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "The policy only allows the custom resource Lambda to put notifications on S3 Buckets. The CDK uses this role to avoid circular dependencies.",
      },
    ]);
  }
}
