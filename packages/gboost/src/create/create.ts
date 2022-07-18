import kleur from "kleur";
import { execSync } from "node:child_process";
import log from "loglevel";
import { ask } from "./ask.js";
import { render } from "./render.js";

export async function create() {
  const answers = await ask();
  await render(answers);
  log.info("Linting repo to clean up whitespace and new lines");
  execSync("git init", { cwd: answers.repoName });
  console.log(`\n📦 Installing dependencies with: ${kleur.yellow("pnpm i")}\n`);
  execSync("pnpm i", { stdio: "inherit", cwd: answers.repoName });
  execSync('pnpm -r exec eslint --fix "src/**/*.{ts,tsx}"', {
    cwd: answers.repoName,
  });
  console.log(
    "\n",
    `✅  Done! Change directory into your new repo: ${kleur.yellow(
      `cd ${answers.repoName}`
    )}\n\n`,
    "Quick Guide:\n",
    `✈️   Deploy the development environment: ${kleur.yellow(
      "gboost deploy-dev"
    )}\n`,
    `💻  Develop the front end: ${kleur.yellow(
      "cd ui && pnpm dev"
    )} or develop the back end: ${kleur.yellow(
      "cd infra && cdk deploy <stack-name> --hotswap"
    )}\n`,
    `🚀  Deploy CI/CD pipeline for dev/test/prod environments: ${kleur.yellow(
      "cdk deploy\n\n"
    )}`
  );
}
