import { Logger } from "@aws-lambda-powertools/logger";
import { CreateMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";
import { AppSyncResolverEvent } from "aws-lambda";

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

const client = new S3Client({ region: process.env.REGION });

export async function getUploadId(params: getUploadIdParams) {
  const {
    input: { bucket, fileName },
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
      const command = new CreateMultipartUploadCommand({
        Bucket: bucket,
        Key: bucketMap[i].baseKey + fileName,
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
