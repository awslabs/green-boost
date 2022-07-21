import log, { LogLevelDesc } from "loglevel";
import { resolve } from "node:path";
import parse from "minimist";
/* 
In order to import developer's TS file with handler and call it, we cannot just
compile run-fn.ts calling function within b/c Node.js doesn't know how to handle
.ts files. Therefore, we must use ts-node to compile from .ts to .js and then
call developer's handler with event and context.
*/

log.setLevel((process.env.LOG_LEVEL as LogLevelDesc) || log.levels.ERROR);

const argv = parse(process.argv.slice(2));
callFn({
  event: argv.e,
  handlerPath: argv.h,
  dummyContext: argv.c,
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
