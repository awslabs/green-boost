import { execSync } from "node:child_process";

const versionOutputJson = execSync("changeset version --json", {
  stdio: "inherit",
}).toJSON();
console.log(versionOutputJson);
// TODO: update versions in packages/gboost/_templates/repo/create
execSync("pnpm install --no-frozen-lockfile");
execSync("git add --all");
