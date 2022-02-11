import { Duration } from "aws-cdk-lib";
import {
  Bucket as CdkBucket,
  BucketEncryption,
  BucketProps as CdkBucketProps,
  StorageClass,
} from "aws-cdk-lib/aws-s3";
import type { Construct } from "constructs";
import { Stage } from "./stages.js";

interface BucketProps extends CdkBucketProps {
  stage: string;
}

export class Bucket extends CdkBucket {
  constructor(scope: Construct, id: string, props: BucketProps) {
    const { stage, ...newProps } = props;
    if (newProps.encryption === undefined) {
      newProps.encryption = BucketEncryption.S3_MANAGED;
    }
    if (newProps.enforceSSL === undefined) {
      newProps.enforceSSL = true;
    }
    if (newProps.serverAccessLogsBucket === undefined) {
      if (stage === Stage.Prod) {
        const serverAccessLogsBucket = new CdkBucket(
          scope,
          "ServerAccessLogsBucket",
          {
            enforceSSL: true,
            encryption: BucketEncryption.S3_MANAGED,
            lifecycleRules: [
              {
                transitions: [
                  {
                    storageClass: StorageClass.INTELLIGENT_TIERING,
                    transitionAfter: Duration.days(0),
                  },
                ],
              },
            ],
          }
        );
        newProps.serverAccessLogsBucket = serverAccessLogsBucket;
      }
    }
    super(scope, id, newProps);
  }
}
