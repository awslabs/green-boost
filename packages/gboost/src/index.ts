import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { Command, Option } from "@commander-js/extra-typings";
import { getErrorMessage } from "gboost-common";
import { create } from "./create/create.js";
import { setupFn } from "./invoke/setup-fn.js";
import { logger, LogLevel } from "./utils/logger.js";

const thisFilePath = fileURLToPath(import.meta.url);

const program = new Command();
const pkgJson: { version: string } = JSON.parse(
  readFileSync(resolve(thisFilePath, "../../package.json"), {
    encoding: "utf-8",
  })
);

program
  .name("gboost")
  .description(
    "CLI for Green Boost - the toolkit for building full stack serverless web apps on AWS fast."
  )
  .version(pkgJson.version)
  .addOption(
    new Option("--log-level", "Controls verbosity of logging.")
      .choices(Object.keys(LogLevel))
      .env("LOGLEVEL")
      .default(LogLevel.ERROR)
  );

try {
  program
    .command("create")
    .description(
      "Scaffold a monorepo from a template after answering a questionnaire."
    )
    .action(async () => {
      await create();
    });
  program
    .command("invoke")
    .description(
      "Invoke local TypeScript Lambda function mocked with environment variables and IAM permissions. Requires use of gboost-infra Function construct and CDK app to already be synthesized."
    )
    .argument(
      "<entrypoint>",
      "Function entrypoint file path relative to current working directory."
    )
    .addOption(
      new Option(
        "-e, --event <event>",
        "Stringified JSON of event to pass to function."
      )
    )
    // TODO: remove mandatory option
    .addOption(
      new Option("-a, --arn <arn>", "Function ARN").makeOptionMandatory()
    )
    .action(async (entrypoint, options) => {
      await setupFn({
        handlerPath: entrypoint,
        event: options.event,
        functionArn: options.arn,
      });
    });
  program.parse();
} catch (err) {
  logger.error("An error occurred :(");
  logger.debug(getErrorMessage(err));
}
