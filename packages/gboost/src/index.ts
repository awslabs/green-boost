#!/usr/bin/env node

import parse from "minimist";
import { deployDev } from "./deploy-dev.js";
import { create } from "./create.js";

try {
  const argv = parse(process.argv.slice(2));
  const command = argv._[0];
  switch (command) {
    case "create":
      create();
      break;
    case "deploy-dev":
      deployDev();
      break;
    case "help":
    default:
      console.log("usage: gboost <create|deploy-dev>");
  }
} catch (err) {
  console.log(err);
}
