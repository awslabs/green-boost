import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { GraphqlApi } from "@aws-cdk/aws-appsync-alpha";
import { Function } from "../function.js";
import { createSchema } from "./createSchema.js";
import { CommonProps, Stage } from "../common-props.js";

interface FileUploadBucket {
  bucket: string;
  key: string;
}

export interface FileUploadProps extends CommonProps {
  api: GraphqlApi;
  stage?: Stage;
  partition?: string;
  buckets: Record<string, FileUploadBucket>;
}

export class FileUpload extends Construct {
  constructor(scope: Construct, id: string, props: FileUploadProps) {
    super(scope, id);
    const { api, stage = Stage.Dev, partition = "aws", buckets } = props;

    const fileExt = import.meta.url.slice(-2);
    const resources = [];
    for (let i = 0; i < Object.keys(buckets).length; i++) {
      const bucketKey = Object.keys(buckets)[i];
      resources[2 * i] =
        "arn:" + partition + ":s3:::" + buckets[bucketKey].bucket + "/*";
      resources[2 * i + 1] =
        "arn:" + partition + ":s3:::" + buckets[bucketKey].bucket;
    }
    const uploadFn = new Function(this, "UploadFunction", {
      entry: new URL(`./function/index.${fileExt}`, import.meta.url).pathname,
      environment: {
        BUCKET_MAP: JSON.stringify(buckets),
      },
      initialPolicy: [
        new PolicyStatement({
          actions: [
            "s3:CreateBucket",
            "s3:PutBucketCors",
            "s3:PutObject",
            "s3:AbortMultipartUpload",
          ],
          resources: resources,
        }),
      ],
      memorySize: 512,
      stage,
    });

    const userDs = api.addLambdaDataSource("UploadFn", uploadFn);
    createSchema(api, userDs);
  }
}
