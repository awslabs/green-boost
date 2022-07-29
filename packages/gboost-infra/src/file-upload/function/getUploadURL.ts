import type { AppSyncResolverEvent } from "aws-lambda";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Logger } from "@aws-lambda-powertools/logger";

interface getUploadURLArgs {
  input: {
    fileName: string;
    bucket: string;
  };
}

interface getUploadURLParams {
  event: AppSyncResolverEvent<getUploadURLArgs>;
  logger: Logger;
}

const client = new S3Client({ region: process.env.REGION });

export async function getUploadURL(params: getUploadURLParams) {
  const {
    input: { fileName, bucket },
  } = params.event.arguments;
  const { logger } = params;

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
    logger.error("Could not find bucket map");
    return;
  }
}
