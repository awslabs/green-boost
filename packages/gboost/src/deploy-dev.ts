import { execSync } from "node:child_process";
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outputNameToEnvVarNameMap = {
  AwsRegionOutput: "VITE_AWS_REGION",
  GqlUrlOutput: "VITE_GQL_URL",
  UserPoolIdOutput: "VITE_USER_POOL_ID",
  UserPoolClientIdOutput: "VITE_USER_POOL_CLIENT_ID",
};
const outputsFilePath = "backEndStackOutputs.json";
const appOpt = '--app "./node_modules/.bin/ts-node --esm src/app.ts"';
const approvalOpt = "--require-approval never";

export function deployDev() {
  const { infraDir, uiDir } = getDirs();
  const prefix = getDevPrefix(infraDir);
  const backEndStack = `${prefix}-back-end`;
  try {
    execSync(
      `cdk ${appOpt} deploy ${backEndStack} ${approvalOpt} --outputs-file ${outputsFilePath}`,
      {
        cwd: infraDir,
        stdio: "inherit",
      }
    );
    writeEnvVars({ infraDir, backEndStack, uiDir });
    execSync("npm run build", {
      cwd: uiDir,
      stdio: "inherit",
    });
    execSync(`cdk ${appOpt} deploy ${`${prefix}-front-end`} ${approvalOpt}`, {
      cwd: infraDir,
      stdio: "inherit",
    });
  } catch (err) {
    console.error(err);
  } finally {
    const absOutputsFilPath = resolve(infraDir, outputsFilePath);
    if (existsSync(absOutputsFilPath)) {
      unlinkSync(absOutputsFilPath);
    }
  }
}

function getDevPrefix(infraDir: string) {
  const cdkJsonPath = resolve(infraDir, "cdk.json");
  const cdkJsonString = readFileSync(cdkJsonPath, {
    encoding: "utf8",
  });
  const cdkJson = JSON.parse(cdkJsonString);
  return cdkJson.context.devPrefix;
}

function writeEnvVars({
  infraDir,
  backEndStack,
  uiDir,
}: {
  infraDir: string;
  backEndStack: string;
  uiDir: string;
}) {
  const outputsString = readFileSync(resolve(infraDir, outputsFilePath), {
    encoding: "utf-8",
  });
  const outputs = JSON.parse(outputsString);
  const backEndOutputs = outputs[backEndStack];
  const envVarNameToValueMap = Object.entries(outputNameToEnvVarNameMap).reduce(
    (prev, [k, v]) => ({ ...prev, [v]: backEndOutputs[k] }),
    {} as Record<string, string>
  );
  const envVarKeyValues = Object.entries(envVarNameToValueMap).map(
    ([k, v]) => `${k}=${v}`
  );
  // .env.local used in local front end development
  console.log(`Writing ${uiDir}/.env.local with ${backEndStack} outputs`);
  writeFileSync(
    resolve(process.cwd(), `${uiDir}/.env.local`),
    envVarKeyValues.join("\n")
  );
}

/**
 * Get front end and back end directories allowing user to either be in
 * my-gb-app root directory or a child directory like back-end or front-end
 * when running: gboost deploy-dev
 */
function getDirs(): { uiDir: string; infraDir: string } {
  let uiDir = "ui";
  let infraDir = "infra";
  if (existsSync("../" + infraDir) && existsSync("../" + uiDir)) {
    infraDir = "../" + infraDir;
    uiDir = "../" + uiDir;
  } else if (!existsSync(uiDir) || !existsSync(infraDir)) {
    throw new Error(
      "gboost deploy-dev must be run in root or root child directories"
    );
  }
  return { infraDir, uiDir };
}
