#!/usr/bin/env node

import parse from "minimist";
import { getErrorMessage } from "gboost-common";
import { execSync } from "node:child_process";
import log from "loglevel";
import { deployDev } from "./deploy-dev.js";
import { create } from "./create/create.js";
import { destroyDev } from "./destroy-dev.js";
import { showHelp } from "./help.js";
import { runFn } from "./run-fn/run-fn.js";

try {
  listenForSigInt();
  ensurePnpm();
  const argv = parse(process.argv.slice(2));
  setupLogger(argv);
  const command = argv._[0];
  const backendOnly = argv.b || argv["backend-only"] || false;
  const frontendOnly = argv.f || argv["frontend-only"] || false;
  switch (command) {
    case "create":
      await create();
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
    case "run-fn":
      await runFn({
        handlerPath: argv.h || argv.handler,
        event: argv.e || argv.event,
        functionArn: argv.a || argv.functionArn,
      });
      break;
    case "help":
    default:
      showHelp();
  }
  process.exit(); // have to call this or proecss hangs, not sure why
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

function setupLogger(argv: parse.ParsedArgs) {
  log.setDefaultLevel(log.levels.ERROR);
  const level = argv.d || argv.debug || process.env.LOG_LEVEL;
  if (level) log.setLevel(argv.d || argv.debug || process.env.LOG_LEVEL);
}
