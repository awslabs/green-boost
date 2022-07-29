import { Construct } from "constructs";
import { GraphqlApi } from "@aws-cdk/aws-appsync-alpha";
import { Function } from "../function.js";
import { createSchema } from "./createSchema.js";
import { CommonProps, Stage } from "../common-props.js";
import { Duration, Stack } from "aws-cdk-lib";
import { Bucket } from "../bucket.js";
import { NagSuppressions } from "cdk-nag";
import { CfnBucket } from "aws-cdk-lib/aws-s3/index.js";

interface FileUploadBucket {
  bucket: Bucket;
  key: string;
}

export interface FileUploadProps extends CommonProps {
  api: GraphqlApi;
  /**
   * Maps bucket keys to bucket names
   * @example {
   * BUCKET-KEY: { bucket: BUCKET-NAME, key: KEY },
   * BUCKET-KEY2: { bucket: BUCKET-NAME2, key: KEY2}
   * }
   */
  buckets: Record<string, FileUploadBucket>;
  /**
   * The region the buckets are in
   * @example "us-east-1"
   */
  region: string;
}

/**
 * Creates a Lambda Function
 */
export class FileUpload extends Construct {
  constructor(scope: Construct, id: string, props: FileUploadProps) {
    super(scope, id);
    const { api, stage = Stage.Dev, buckets, region } = props;

    const fileExt = import.meta.url.slice(-2);

    //Convert buckets to bucket names to add to environment variable
    const environmentBuckets: Record<string, { bucket: string; key: string }> =
      {};
    for (let i = 0; i < Object.keys(buckets).length; i++) {
      const bucketKey = Object.keys(buckets)[i];
      environmentBuckets[bucketKey] = {
        bucket: buckets[bucketKey].bucket.bucketName,
        key: buckets[bucketKey].key,
      };
    }

    const uploadFn = new Function(this, "UploadFunction", {
      entry: new URL(`./function/index.${fileExt}`, import.meta.url).pathname,
      environment: {
        BUCKET_MAP: JSON.stringify(environmentBuckets),
        REGION: region,
      },
      memorySize: 512,
      timeout: Duration.seconds(10),
      stage,
    });

    for (let i = 0; i < Object.keys(buckets).length; i++) {
      const bucketKey = Object.keys(buckets)[i];
      buckets[bucketKey].bucket.grantDelete(uploadFn);
      buckets[bucketKey].bucket.grantReadWrite(uploadFn);
      const bucketLogicalId = Stack.of(this).getLogicalId(
        buckets[bucketKey].bucket.node.defaultChild as CfnBucket
      );
      NagSuppressions.addResourceSuppressions(
        uploadFn,
        [
          {
            id: `GBoost-FileUpload`,
            reason: `GBoost-FileUpload`,
            appliesTo: [
              "Action::S3:AbortMultiPartUpload",
              "Action::S3:PutObject",
              `Resource::<${bucketLogicalId}.Arn>/*`,
            ],
          },
        ],
        true
      );
    }

    const userDs = api.addLambdaDataSource("UploadFn", uploadFn);
    createSchema(api, userDs);
  }
}
