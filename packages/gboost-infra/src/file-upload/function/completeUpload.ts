import { Logger } from "@aws-lambda-powertools/logger";
import {
  CompletedPart,
  CompleteMultipartUploadCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { AppSyncResolverEvent } from "aws-lambda";

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

const client = new S3Client({ region: process.env.REGION });

export async function completeUpload(params: completeUploadParams) {
  const {
    input: { bucket, fileName, uploadId, multipartUpload },
  } = params.event.arguments;
  const { logger } = params;

  if (process.env.BUCKET_MAP) {
    const command = new CompleteMultipartUploadCommand({
      Bucket: JSON.parse(process.env.BUCKET_MAP)[bucket].bucket,
      Key: JSON.parse(process.env.BUCKET_MAP)[bucket].key + fileName,
      UploadId: uploadId,
      MultipartUpload: {
        Parts: multipartUpload,
      },
    });
    const response = await client.send(command);

    return {
      statusCode: response.$metadata.httpStatusCode,
    };
  } else {
    logger.error("Could not find bucket map");
    return;
  }
}
