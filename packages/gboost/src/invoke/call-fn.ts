import { resolve } from "node:path";
import parse from "minimist";
import { logger } from "../utils/logger.js";

const argv = parse(process.argv.slice(2));
callFn({
  event: argv["e"],
  handlerPath: argv["h"],
  dummyContext: argv["c"],
});

interface CallFnParams {
  event?: string;
  handlerPath: string;
  dummyContext: string;
}

export async function callFn(params: CallFnParams) {
  const { event, dummyContext, handlerPath } = params;
  const cwdHandlerPath = resolve(process.cwd(), handlerPath);
  let handlerModule;
  try {
    handlerModule = await import(cwdHandlerPath);
  } catch (err) {
    logger.error("Error importing handler");
    logger.error(err);
  }
  if (!("handler" in handlerModule)) {
    throw new Error(`handler is not exported from ${handlerPath}`);
  }
  let parsedEvent;
  if (event) {
    try {
      parsedEvent = JSON.parse(event);
    } catch (err) {
      logger.error("Error parsing event:");
      logger.error(err);
      return;
    }
  }
  try {
    logger.debug("Calling handler");
    const returnValue = await handlerModule.handler(parsedEvent, dummyContext);
    logger.debug("Handler successfully called");
    console.log("Handler response:");
    console.log(returnValue as string);
  } catch (err) {
    logger.error("Error running handler:");
    logger.error(err as string);
  }
}
