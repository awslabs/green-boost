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
const appOpt = '--app "node --loader ts-node/esm src/app.ts"';
const approvalOpt = "--require-approval never";

export function deployDev() {
  const { backEndDir, frontEndDir } = getDirs();
  const prefix = getDevPrefix(backEndDir);
  const backEndStack = `${prefix}-back-end`;
  try {
    execSync(
      `cdk ${appOpt} deploy ${backEndStack} ${approvalOpt} --outputs-file ${outputsFilePath}`,
      {
        cwd: backEndDir,
        stdio: "inherit",
      }
    );
    writeEnvVars({ backEndDir, backEndStack, frontEndDir });
    execSync("npm run build", {
      cwd: frontEndDir,
      stdio: "inherit",
    });
    execSync(`cdk ${appOpt} deploy ${`${prefix}-front-end`} ${approvalOpt}`, {
      cwd: backEndDir,
      stdio: "inherit",
    });
  } catch (err) {
    console.error(err);
  } finally {
    const absOutputsFilPath = resolve(backEndDir, outputsFilePath);
    if (existsSync(absOutputsFilPath)) {
      unlinkSync(absOutputsFilPath);
    }
  }
}

function getDevPrefix(backEndDir: string) {
  const cdkJsonPath = resolve(backEndDir, "cdk.json");
  const cdkJsonString = readFileSync(cdkJsonPath, {
    encoding: "utf8",
  });
  const cdkJson = JSON.parse(cdkJsonString);
  return cdkJson.context.devPrefix;
}

function writeEnvVars({
  backEndDir,
  backEndStack,
  frontEndDir,
}: {
  backEndDir: string;
  backEndStack: string;
  frontEndDir: string;
}) {
  const outputsString = readFileSync(resolve(backEndDir, outputsFilePath), {
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
  console.log(`Writing ${frontEndDir}/.env.local with ${backEndStack} outputs`);
  writeFileSync(
    resolve(process.cwd(), `${frontEndDir}/.env.local`),
    envVarKeyValues.join("\n")
  );
}

/**
 * Get front end and back end directories allowing user to either be in
 * my-gb-app root directory or a child directory like back-end or front-end
 * when running: gboost deploy-dev
 */
function getDirs(): { frontEndDir: string; backEndDir: string } {
  let frontEndDir = "front-end";
  let backEndDir = "back-end";
  if (existsSync("../" + backEndDir) && existsSync("../" + frontEndDir)) {
    backEndDir = "../" + backEndDir;
    frontEndDir = "../" + frontEndDir;
  } else if (!existsSync(frontEndDir) || !existsSync(backEndDir)) {
    throw new Error(
      "gboost deploy-dev must be run in root or root child directories"
    );
  }
  return { backEndDir, frontEndDir };
}
