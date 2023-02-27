import type { Logger } from "@aws-lambda-powertools/logger";
import {
  CompletedPart,
  CompleteMultipartUploadCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import type { AppSyncResolverEvent } from "aws-lambda";
import { findIndex } from "./findIndex.js";

interface completeUploadArgs {
  input: {
    bucket: string;
    fileName: string;
    uploadId: string;
    multipartUpload: CompletedPart[];
  };
}

interface completeUploadParams {
  event: AppSyncResolverEvent<completeUploadArgs>;
  logger: Logger;
}

const client = new S3Client({ region: process.env["REGION"] });

export async function completeUpload(params: completeUploadParams) {
  const {
    input: { bucket, fileName, uploadId, multipartUpload },
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
      const command = new CompleteMultipartUploadCommand({
        Bucket: bucket,
        Key: bucketMap[i]?.baseKey + fileName,
        UploadId: uploadId,
        MultipartUpload: {
          Parts: multipartUpload,
        },
      });
      const response = await client.send(command);

      return {
        statusCode: response.$metadata.httpStatusCode,
      };
    }
  } else {
    logger.error("Could not find bucket map");
    return;
  }
}
