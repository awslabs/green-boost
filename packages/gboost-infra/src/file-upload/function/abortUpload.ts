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
  if (process.env.BUCKET_MAP) {
    const response = await client.send(
      new AbortMultipartUploadCommand({
        Bucket: JSON.parse(process.env.BUCKET_MAP)[bucket].bucket,
        Key: JSON.parse(process.env.BUCKET_MAP)[bucket].key + fileName,
        UploadId: uploadId,
      })
    );
    return {
      statusCode: response.$metadata.httpStatusCode,
    };
  } else {
    console.log("Could not find bucket map");
    return;
  }
}
