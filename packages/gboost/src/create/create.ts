import kleur from "kleur";
import { chdir } from "process";
import { logger } from "../utils/logger.js";
import { ask } from "./ask.js";
import { executeOperations } from "./execute-operations.js";
import { getOperations } from "./get-operations.js";

/**
 * Creates a Green Boost app based on a given template
 */
export async function create() {
  const answers = await ask();
  const operations = getOperations({
    template: answers.template,
    destination: answers.directory,
    scope: answers.scope,
  });
  executeOperations(operations);
  chdir(answers.directory);
  const message =
    "\n" +
    `✅ Done! Change directory into your new repo: ${kleur.yellow(
      `cd ${answers.directory}`
    )}` +
    "\n" +
    `📦 Install dependencies with ${kleur.yellow("pnpm i")}` +
    "\n\n" +
    `Quick Guide:` +
    "\n" +
    `🚀 Deploy your web app: ${kleur.yellow("cd infra")} then ${kleur.yellow(
      'cdk deploy "*"'
    )}` +
    "\n" +
    `💻 Locally develop your frontend: ${kleur.yellow(
      "cd ui"
    )} then ${kleur.yellow("pnpm dev")}`;
  logger.log(message);
}
