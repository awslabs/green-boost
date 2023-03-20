// @ts-nocheck
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { logger } from "../../utils/logger.js";
import { router } from "./router.js";

export const handler = awsLambdaRequestHandler({
  router,
  onError: (opts) => logger.error("Error:", { ...opts, req: undefined }),
  responseMeta: () => ({
    headers: {
      // TODO: get origin of frontend (from SSM Param?) and replace *
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST", //
    },
  }),
});

