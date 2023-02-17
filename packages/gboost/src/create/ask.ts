import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { userInfo } from "node:os";
import prompts, { PromptObject } from "prompts";
import { pascalToKebabCase } from "../utils/format-case.js";
import { logger } from "../utils/logger.js";
import { Template, templateChoices } from "./templates.js";

export interface Answers {
  template: Template;
  directory: string;
  scope: string;
}

export async function ask(): Promise<Answers> {
  const answers = (await prompts(questions, {
    onCancel: () => process.kill(process.pid, "SIGINT"),
  })) as Answers;
  logger.debug(`Answers recieved: ${JSON.stringify(answers)}`);
  await ensureEmptyDirectory(answers.directory);
  return answers;
}

const questions: PromptObject[] = [
  {
    name: "template",
    type: "select",
    message: "Template:",
    choices: templateChoices,
    onState: handleAbort,
  },
  {
    name: "directory",
    type: "text",
    message: "Directory:",
    initial: (prev: string) =>
      `${userInfo().username}-${pascalToKebabCase(prev)}`,
    onState: handleAbort,
  },
  {
    name: "scope",
    type: "text",
    message: "Package Scope (Short Name):",
    hint: "Used to prefix all PNPM workspaces within monorepo. Must comply with NPM requirements",
    initial: "gb",
    validate(v) {
      // regex [^...] means nothing except what replaces ...
      if (/[^a-z0-9-]/g.test(v)) {
        return "Package Scope must be lowercase alphanumeric and can include dashes. See more here: https://docs.npmjs.com/cli/v9/using-npm/scope";
      } else {
        return true;
      }
    },
    onState: handleAbort,
  },
];

// https://github.com/terkelg/prompts/issues/252#issuecomment-778683666
function handleAbort({ abort }: { abort: boolean }) {
  if (abort) {
    process.nextTick(() => process.exit(0));
  }
}

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
