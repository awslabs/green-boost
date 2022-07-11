import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

execSync("pnpm changeset version", {
  stdio: "inherit",
});
// get updated package versions
const commonVersion = readJson(
  "../packages/gboost-common/package.json"
).version;
const infraVersion = readJson("../packages/gboost-infra/package.json").version;
const uiVersion = readJson("../packages/gboost-ui/package.json").version;

// update package versions in template
const frontMatter: Record<string, string> = {}; // temp variable for template frontmatter
const templatePrefix = "../packages/gboost/_templates/create/";
const infraPkgJson = readJson(templatePrefix + "infra/package.json.t");
infraPkgJson.dependencies["gboost-common"] = "^" + commonVersion;
infraPkgJson.dependencies["gboost-infra"] = "^" + infraVersion;
const uiPkgJson = readJson(templatePrefix + "ui/package.json.t");
uiPkgJson.dependencies["gboost-common"] = "^" + commonVersion;
uiPkgJson.dependencies["gboost-ui"] = "^" + uiVersion;

// write new package versions
writeJson(templatePrefix + "infra/package.json.t", infraPkgJson);
writeJson(templatePrefix + "ui/package.json.t", uiPkgJson);
// pnpm turns on frozen-lockfile by default, so we need to manually turn off to
// allow updating pnpm-lock.yaml
// https://github.com/pnpm/pnpm/issues/3664
execSync("pnpm install --no-frozen-lockfile", {
  stdio: "inherit",
});
execSync("git add --all", {
  stdio: "inherit",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readJson(relativePath: string): any {
  let fileString = "";
  fileString = readFileSync(new URL(relativePath, import.meta.url), {
    encoding: "utf8",
  }).toString();
  console.log(fileString);
  return JSON.parse(fileString);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function writeJson(relativePath: string, obj: any): void {
  let fileString = "";
  if (frontMatter[relativePath]) {
    fileString += frontMatter[relativePath] + "\n";
  }
  fileString += JSON.stringify(obj, null, 2);
  writeFileSync(new URL(relativePath, import.meta.url), fileString);
}
