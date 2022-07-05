#!/usr/bin/env node

import parse from "minimist";
import { getErrorMessage, Logger, LogLevel } from "gboost-common";
import { execSync } from "node:child_process";
import { deployDev } from "./deploy-dev.js";
import { create } from "./create/create.js";
import { destroyDev } from "./destroy-dev.js";
import { showHelp } from "./help.js";

export let logger!: Logger;

try {
  listenForSigInt();
  ensurePnpm();
  const argv = parse(process.argv.slice(2));
  setupLogger(argv.d || argv.debug || process.env.LOG_LEVEL);
  const command = argv._[0];
  const backendOnly = argv.b || argv["backend-only"] || false;
  const frontendOnly = argv.f || argv["frontend-only"] || false;
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
      showHelp();
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
