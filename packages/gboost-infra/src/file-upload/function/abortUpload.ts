import type { Logger } from "@aws-lambda-powertools/logger";
import { AbortMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";
import type { AppSyncResolverEvent } from "aws-lambda";
import { findIndex } from "./findIndex.js";

interface abortUploadArgs {
  input: {
    bucket: string;
    fileName: string;
    uploadId: string;
  };
}

interface abortUploadParams {
  event: AppSyncResolverEvent<abortUploadArgs>;
  logger: Logger;
}

const client = new S3Client({ region: process.env["REGION"] });

export async function abortUpload(params: abortUploadParams) {
  const {
    input: { bucket, fileName, uploadId },
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
      const response = await client.send(
        new AbortMultipartUploadCommand({
          Bucket: bucket,
          Key: bucketMap[i]?.baseKey + fileName,
          UploadId: uploadId,
        })
      );
      return {
        statusCode: response.$metadata.httpStatusCode,
      };
    }
  } else {
    logger.error("Could not find bucket map");
    return;
  }
}
