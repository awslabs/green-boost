import {
  CreateBucketCommand,
  CreateMultipartUploadCommand,
  PutBucketCorsCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { AppSyncResolverEvent } from "aws-lambda";

interface getUploadIdArgs {
  input: {
    region: string;
    bucket: string;
    fileName: string;
  };
}

interface getUploadIdParams {
  event: AppSyncResolverEvent<getUploadIdArgs>;
}

export async function getUploadId(params: getUploadIdParams) {
  const {
    input: { region },
    input: { bucket },
    input: { fileName },
  } = params.event.arguments;

  const client = new S3Client({ region: region });
  try {
    await client.send(
      new CreateBucketCommand({
        Bucket: bucket,
      })
    );
    const corsConfig = {
      AllowedHeaders: ["*"],
      AllowedMethods: ["POST", "PUT"],
      AllowedOrigins: ["*"],
      ExposeHeaders: ["Access-Control-Allow-Origin", "ETag"],
    };
    const CORSRules = new Array(corsConfig);
    const corsParams = {
      Bucket: bucket,
      CORSConfiguration: { CORSRules },
    };
    const data = await client.send(new PutBucketCorsCommand(corsParams));
    if (data.$metadata.httpStatusCode != 200) {
      console.log("Error with PutBucketCorsCommand");
    }
  } catch (error) {
    console.log("\n" + "ERROR\n" + JSON.stringify(error));
  }
  const command = new CreateMultipartUploadCommand({
    Bucket: bucket,
    Key: fileName,
  });
  const response = await client.send(command);

  return {
    uploadId: response.UploadId,
  };
}
