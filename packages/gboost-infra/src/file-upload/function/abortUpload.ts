import { AbortMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";
import { AppSyncResolverEvent } from "aws-lambda";

interface abortUploadArgs {
  input: {
    region: string;
    bucket: string;
    fileName: string;
    uploadId: string;
  };
}

interface abortUploadParams {
  event: AppSyncResolverEvent<abortUploadArgs>;
}

export async function abortUpload(params: abortUploadParams) {
  const {
    input: { region },
    input: { bucket },
    input: { fileName },
    input: { uploadId },
  } = params.event.arguments;

  const client = new S3Client({ region: region });
  const response = await client.send(
    new AbortMultipartUploadCommand({
      Bucket: bucket,
      Key: fileName,
      UploadId: uploadId,
    })
  );
  return {
    statusCode: response.$metadata.httpStatusCode,
  };
}
