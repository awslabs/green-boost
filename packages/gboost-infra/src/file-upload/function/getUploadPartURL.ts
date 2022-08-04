import { Logger } from "@aws-lambda-powertools/logger";
import { S3Client, UploadPartCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { AppSyncResolverEvent } from "aws-lambda";
import { findIndex } from "./findIndex.js";

interface getUploadPartURLArgs {
  input: {
    bucket: string;
    fileName: string;
    numberOfParts: number;
    uploadId: string;
  };
}

interface getUploadPartURLParams {
  event: AppSyncResolverEvent<getUploadPartURLArgs>;
  logger: Logger;
}

const client = new S3Client({ region: process.env.REGION });

export async function getUploadPartURL(params: getUploadPartURLParams) {
  const {
    input: { bucket, fileName, numberOfParts, uploadId },
  } = params.event.arguments;
  const { logger } = params;

  if (process.env.BUCKET_MAP) {
    const bucketMap: { bucket: string; baseKey: string }[] = JSON.parse(
      process.env.BUCKET_MAP
    );
    const i = findIndex(bucketMap, bucket);
    if (i === -1) {
      logger.error(`Could not find bucket ${bucket}`);
    } else {
      const urls: string[] = [];
      for (let urlIndex = 0; urlIndex < numberOfParts; urlIndex++) {
        const command = new UploadPartCommand({
          Bucket: bucket,
          Key: bucketMap[i].baseKey + fileName,
          PartNumber: urlIndex + 1,
          UploadId: uploadId,
        });

        const url = await getSignedUrl(client, command, { expiresIn: 3600 });
        urls.push(url);
      }

      return {
        urls: urls,
      };
    }
  } else {
    logger.error("Could not find bucket map");
    return;
  }
}
