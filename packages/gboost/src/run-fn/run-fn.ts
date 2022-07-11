import { resolve } from "path";
import log from "loglevel";
import { injectFnConfig } from "./injectFnConfig.js";

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
      await injectFnConfig({ dummyContext, functionArn });
    } catch (err) {
      log.error(`Failed to fetch function configuration for ${functionArn}`);
      log.error(err);
      return;
    }
  }
  const cwdHandlerPath = resolve(process.cwd(), handlerPath);
  let handlerModule;
  try {
    handlerModule = await import(cwdHandlerPath);
  } catch (err) {
    log.error("Error importing handler");
    log.error(err);
  }
  if (!("handler" in handlerModule)) {
    throw new Error(`handler is not exported from ${handlerPath}`);
  }
  let parsedEvent;
  if (event) {
    try {
      parsedEvent = JSON.parse(event);
    } catch (err) {
      log.error("Error parsing event:");
      log.error(err);
      return;
    }
  }
  try {
    log.debug("Calling handler");
    const returnValue = await handlerModule.handler(parsedEvent, dummyContext);
    log.debug("Handler successfully called");
    console.log("Handler response:");
    console.log(returnValue as string);
  } catch (err) {
    log.error("Error running handler:");
    log.error(err as string);
  }
}
