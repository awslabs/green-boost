import { execSync } from "node:child_process";
import { injectFnConfig } from "./inject-fn-config.js";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";
import { logger } from "../utils/logger.js";

interface RunFnParams {
  event?: string;
  functionArn?: string;
  handlerPath: string;
  debug?: boolean;
}

const dummyContext = {
  callbackWaitsForEmptyEventLoop: true,
  functionVersion: "$LATEST",
  functionName: "foo-bar-function",
  memoryLimitInMB: "128",
  logGroupName: "/aws/lambda/foo-bar-function",
  logStreamName: "2021/03/09/[$LATEST]abcdef123456abcdef123456abcdef123456",
  invokedFunctionArn:
    "arn:aws:lambda:us-east-1:123456789012:function:foo-bar-function",
  awsRequestId: "c6af9ac6-7b61-11e6-9a41-93e812345678",
  getRemainingTimeInMillis: () => 1000 * 30, // 30 seconds
  done: () => console.log("Done!"),
  fail: () => console.log("Failed!"),
  succeed: () => console.log("Succeeded!"),
};

export async function setupFn(params: RunFnParams) {
  const { handlerPath, event, functionArn, debug } = params;
  // inject function config needs to run before handler is imported so any
  // logic outside handler has access to env vars retrieved via functionArn
  if (functionArn) {
    try {
      // injects fn config into process.env and dummyContext
      await injectFnConfig({ dummyContext, functionArn });
    } catch (err) {
      logger.error(`Failed to fetch function configuration for ${functionArn}`);
      logger.error(err);
      return;
    }
  }
  let command = "";
  if (debug) {
    command += 'NODE_OPTIONS="--inspect-brk" ';
  }
  const ext = import.meta.url.split(".").pop();
  const callFnPath = fileURLToPath(new URL("call-fn." + ext, import.meta.url));
  // --cwdMode look for tsconfig.json in developer's directory instead of node_modules
  command += `ts-node-esm --cwdMode ${callFnPath} -h ${handlerPath} -c ${JSON.stringify(
    dummyContext
  )} `;
  if (event) {
    if (event[0] === "{") {
      logger.debug("Assuming event is a string object");
      command += `-e '${event}'`;
    } else {
      logger.debug("Assuming event is a file path");
      try {
        const eventStr = readFileSync(event, { encoding: "utf-8" });
        command += `e '${eventStr}'`;
      } catch (err) {
        logger.debug(err);
        logger.error(`File does not exist at path ${event}`);
      }
    }
  }
  try {
    execSync(command, {
      env: process.env,
      stdio: "inherit",
      encoding: "utf-8",
    });
  } catch (err) {
    logger.error(err);
  }
}
