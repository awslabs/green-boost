import { execSync } from "node:child_process";
import log from "loglevel";
import { injectFnConfig } from "./inject-fn-config.js";
import { fileURLToPath } from "node:url";

interface RunFnParams {
  event?: string;
  functionArn?: string;
  handlerPath: string;
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

export async function runFn(params: RunFnParams) {
  const { handlerPath, event, functionArn } = params;
  // inject function config needs to run before handler is imported so any
  // logic outside handler has access to env vars retrieved via functionArn
  if (functionArn) {
    try {
      // injects fn config into process.env and dummyContext
      await injectFnConfig({ dummyContext, functionArn });
    } catch (err) {
      log.error(`Failed to fetch function configuration for ${functionArn}`);
      log.error(err);
      return;
    }
  }
  const ext = import.meta.url.split(".").pop();
  const callFnPath = fileURLToPath(new URL("call-fn." + ext, import.meta.url));
  // --cwdMode look for tsconfig.json in developer's directory instead of node_modules
  execSync(
    `ts-node-esm --cwdMode ${callFnPath} -h ${handlerPath} -e ${event} -c '${JSON.stringify(
      dummyContext
    )}'`,
    { env: process.env, stdio: "inherit", encoding: "utf-8" }
  );
}
