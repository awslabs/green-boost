import { execSync } from "node:child_process";
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { getCwds } from "./utils/getCwds.js";
import { getDevPrefix } from "./utils/getDevPrefix.js";

const outputNameToEnvVarNameMap = {
  AwsRegionOutput: "VITE_AWS_REGION",
  GqlUrlOutput: "VITE_GQL_URL",
  UserPoolIdOutput: "VITE_USER_POOL_ID",
  UserPoolClientIdOutput: "VITE_USER_POOL_CLIENT_ID",
};
const outputsFilePath = "backEndStackOutputs.json";
const approvalOpt = "--require-approval never";

interface DeployDevArgs {
  hotswap: boolean;
  backendOnly: boolean;
  frontendOnly: boolean;
}

export function deployDev(args: DeployDevArgs) {
  const { hotswap = false, backendOnly = false, frontendOnly = false } = args;
  const hotswapOpt = hotswap ? "--hotswap" : "";
  const { infraCwd, uiCwd } = getCwds();
  const prefix = getDevPrefix(infraCwd);
  const backEndStack = `${prefix}-back-end`;
  const tsnodePath = resolve(infraCwd, "./node_modules/.bin/ts-node");
  const appPath = resolve(infraCwd, "src/app");
  const appOpt = `--app "${tsnodePath} --esm ${appPath}"`;
  try {
    if (!frontendOnly) {
      execSync(
        `cdk ${appOpt} deploy ${hotswapOpt} ${backEndStack} ${approvalOpt} --outputs-file ${outputsFilePath}`,
        {
          cwd: infraCwd,
          stdio: "inherit",
        }
      );
      writeEnvVars({ infraDir: infraCwd, backEndStack, uiDir: uiCwd });
    }
    if (!backendOnly) {
      execSync("npm run build", {
        cwd: uiCwd,
        stdio: "inherit",
      });
      const frontEndStack = `${prefix}-front-end`;
      execSync(`cdk ${appOpt} deploy ${frontEndStack} ${approvalOpt}`, {
        cwd: infraCwd,
        stdio: "inherit",
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    const absOutputsFilPath = resolve(infraCwd, outputsFilePath);
    if (existsSync(absOutputsFilPath)) {
      unlinkSync(absOutputsFilPath);
    }
  }
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
