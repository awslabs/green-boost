import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import prompts, { type PromptObject } from "prompts";
import { pascalToKebabCase } from "gboost-common";
import { logger } from "../utils/logger";
import { Template, templateChoices } from "./templates";
import { handleAborted } from "../utils/handle-aborted";

export interface Answers {
  template: Template;
  directory: string;
  appId: string;
  appTitle: string;
}

export async function ask(): Promise<Answers> {
  const answers = (await prompts(questions, {
    onCancel: () => process.kill(process.pid, "SIGINT"),
  })) as Answers;
  logger.debug(`Answers recieved: ${JSON.stringify(answers)}`);
  await ensureEmptyDirectory(answers.directory);
  return answers;
}

const questions: PromptObject<keyof Answers>[] = [
  {
    name: "template",
    type: "select",
    message: "Template:",
    choices: templateChoices,
    onState: handleAborted,
  },
  {
    name: "directory",
    type: "text",
    message: "Directory:",
    initial: (prev: string) => `${pascalToKebabCase(prev)}`,
    onState: handleAborted,
  },
  {
    name: "appId",
    type: "text",
    // Part of CDK Stack name and used as scope to prefix all PNPM workspaces within monorepo
    message: "App ID (lowercase alphanumeric and hyphens):",
    initial: "myapp",
    validate(v) {
      if (/[a-z0-9-_]+/g.test(v)) {
        return true;
      } else {
        return "App ID must be lowercase alphanumeric and can include hyphens.";
      }
    },
    onState: handleAborted,
  },
  {
    name: "appTitle",
    type: "text",
    // Part of CDK Stack name and used as scope to prefix all PNPM workspaces within monorepo
    message: "App Title:",
    initial: "My App",
    onState: handleAborted,
  },
];

async function ensureEmptyDirectory(directory: string): Promise<void> {
  logger.debug("Ensuring directory repo is empty");
  if (existsSync(directory)) {
    logger.debug("Directory already exists. Asking if user wants to overwrite");
    const { confirm } = await prompts({
      name: "confirm",
      type: "confirm",
      message: `Directory ${directory} already exists, would you like to overwrite it?`,
    });
    if (confirm) {
      console.log("Overwriting.");
      logger.debug("User wants to remove old directory. Removing");
      await rm(directory, { recursive: true });
    } else {
      logger.log("Cannot overwrite destination directory. Stopping.");
      process.exit(0);
    }
  }
}
