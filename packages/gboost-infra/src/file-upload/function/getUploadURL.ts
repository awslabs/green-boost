import type { AppSyncResolverEvent } from "aws-lambda";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { Logger } from "@aws-lambda-powertools/logger";
import { findIndex } from "./findIndex";

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

const client = new S3Client({ region: process.env["REGION"] });

export async function getUploadURL(params: getUploadURLParams) {
  const {
    input: { fileName, bucket },
  } = params.event.arguments;
  const { logger } = params;

  if (process.env["BUCKET_MAP"]) {
    const bucketMap: { bucket: string; baseKey: string }[] = JSON.parse(
      process.env["BUCKET_MAP"]
    );
    const i = findIndex(bucketMap, bucket);
    if (i === -1) {
      logger.error(`Could not find bucket ${bucket}`);
      return;
    } else {
      const command = new PutObjectCommand({
        Bucket: bucket,
        Key: bucketMap[i]?.baseKey + fileName,
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
