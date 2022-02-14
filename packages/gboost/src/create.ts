import { execSync } from "node:child_process";
import { userInfo } from "node:os";
import { resolve } from "node:path";
import chalk from "chalk";
import { Logger, runner } from "hygen";
import enquirer from "enquirer";

export async function create() {
  let answers: Record<string, string | string[]> = {};
  try {
    answers = await enquirer.prompt([
      {
        type: "input",
        name: "repoName",
        message:
          "Repository Name (only lower case letters, numbers, and dashes):",
        initial: "my-gb-app",
        validate: (repoName: string) =>
          /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
            repoName
          ) ||
          `Package name: ${repoName} does not follow rules from npm. Learn more: https://docs.npmjs.com/cli/v8/configuring-npm/package-json#name`,
      },
      {
        type: "input",
        name: "devStackPrefix",
        message: "Dev Stack Prefix:",
        initial: userInfo().username,
      },
      {
        type: "input",
        name: "title",
        message: "Web App Title:",
        initial: "Green Boost",
      },
      {
        type: "multiselect",
        name: "features",
        message: "Features: (space to select, enter to confirm)",
        choices: [
          { name: "User Management", value: "userManagement" },
          { name: "Demo Dashboard", value: "demoDashboard" },
        ],
        result(names) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return (this as any).map(names);
        },
      },
    ]);
  } catch (err) {
    console.error(err);
  }
  const args = getArgs(answers);
  const result = await runner(["repo", "create", ...args], {
    templates: new URL("../_templates", import.meta.url).pathname,
    cwd: resolve(process.cwd(), answers.repoName as string),
    logger: new Logger((m: string) => {
      m; //console.log(m);
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
  }
}

function getArgs(answers: Record<string, string | string[]>) {
  const args: string[] = [];
  for (const [q, a] of Object.entries(answers)) {
    if (typeof a === "string") {
      args.push(`--${q}=${a}`);
    } else if (q === "features") {
      for (const v of Object.values(a)) {
        args.push(`--${q}=${v}`);
      }
    } else {
      throw new Error("Answer type conversion has not been implemented");
    }
  }
  return args;
}
