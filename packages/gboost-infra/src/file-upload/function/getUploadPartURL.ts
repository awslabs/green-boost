import { S3Client, UploadPartCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { AppSyncResolverEvent } from "aws-lambda";

interface getUploadPartURLArgs {
  input: {
    region: string;
    bucket: string;
    fileName: string;
    partNumber: number;
    uploadId: string;
  };
}

interface getUploadPartURLParams {
  event: AppSyncResolverEvent<getUploadPartURLArgs>;
}

export async function getUploadPartURL(params: getUploadPartURLParams) {
  const {
    input: { region },
    input: { bucket },
    input: { fileName },
    input: { partNumber },
    input: { uploadId },
  } = params.event.arguments;

  const client = new S3Client({ region: region });
  const command = new UploadPartCommand({
    Bucket: bucket,
    Key: fileName,
    PartNumber: partNumber,
    UploadId: uploadId,
  });

  const url = await getSignedUrl(client, command, { expiresIn: 3600 });

  return {
    url: url,
  };
}
