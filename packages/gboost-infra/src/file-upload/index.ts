import { Construct } from "constructs";
import { GraphqlApi } from "@aws-cdk/aws-appsync-alpha";
import { Function } from "../function.js";
import { createSchema } from "./createSchema.js";
import { CommonProps, Stage } from "../common-props.js";
import { Duration, Stack } from "aws-cdk-lib";
import { Bucket } from "../bucket.js";
import { NagSuppressions } from "cdk-nag";
import { CfnBucket, CorsRule, HttpMethods } from "aws-cdk-lib/aws-s3/index.js";

interface FileUploadBucket {
  bucket: Bucket;
  baseKey: string;
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
  buckets: FileUploadBucket[];
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
    const environmentBuckets: { bucket: string; baseKey: string }[] = [];
    for (let i = 0; i < buckets.length; i++) {
      environmentBuckets[i] = {
        bucket: buckets[i].bucket.bucketName,
        baseKey: buckets[i].baseKey,
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

    for (let i = 0; i < buckets.length; i++) {
      buckets[i].bucket.grantDelete(uploadFn);
      buckets[i].bucket.grantReadWrite(uploadFn);

      const unknownBucket = buckets[i].bucket as unknown;
      const corsSettings = (unknownBucket as { cors: CorsRule[] }).cors;
      if (corsSettings) {
        let allowedHeaderExist,
          allowedMethodsExists,
          exposedHeadersExist = false;
        for (let corsIndex = 0; corsIndex < corsSettings.length; corsIndex++) {
          if ((corsSettings[corsIndex].allowedHeaders || []).length > 0) {
            allowedHeaderExist = true;
          }

          if (
            corsSettings[corsIndex].allowedMethods.includes(
              "PUT" as HttpMethods
            )
          ) {
            allowedMethodsExists = true;
          }

          if (corsSettings[corsIndex].exposedHeaders?.includes("ETag")) {
            exposedHeadersExist = true;
          }
        }
        if (!allowedHeaderExist) {
          console.warn(`Bucket's cors policy allowHeaders is empty`);
        }
        if (!allowedMethodsExists) {
          console.warn(`Bucket's cors policy does not allow method "PUT"`);
        }
        if (!exposedHeadersExist) {
          console.warn(`Bucket's cors policy does not expose header "ETAG"`);
        }
      }

      const bucketLogicalId = Stack.of(this).getLogicalId(
        buckets[i].bucket.node.defaultChild as CfnBucket
      );
      NagSuppressions.addResourceSuppressions(
        uploadFn,
        [
          {
            id: `AwsSolutions-IAM5`,
            reason: `FileUpload function should have the ability to dynamically write to any key within this bucket`,
            appliesTo: [
              "Action::S3:AbortMultiPartUpload",
              "Action::S3:PutObject",
              "Action::s3:DeleteObject",
              "Action::s3:GetObject",
              "Action::s3:GetBucket",
              "Action::s3:List",
              "Action::s3:Abort",
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
