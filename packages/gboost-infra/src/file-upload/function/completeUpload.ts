import {
  CompletedPart,
  CompleteMultipartUploadCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { AppSyncResolverEvent } from "aws-lambda";

interface completeUploadArgs {
  input: {
    region: string;
    bucket: string;
    fileName: string;
    uploadId: string;
    multipartUpload: CompletedPart[];
  };
}

interface completeUploadParams {
  event: AppSyncResolverEvent<completeUploadArgs>;
}

export async function completeUpload(params: completeUploadParams) {
  const {
    input: { region },
    input: { bucket },
    input: { fileName },
    input: { uploadId },
    input: { multipartUpload },
  } = params.event.arguments;

  const client = new S3Client({ region: region });
  if (process.env.BUCKET_MAP) {
    const command = new CompleteMultipartUploadCommand({
      Bucket: JSON.parse(process.env.BUCKET_MAP)[bucket],
      Key: fileName,
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
    console.log("Could not find bucket map");
    return;
  }
}
