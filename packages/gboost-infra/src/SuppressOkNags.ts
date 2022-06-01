import { IAspect } from "aws-cdk-lib";
import { NagSuppressions } from "cdk-nag";
import { IConstruct } from "constructs";

/**
 * Suppresses cdk-nag errors for AWS managed constructs regarding log
 * retention, bucket deployments, and bucket notifications
 */
export class SuppressOkNags implements IAspect {
  visit(node: IConstruct) {
    const path = node.node.path;
    if (path.includes("Custom::CDKBucketDeployment")) {
      NagSuppressions.addResourceSuppressions(node, [
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
    } else if (path.includes("BucketNotificationsHandler")) {
      NagSuppressions.addResourceSuppressions(node, [
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
    } else if (path.includes("LogRetention")) {
      NagSuppressions.addResourceSuppressions(
        node,
        [
          {
            id: "AwsSolutions-IAM4",
            reason:
              "The Lambda Basic Execution Role does not grant excessive access",
          },
          {
            id: "AwsSolutions-IAM5",
            reason:
              "LogRetention IAM policy requires wildcards to update log group expiration",
          },
        ],
        true
      );
    }
  }
}
