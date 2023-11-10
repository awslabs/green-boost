import type { Logger } from "@aws-lambda-powertools/logger";
import { CreateMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";
import type { AppSyncResolverEvent } from "aws-lambda";
import { findIndex } from "./findIndex.js";

interface getUploadIdArgs {
  input: {
    bucket: string;
    fileName: string;
  };
}

interface getUploadIdParams {
  event: AppSyncResolverEvent<getUploadIdArgs>;
  logger: Logger;
}

const client = new S3Client({ region: process.env["REGION"] });

export async function getUploadId(params: getUploadIdParams) {
  const {
    input: { bucket, fileName },
  } = params.event.arguments;
  const { logger } = params;

  if (process.env["BUCKET_MAP"]) {
    const bucketMap: { bucket: string; baseKey: string }[] = JSON.parse(
      process.env["BUCKET_MAP"],
    );
    const i = findIndex(bucketMap, bucket);
    if (i === -1) {
      logger.error(`Could not find bucket ${bucket}`);
      return;
    } else {
      const command = new CreateMultipartUploadCommand({
        Bucket: bucket,
        Key: bucketMap[i]?.baseKey + fileName,
      });
      const response = await client.send(command);

      return {
        uploadId: response.UploadId,
      };
    }
  } else {
    logger.error("Could not find bucket map");
    return;
  }
}
