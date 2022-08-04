import { AppSyncResolverEvent } from "aws-lambda";
import { abortUpload } from "./abortUpload.js";
import { completeUpload } from "./completeUpload.js";
import { getUploadId } from "./getUploadId.js";
import { getUploadPartURL } from "./getUploadPartURL.js";
import { getUploadURL } from "./getUploadURL.js";
import { injectLambdaContext, Logger } from "@aws-lambda-powertools/logger";
import middy from "@middy/core";

const logger = new Logger({ serviceName: "greenBoostFileUpload" });

async function lambdaHandler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: AppSyncResolverEvent<any>
): Promise<unknown> {
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
          `unknown event.info.fieldname: ${event.info.fieldName}`
        );
    }
  } catch (error) {
    console.error(error);
  }
}

export const handler = middy(lambdaHandler).use(
  injectLambdaContext(logger, { logEvent: true })
);
