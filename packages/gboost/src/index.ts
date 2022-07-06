#!/usr/bin/env node

import parse from "minimist";
import { getErrorMessage } from "gboost-common";
import { execSync } from "node:child_process";
import { deployDev } from "./deploy-dev.js";
import { create } from "./create/create.js";
import { destroyDev } from "./destroy-dev.js";
import { showHelp } from "./help.js";
import log from "loglevel";

try {
  listenForSigInt();
  ensurePnpm();
  const argv = parse(process.argv.slice(2));
  log.setDefaultLevel(log.levels.ERROR);
  log.setDefaultLevel(argv.d || argv.debug || process.env.LOG_LEVEL);
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
  log.error("An error occurred :(");
  log.debug(getErrorMessage(err));
}

function listenForSigInt() {
  process.on("SIGINT", () => {
    console.log("\nStopping. Goodbye 👋");
    process.exit();
  });
}

function ensurePnpm() {
  try {
    execSync("pnpm -v");
  } catch (err) {
    log.error("Please install PNPM: https://pnpm.io/installation");
    throw err;
  }
}
