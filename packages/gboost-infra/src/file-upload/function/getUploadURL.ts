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
    const bucketMap = JSON.parse(process.env.BUCKET_MAP);
    let i = 0;
    let notFound = true;
    while (notFound && i < bucketMap.length) {
      if (bucketMap[i].bucket === bucket) {
        notFound = false;
      } else {
        i++;
      }
    }
    if (notFound) {
      logger.error(`Could not find bucket ${bucket}`);
    } else {
      const command = new PutObjectCommand({
        Bucket: bucket,
        Key: bucketMap[i].baseKey + fileName,
      });
      const url = await getSignedUrl(client, command, { expiresIn: 3600 });

      return {
        url: url,
      };
    }
  } else {
    logger.error("Could not find bucket map");
    return;
  }
}
