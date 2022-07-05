import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { userInfo } from "node:os";
import prompts, { PromptObject, Choice } from "prompts";
import { logger } from "../index.js";

export enum Authn {
  userPool = "Cognito User Pool",
  // federatedUserPool = "Federated Cognito User Pool (Comming Soon)",
  none = "None",
}
const authnChoices: Choice[] = Object.values(Authn).map((v) => ({
  title: v,
  value: v,
}));

export enum Feature {
  userMgmt = "User Management",
  demoDashboard = "Demo Dashboard",
}
const featureChoices: Choice[] = Object.values(Feature).map((v) => ({
  title: v,
  value: v,
}));

function getFeatureChoices(authn: Authn): Choice[] {
  if (authn !== Authn.userPool) {
    return featureChoices.filter((c) => c.title !== Feature.userMgmt);
  }
  return featureChoices;
}

// https://github.com/terkelg/prompts/issues/252#issuecomment-778683666
function handleAbort({ abort }: { abort: boolean }) {
  if (abort) {
    process.nextTick(() => process.exit(0));
  }
}

const questions: PromptObject[] = [
  {
    name: "repoName",
    type: "text",
    message: "Repository Name:",
    initial: `${userInfo().username}-gb-app`,
    format: (repoName: string) =>
      repoName
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll(/[^a-z0-9-]/g, ""),
  },
  {
    name: "authn",
    type: "select",
    message: "Authentication:",
    choices: authnChoices,
    initial: authnChoices.findIndex((c) => c.title === Authn.userPool),
  },
  {
    name: "features",
    type: "multiselect",
    message: "Features: (space to select, enter to confirm)",
    // prompts has incorrect typings, these props accept functions
    // https://github.com/terkelg/prompts/issues/88#issuecomment-421194998
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    choices: getFeatureChoices as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initial: getFeatureChoices as any,
    onState: handleAbort,
  },
];

export interface Answers {
  repoName: string;
  authn: Authn;
  features: Feature[];
}

export async function ask(): Promise<Answers> {
  const answers = (await prompts(questions, {
    onCancel: () => process.kill(process.pid, "SIGINT"),
  })) as Answers;
  logger.info(`Answers recieved: ${JSON.stringify(answers)}`);
  await ensureEmptyRepo(answers.repoName);
  return answers;
}

async function ensureEmptyRepo(newDir: string): Promise<void> {
  logger.info("Ensuring repoName repo is empty");
  if (existsSync(newDir)) {
    logger.info(
      "Root directory already exists. Asking if user wants to overwrite"
    );
    const { confirm } = (await prompts({
      name: "confirm",
      type: "confirm",
      message: `Directory ${newDir} already exists, would you like to overwrite it?`,
    })) as { confirm: boolean };
    if (confirm) {
      console.log("Overwriting.");
      logger.info("User wants to remove old directory. Removing");
      await rm(newDir, { recursive: true });
    }
  }
}
