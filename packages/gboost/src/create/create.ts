import { execSync } from "node:child_process";
import { resolve } from "node:path";
import chalk from "chalk";
import { Logger, runner } from "hygen";
import enquirer from "enquirer";
import { getAnswers } from "./prompt.js";
import { getArgs } from "./getArgs.js";

export async function create() {
  let answers: Record<string, string | string[]> = {};
  try {
    answers = await getAnswers();
  } catch (err) {
    console.error(err);
  }
  const args = getArgs(answers);
  const result = await runner(["repo", "create", ...args], {
    templates: new URL("../../_templates", import.meta.url).pathname,
    cwd: resolve(process.cwd(), answers.repoName as string),
    logger: new Logger((m: string) => {
      m;
    }),
    createPrompter: () =>
      ({
        prompt: enquirer.prompt,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any),
    debug: true,
    exec: (sh) => {
      try {
        execSync(sh);
      } catch (err) {
        console.error(err);
      }
    },
  });
  if (result.success) {
    console.log(
      "\n",
      `✅  Done! Change directory into your new repo: ${chalk.yellow(
        `cd ${answers.repoName}`
      )}\n`,
      `📦  Install dependencies: ${chalk.yellow(`pnpm i`)}\n\n`,
      "Quick Guide:\n",
      `✈️   Deploy the development environment: ${chalk.yellow(
        "gboost deploy-dev"
      )}\n`,
      `💻  Develop the front end: ${chalk.yellow(
        "cd ui && pnpm dev"
      )} or develop the back end: ${chalk.yellow(
        "cd infra && cdk deploy <stack-name> --hotswap"
      )}\n`,
      `🚀  Deploy CI/CD pipeline for dev/test/prod environments: ${chalk.yellow(
        "cdk deploy\n\n"
      )}`
    );
  } else {
    console.error("An error occurred");
    console.error(result);
  }
}
