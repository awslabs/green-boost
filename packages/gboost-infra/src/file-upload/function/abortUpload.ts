import { Logger } from "@aws-lambda-powertools/logger";
import { AbortMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";
import { AppSyncResolverEvent } from "aws-lambda";

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

const client = new S3Client({ region: process.env.REGION });

export async function abortUpload(params: abortUploadParams) {
  const {
    input: { bucket, fileName, uploadId },
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
      const response = await client.send(
        new AbortMultipartUploadCommand({
          Bucket: bucket,
          Key: bucketMap[i].baseKey + fileName,
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
