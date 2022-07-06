import log from "loglevel";
import { execSync } from "node:child_process";
import { resolve } from "node:path";
import { getCwds } from "./utils/getCwds.js";
import { getDevPrefix } from "./utils/getDevPrefix.js";

const forceOpt = "--force";

interface DestroyDevArgs {
  backendOnly: boolean;
  frontendOnly: boolean;
}

export function destroyDev(args: DestroyDevArgs) {
  const { backendOnly, frontendOnly } = args;
  const { infraCwd } = getCwds();
  const prefix = getDevPrefix(infraCwd);
  const tsnodePath = resolve(infraCwd, "./node_modules/.bin/ts-node");
  const appOpt = `--app "${tsnodePath} --esm src/app.ts"`;
  const frontEndStack = `${prefix}-front-end`;
  if (!backendOnly) {
    log.info("Did not receive --backend-only flag, destroying frontend");
    execSync(`cdk ${appOpt} destroy ${frontEndStack} ${forceOpt}`, {
      cwd: infraCwd,
      stdio: "inherit",
    });
  }
  if (!frontendOnly) {
    log.info("Did not receive --frontend-only flag, destroying backend");
    const backEndStack = `${prefix}-back-end`;
    execSync(`cdk ${appOpt} destroy ${backEndStack} ${forceOpt}`, {
      cwd: infraCwd,
      stdio: "inherit",
    });
  }
}
