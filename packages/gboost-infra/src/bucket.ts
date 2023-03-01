import { Duration } from "aws-cdk-lib";
import {
  Bucket as CdkBucket,
  BucketEncryption,
  BucketProps as CdkBucketProps,
  StorageClass,
} from "aws-cdk-lib/aws-s3";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { mergeDeep } from "gboost-common";

export type BucketProps = CdkBucketProps;

const defaultBucketProps: BucketProps = {
  encryption: BucketEncryption.S3_MANAGED,
  enforceSSL: true,
};

/**
 * S3 Bucket with default managed encryption, enforced SSL and blocked public
 * access
 * Also adds a server access logs bucket following AWS best practices
 */
export class Bucket extends CdkBucket {
  #scope: Construct;
  #id: string;
  constructor(scope: Construct, id: string, props?: BucketProps) {
    const newProps = mergeDeep(defaultBucketProps, props);
    super(scope, id, newProps);
    this.#id = id;
    this.#scope = scope;
  }

  /**
   * Adds server access logs bucket with SSL enforced, S3 Managed encryption,
   * and intelligent tiering
   */
  addServerAccessLogsBucket() {
    const serverAccessLogsBucket = new CdkBucket(
      this.#scope,
      // access logs bucket id should be based on bucket name so that dev
      // can instantiate multiple buckets within same stack/construct
      this.#id + "AccessLogsBucket",
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
    NagSuppressions.addResourceSuppressions(serverAccessLogsBucket, [
      {
        id: "AwsSolutions-S1",
        reason:
          "Server Access Logs Bucket doesn't need a Server Access Logs Bucket",
      },
    ]);
  }
}
