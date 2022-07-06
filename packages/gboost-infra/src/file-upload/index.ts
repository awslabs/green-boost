import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { GraphqlApi } from "@aws-cdk/aws-appsync-alpha";
import { Function } from "../function.js";
import { createSchema } from "./createSchema.js";
import { CommonProps, Stage } from "../common-props.js";

export interface FileUploadProps extends CommonProps {
  api: GraphqlApi;
  stage?: Stage;
  partition?: string;
  buckets: string;
}

export class FileUpload extends Construct {
  constructor(scope: Construct, id: string, props: FileUploadProps) {
    super(scope, id);
    const { api, stage = Stage.Dev, partition = "aws", buckets } = props;

    const fileExt = import.meta.url.slice(-2);
    const resources = [];
    const parsedBuckets = JSON.parse(buckets);
    for (let i = 0; i < Object.keys(parsedBuckets).length; i++) {
      const bucketKey = Object.keys(parsedBuckets)[i];
      resources[2 * i] =
        "arn:" + partition + ":s3:::" + JSON.parse(buckets)[bucketKey] + "/*";
      resources[2 * i + 1] =
        "arn:" + partition + ":s3:::" + JSON.parse(buckets)[bucketKey];
    }
    const uploadFn = new Function(this, "UploadFunction", {
      entry: new URL(`./function/index.${fileExt}`, import.meta.url).pathname,
      environment: {
        BUCKET_MAP: buckets,
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
