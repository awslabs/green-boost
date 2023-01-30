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
    "\n\n" +
    `✅ Done!` +
    "\n" +
    `📦 Install dependencies with ${kleur.yellow("pnpm i")}` +
    "\n\n" +
    `Quick Guide:` +
    "\n" +
    `💻 Develop the backend: ${kleur.yellow(
      "pnpm dev infra"
    )} and the frontend with ${kleur.yellow("pnpm dev ui")}` +
    "\n" +
    `🚀 When you're ready for production, deploy your CI/CD pipeline for dev/test/prod environments: ${kleur.yellow(
      "pnpm deploy pipeline"
    )}`;
  logger.log(message);
}
