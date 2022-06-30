import type { AppSyncResolverEvent } from "aws-lambda";
import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
  PutBucketCorsCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

interface getUploadURLArgs {
  input: {
    fileName: string;
    bucketName: string;
    region: string;
  };
}

interface getUploadURLParams {
  event: AppSyncResolverEvent<getUploadURLArgs>;
}

export async function getUploadURL(params: getUploadURLParams) {
  const {
    input: { fileName },
    input: { bucketName },
    input: { region },
  } = params.event.arguments;

  const client = new S3Client({ region: region });
  try {
    await client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
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
      Bucket: bucketName,
      CORSConfiguration: { CORSRules },
    };
    const data = await client.send(new PutBucketCorsCommand(corsParams));
    if (data.$metadata.httpStatusCode != 200) {
      console.log("Error with PutBucketCorsCommand");
    }
  } catch (error) {
    console.log("\n" + "ERROR\n" + JSON.stringify(error));
  }

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
  });
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });

  return {
    url: url,
  };
}
