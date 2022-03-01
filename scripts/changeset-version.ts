import { execSync } from "node:child_process";

const versionOutputString = execSync("changeset version --json", {
  stdio: "inherit",
}).toString();
const versionOutputJson = JSON.parse(versionOutputString);
console.log(versionOutputJson);
// TODO: update versions in packages/gboost/_templates/repo/create
execSync("pnpm install --no-frozen-lockfile");
execSync("git add --all");
