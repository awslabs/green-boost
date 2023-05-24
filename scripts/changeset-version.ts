import { execSync } from "node:child_process";
import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

const updatedPackageNames = getUpdatedPackageNames();
maybeAddGboostChangeset(updatedPackageNames);
// `pnpm changeset version` updates package versions based on changsets recorded
// in .changeset folder
run("pnpm changeset version");
updateTemplatePackageVersions();
// pnpm turns on frozen-lockfile by default, so we need to manually turn off to
// allow updating pnpm-lock.yaml
// https://github.com/pnpm/pnpm/issues/3664
run("pnpm install --no-frozen-lockfile");
run("git add --all");

/**
 * If gboost-ui or gboost-infra is updated, then we want gboost package to be
 * updated if not already updated. This won't happen automatically so we need
 * to do this manually.
 */
function maybeAddGboostChangeset(updatedPackageNames: string[]) {
  if (
    !updatedPackageNames.includes("gboost") &&
    (updatedPackageNames.includes("gboost-ui") ||
      updatedPackageNames.includes("gboost-infra"))
  ) {
    console.log("Adding minor gboost changeset for dependency updates");
    const changesetFileContents =
      '---\n"gboost": patch\n---\n\nUpdate dependencies\n';
    writeFileSync(".changeset/green-boost-forever.md", changesetFileContents);
  }
}

function getUpdatedPackageNames(): string[] {
  const statusFileName = "status.json";
  run(`pnpm changeset status --output ${statusFileName}`);
  const { releases } = readJson<ChangesetStatusOutput>(statusFileName);
  const packageNames = releases.map((r) => r.name);
  rmSync(statusFileName);
  return packageNames;
}

interface ChangesetStatusOutput {
  releases: ChangesetRelease[];
}
interface ChangesetRelease {
  name: string;
}

/**
 * Run shell command
 */
function run(command: string) {
  execSync(command, {
    stdio: "inherit",
  });
}

/**
 * Update version of GB dependencies within packages/gboost/templates/ and
 * examples/ which aren't automatically updated by changeset.
 * `
 */
function updateTemplatePackageVersions() {
  // get updated package versions
  const latestVersions = getLatestVersions();
  const pkgJsonPaths = getPkgJsonPaths();
  for (const pkgJsonPath of pkgJsonPaths) {
    updateGbDeps(pkgJsonPath, latestVersions);
  }
}

interface LatestGbVersions {
  "gboost-common": string;
  "gboost-infra": string;
  "gboost-node": string;
  "gboost-ui": string;
}

/**
 * Get latest NPM (semver) versions of GB packages
 */
function getLatestVersions(): LatestGbVersions {
  const common =
    "^" +
    readJson<PkgJson>(
      resolve(thisFilePath, "../../packages/gboost-common/package.json")
    ).version;
  const infra =
    "^" +
    readJson<PkgJson>(
      resolve(thisFilePath, "../../packages/gboost-infra/package.json")
    ).version;
  const ui =
    "^" +
    readJson<PkgJson>(
      resolve(thisFilePath, "../../packages/gboost-ui/package.json")
    ).version;
  const node =
    "^" +
    readJson<PkgJson>(
      resolve(thisFilePath, "../../packages/gboost-node/package.json")
    ).version;
  return {
    "gboost-common": common,
    "gboost-infra": infra,
    "gboost-ui": ui,
    "gboost-node": node,
  };
}

/**
 * Get paths of package.json's that should have their GB dependencies updated
 */
function getPkgJsonPaths(): string[] {
  // update package versions in template
  const pkgJsonPaths: string[] = [];
  const templatePkgJsons = listFilePaths(
    resolve(thisFilePath, "../../packages/gboost/templates")
    // package.txt is used instead of package.json to avoid IDE errors
  ).filter((p) => p.endsWith("package.json.t"));
  pkgJsonPaths.push(...templatePkgJsons);
  const examplePkgJsons = listFilePaths(
    resolve(thisFilePath, "../../examples")
  ).filter((p) => p.endsWith("package.json"));
  pkgJsonPaths.push(...examplePkgJsons);
  console.log({ pkgJsonPaths });
  return pkgJsonPaths;
}

/**
 * Given the path of a package.json file, update versions of GB packages to
 * latest versions
 */
function updateGbDeps(pkgJsonPath: string, latestVersions: LatestGbVersions) {
  const pkgJson = readJson<PkgJson>(pkgJsonPath);
  const dependencies = pkgJson.dependencies;
  if (dependencies) {
    let edited = false;
    if (
      "gboost-common" in dependencies &&
      dependencies["gboost-common"] !== latestVersions["gboost-common"]
    ) {
      dependencies["gboost-common"] = latestVersions["gboost-common"];
      edited = true;
    }
    if (
      "gboost-infra" in dependencies &&
      dependencies["gboost-infra"] !== latestVersions["gboost-infra"]
    ) {
      dependencies["gboost-infra"] = latestVersions["gboost-infra"];
      edited = true;
    }
    if (
      "gboost-node" in dependencies &&
      dependencies["gboost-node"] !== latestVersions["gboost-node"]
    ) {
      dependencies["gboost-node"] = latestVersions["gboost-node"];
      edited = true;
    }
    if (
      "gboost-ui" in dependencies &&
      dependencies["gboost-ui"] !== latestVersions["gboost-ui"]
    ) {
      dependencies["gboost-ui"] = latestVersions["gboost-ui"];
      edited = true;
    }
    if (edited) {
      console.log("Editing: " + pkgJsonPath);
      console.log(pkgJson);
      writePkgJson(pkgJsonPath, pkgJson);
    }
  }
}

interface PkgJson {
  version: string;
  dependencies?: Record<string, string>;
}

function readJson<T>(path: string): T {
  let fileString = "";
  fileString = readFileSync(path, {
    encoding: "utf8",
  }).toString();
  return JSON.parse(fileString);
}

function writePkgJson(path: string, obj: PkgJson): void {
  let fileString = "";
  fileString += JSON.stringify(obj, null, 2);
  writeFileSync(path, fileString);
}

/**
 * Given path of directory, returns array of all file paths within directory
 */
function listFilePaths(dirPath: string): string[] {
  const filePaths: string[] = [];
  const directory = readdirSync(dirPath, { withFileTypes: true });
  for (const d of directory) {
    const filePath = resolve(dirPath, d.name);
    if (d.isDirectory()) {
      filePaths.push(...listFilePaths(filePath));
    } else {
      filePaths.push(filePath);
    }
  }
  return filePaths;
}
