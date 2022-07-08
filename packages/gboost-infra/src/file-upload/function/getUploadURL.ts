import type { AppSyncResolverEvent } from "aws-lambda";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

interface getUploadURLArgs {
  input: {
    fileName: string;
    bucket: string;
    region: string;
  };
}

interface getUploadURLParams {
  event: AppSyncResolverEvent<getUploadURLArgs>;
}

export async function getUploadURL(params: getUploadURLParams) {
  const {
    input: { fileName },
    input: { bucket },
    input: { region },
  } = params.event.arguments;

  const client = new S3Client({ region: region });

  if (process.env.BUCKET_MAP) {
    const command = new PutObjectCommand({
      Bucket: JSON.parse(process.env.BUCKET_MAP)[bucket].bucket,
      Key: JSON.parse(process.env.BUCKET_MAP)[bucket].key + fileName,
    });
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });

    return {
      url: url,
    };
  } else {
    console.log("Could not find bucket map");
    return;
  }
}
