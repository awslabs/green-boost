import { S3Client, UploadPartCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { AppSyncResolverEvent } from "aws-lambda";

interface getUploadPartURLArgs {
  input: {
    region: string;
    bucket: string;
    fileName: string;
    numberOfParts: number;
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
    input: { numberOfParts },
    input: { uploadId },
  } = params.event.arguments;

  const client = new S3Client({ region: region });
  if (process.env.BUCKET_MAP) {
    const urls: string[] = [];
    for (let i = 0; i < numberOfParts; i++) {
      const command = new UploadPartCommand({
        Bucket: JSON.parse(process.env.BUCKET_MAP)[bucket],
        Key: fileName,
        PartNumber: i + 1,
        UploadId: uploadId,
      });

      const url = await getSignedUrl(client, command, { expiresIn: 3600 });
      urls.push(url);
    }

    return {
      urls: urls,
    };
  } else {
    console.log("Could not find bucket map");
    return;
  }
}
