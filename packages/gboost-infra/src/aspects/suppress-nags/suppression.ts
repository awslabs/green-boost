/**
 * Common suppressions accepted by most development teams. Use with `SuppressNags` aspect
 */
export enum Suppression {
  /**
   * Suppress AwsSolutions-IAM4 nags for managed policy: AWSLambdaBasicExecutionRole
   */
  AWSLambdaBasicExecutionRole = "AWSLambdaBasicExecutionRole",
  /**
   * Supress AwsSolutions-IAM5 and AwsSolutions-L1 nags for CDK Bucket
   * Deployment related resources
   */
  CdkBucketDeployment = "CdkBucketDeployment",
  /**
   * Supress AwsSolutions-IAM5 nags for CDK Bucket Notification resources
   */
  CdkBucketNotifications = "CdkBucketNotifications",
  /**
   * Supress AwsSolutions-IAM5 nags for CDK Custom Resources
   */
  CdkCustomResource = "CdkCustomResource",
  /**
   * Supress AwsSolutions-IAM5 and AwsSolutions-L1 nags for CDK Custom Resource Provider resources
   */
  CdkCustomResourceProvider = "CdkCustomResourceProvider",
  /**
   * Supress AwsSolutions-IAM5 nags for CDK Log Retention resources
   */
  CdkLogRetention = "CdkLogRetention",
  /**
   * Suppress AwsSolutions-IAM5 and AwsSolutions-L1 nags for CDK Monitoring Constructs
   */
  CdkMonitoringConstructs = "CdkMonitoringConstructs",
}
