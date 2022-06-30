import { AppSyncResolverEvent } from "aws-lambda";
import { abortUpload } from "./abortUpload.js";
import { completeUpload } from "./completeUpload.js";
import { getUploadId } from "./getUploadId.js";
import { getUploadPartURL } from "./getUploadPartURL.js";
import { getUploadURL } from "./getUploadURL.js";

export async function handler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: AppSyncResolverEvent<any>
): Promise<unknown> {
  const params = {
    event,
  };
  console.log(JSON.stringify(event));
  try {
    switch (event.info.fieldName) {
      case "getUploadURL":
        return getUploadURL(params);
      case "getUploadId":
        return getUploadId(params);
      case "getUploadPartURL":
        return getUploadPartURL(params);
      case "completeUpload":
        return completeUpload(params);
      case "abortUpload":
        return abortUpload(params);
      default:
        throw new Error(
          `unknown event.infor.fieldname: ${event.info.fieldName}`
        );
    }
  } catch (error) {
    console.error(error);
  }
}
