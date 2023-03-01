// @ts-nocheck
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { logger } from "../../utils/logger.js";
import { router } from "./trpc.js";

export type AppRouter = typeof router;

export const handler = awsLambdaRequestHandler({
  router,
  onError: (opts) => logger.error(JSON.stringify(opts)),
  responseMeta: () => ({
    headers: {
      // TODO: get origin of frontend (from SSM Param?) and replace *
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST",
    },
  }),
});
