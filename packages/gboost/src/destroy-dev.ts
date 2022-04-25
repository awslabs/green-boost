import { execSync } from "node:child_process";
import { resolve } from "node:path";
import { getCwds } from "./utils/getCwds.js";
import { getDevPrefix } from "./utils/getDevPrefix.js";

const forceOpt = "--force";

export function destroyDev() {
  const { infraCwd } = getCwds();
  const prefix = getDevPrefix(infraCwd);
  const tsnodePath = resolve(infraCwd, "./node_modules/.bin/ts-node");
  const appOpt = `--app "${tsnodePath} --esm src/app.ts"`;
  const frontEndStack = `${prefix}-front-end`;
  execSync(`cdk ${appOpt} destroy ${frontEndStack} ${forceOpt}`, {
    cwd: infraCwd,
    stdio: "inherit",
  });
  const backEndStack = `${prefix}-back-end`;
  execSync(`cdk ${appOpt} destroy ${backEndStack} ${forceOpt}`, {
    cwd: infraCwd,
    stdio: "inherit",
  });
}
