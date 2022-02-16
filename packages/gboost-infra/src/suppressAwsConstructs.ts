import { Stack } from "aws-cdk-lib";
import { NagSuppressions } from "cdk-nag";

/**
 * Suppresses cdk-nag errors for AWS managed constructs regarding log
 * retention, bucket deployments, and bucket notifications
 */
export function suppressAwsManagedConstructs(stack: Stack) {
  for (const construct of stack.node.findAll()) {
    if (construct.node.path.includes("LogRetention")) {
      NagSuppressions.addResourceSuppressions(construct, [
        {
          id: "AwsSolutions-IAM4",
          reason:
            "The Lambda Basic Execution Role does not grant excessive access",
        },
        {
          id: "AwsSolutions-IAM5",
          reason:
            "The CDK creates this role so that it can set custom retention periods on any CloudWatch Logs resource that gets created.",
        },
      ]);
    } else if (construct.node.path.includes("Custom::CDKBucketDeployment")) {
      NagSuppressions.addResourceSuppressions(construct, [
        {
          id: "AwsSolutions-IAM4",
          reason:
            "The Lambda Basic Execution Role does not grant excessive access",
        },
        {
          id: "AwsSolutions-IAM5",
          reason:
            "Wildcards are used to succinctly define a specific set or permissions to defined resources.",
        },
      ]);
    } else if (construct.node.path.includes("BucketNotificationsHandler")) {
      NagSuppressions.addResourceSuppressions(construct, [
        {
          id: "AwsSolutions-IAM4",
          reason:
            "The Lambda Basic Execution Role does not grant excessive access",
        },
        {
          id: "AwsSolutions-IAM5",
          reason:
            "The policy only allows the custom resource Lambda to put notifications on S3 Buckets. The CDK uses this role to avoid circular dependencies.",
        },
      ]);
    }
  }
}
