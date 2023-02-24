#!/usr/bin/env node

import parse from "minimist";
import { getErrorMessage } from "gboost-common";
import { create } from "./create/create.js";
import { showHelp } from "./help.js";
import { setupFn } from "./run-fn/setup-fn.js";
import { logger } from "./utils/logger.js";

try {
  listenForSigInt();
  const argv = parse(process.argv.slice(2));
  const command = argv._[0];
  switch (command) {
    case "create":
      await create();
      break;
    case "run-fn":
      await setupFn({
        handlerPath: argv.h || argv.handler,
        event: argv.e || argv.event,
        functionArn: argv.a || argv.functionArn,
        debug: argv.d || argv.debug,
      });
      break;
    case "help":
    default:
      showHelp();
  }
  process.exit(); // have to call this or proecss hangs, not sure why
} catch (err) {
  logger.error("An error occurred :(");
  logger.debug(getErrorMessage(err));
}

function listenForSigInt() {
  process.on("SIGINT", () => {
    console.log("\nStopping. Goodbye 👋");
    process.exit();
  });
}
