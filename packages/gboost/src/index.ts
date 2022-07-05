#!/usr/bin/env node

import parse from "minimist";
import { getErrorMessage, Logger, LogLevel } from "gboost-common";
import { execSync } from "node:child_process";
import { deployDev } from "./deploy-dev.js";
import { create } from "./create/create.js";
import { destroyDev } from "./destroy-dev.js";

export let logger!: Logger;

try {
  listenForSigInt();
  ensurePnpm();
  const argv = parse(process.argv.slice(2));
  setupLogger(argv.d || argv.debug || process.env.LOG_LEVEL);
  const command = argv._[0];
  const backendOnly = argv.b || argv["backend-only"];
  const frontendOnly = argv.f || argv["frontend-only"];
  switch (command) {
    case "create":
      create();
      break;
    case "deploy-dev":
      deployDev({
        hotswap: argv.h || argv.hotswap,
        backendOnly,
        frontendOnly,
      });
      break;
    case "destroy-dev":
      destroyDev({
        backendOnly,
        frontendOnly,
      });
      break;
    case "help":
    default:
      console.log(
        "usage: gboost COMMAND" +
          "\nCommands:" +
          "\n\tgboost create\tCreate a repository to build a Green Boost app" +
          "\n\tgboost deploy-dev\tDeploy a Green Boost app" +
          "\n\t\t-h, --hotswap\tAttempts a faster, short-circuit deployment if possible" +
          "\n\t\t-b, --backend-only\tOnly deploys backend" +
          "\n\t\t-f, --frontend-only\tOnly deploys frontend" +
          "\n\tgboost destroy-dev\tDestroy a Green Boost app" +
          "\n\tgboost help" +
          "\n" +
          "\nOptions:" +
          "\n\t-d, --debug\t[LOG_LEVEL]\terror|warn|info|debug"
      );
  }
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

function setupLogger(logLevel: LogLevel) {
  logger = new Logger(logLevel);
}

function ensurePnpm() {
  try {
    execSync("pnpm -v");
  } catch (err) {
    logger.error("Please install PNPM: https://pnpm.io/installation");
    throw err;
  }
}
