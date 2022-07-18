import { CreateMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";
import { AppSyncResolverEvent } from "aws-lambda";

interface getUploadIdArgs {
  input: {
    region: string;
    bucket: string;
    fileName: string;
  };
}

interface getUploadIdParams {
  event: AppSyncResolverEvent<getUploadIdArgs>;
}

export async function getUploadId(params: getUploadIdParams) {
  const {
    input: { region, bucket, fileName },
  } = params.event.arguments;

  const client = new S3Client({ region: region });
  if (process.env.BUCKET_MAP) {
    const command = new CreateMultipartUploadCommand({
      Bucket: JSON.parse(process.env.BUCKET_MAP)[bucket].bucket,
      Key: JSON.parse(process.env.BUCKET_MAP)[bucket].key + fileName,
    });
    const response = await client.send(command);

    return {
      uploadId: response.UploadId,
    };
  } else {
    console.log("Could not find bucket map");
    return;
  }
}
