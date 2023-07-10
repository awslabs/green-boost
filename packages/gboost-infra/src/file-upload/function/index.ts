import type { AppSyncResolverHandler } from "aws-lambda";
import { abortUpload } from "./abortUpload";
import { completeUpload } from "./completeUpload";
import { getUploadId } from "./getUploadId";
import { getUploadPartURL } from "./getUploadPartURL";
import { getUploadURL } from "./getUploadURL";
import { Logger } from "@aws-lambda-powertools/logger";

const logger = new Logger({ serviceName: "greenBoostFileUpload" });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handler: AppSyncResolverHandler<any, any> = (event, context) => {
  logger.addContext(context);
  const params = {
    event,
    logger,
  };

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
  return;
};
