import kleur from "kleur";
import { execSync } from "node:child_process";
import { logger } from "../utils/logger.js";
import { ask } from "./ask.js";
import { executeOperations } from "./execute-operations.js";
import { getTemplateOperations } from "./get-template-operations/get-template-operations.js";

/**
 * Creates a Green Boost app based on a given template
 */
export async function create() {
  ensurePnpm();
  ensureGit();
  const answers = await ask();
  const operations = getTemplateOperations(answers);
  executeOperations(operations);
  execSync("git init", { cwd: answers.directory });
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
      'cdk deploy "**"'
    )}` +
    "\n" +
    `💻 Locally develop your frontend: ${kleur.yellow(
      "cd ui"
    )} then ${kleur.yellow("pnpm dev")}` +
    "\n" +
    `🧹 Clean up: ${kleur.yellow("cd infra")} then ${kleur.yellow(
      'cdk deploy "**"'
    )}`;
  logger.log(message);
}

function ensurePnpm() {
  try {
    execSync("pnpm -v");
  } catch (err) {
    logger.error(
      `Command not found: ${kleur.yellow(
        "pnpm"
      )}. Please install: https://pnpm.io/installation`
    );
    throw err;
  }
}

function ensureGit() {
  try {
    execSync("git -v");
  } catch (err) {
    logger.error(
      `Command not found: ${kleur.yellow(
        "git"
      )}. Please install: https://git-scm.com`
    );
    throw err;
  }
}
