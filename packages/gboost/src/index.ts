#!/usr/bin/env node

import parse from "minimist";
import { deployDev } from "./deploy-dev.js";
import { create } from "./create/create.js";
import { destroyDev } from "./destroy-dev.js";

try {
  const argv = parse(process.argv.slice(2));
  const command = argv._[0];
  switch (command) {
    case "create":
      create();
      break;
    case "deploy-dev":
      console.log(argv);
      deployDev({
        hotswap: argv.h || argv.hotswap,
        backendOnly: argv.b || argv["backend-only"],
        frontendOnly: argv.f || argv["frontend-only"],
      });
      break;
    case "destroy-dev":
      destroyDev();
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
          "\n\t--debug"
      );
  }
} catch (err) {
  console.log(err);
}
