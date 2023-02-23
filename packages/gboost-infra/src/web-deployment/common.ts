export interface InputResourceProperties {
  sourceBucketName: string;
  sourceObjectKey: string;
  destinationBucketName: string;
  destinationObjectKeyPrefix: string;
  environment: Record<string, string>;
  distributionId?: string;
  prune: boolean;
}

export interface ResourceProperties extends InputResourceProperties {
  ServiceToken: string;
}
