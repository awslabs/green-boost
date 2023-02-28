import { execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

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
 * Run shell command
 */
function run(command: string) {
  execSync(command, {
    stdio: "inherit",
  });
}

/**
 * Scans packages/gboost/templates directory for any package.txt, then updates
 * the package version of Green Boost dependencies
 */
function updateTemplatePackageVersions() {
  // get updated package versions
  const commonVersion =
    "^" +
    readPkgJson(
      resolve(thisFilePath, "../../packages/gboost-common/package.json")
    ).version;
  const infraVersion =
    "^" +
    readPkgJson(
      resolve(thisFilePath, "../../packages/gboost-infra/package.json")
    ).version;
  const uiVersion =
    "^" +
    readPkgJson(resolve(thisFilePath, "../../packages/gboost-ui/package.json"))
      .version;
  const nodeVersion =
    "^" +
    readPkgJson(
      resolve(thisFilePath, "../../packages/gboost-node/package.json")
    ).version;

  // update package versions in template
  const templateFilePaths = listFilePaths(
    resolve(thisFilePath, "../../packages/gboost/templates")
  );
  // package.txt is used instead of package.json to avoid IDE errors
  const pkgJsonPaths = templateFilePaths.filter((p) =>
    p.endsWith("package.txt")
  );
  for (const pkgJsonPath of pkgJsonPaths) {
    const pkgJson = readPkgJson(pkgJsonPath);
    const dependencies = pkgJson.dependencies;
    if (dependencies) {
      let edited = false;
      if (
        "gboost-common" in dependencies &&
        dependencies["gboost-common"] !== commonVersion
      ) {
        dependencies["gboost-common"] = commonVersion;
        edited = true;
      }
      if (
        "gboost-infra" in dependencies &&
        dependencies["gboost-infra"] !== infraVersion
      ) {
        dependencies["gboost-infra"] = infraVersion;
        edited = true;
      }
      if (
        "gboost-node" in dependencies &&
        dependencies["gboost-node"] !== nodeVersion
      ) {
        dependencies["gboost-node"] = nodeVersion;
        edited = true;
      }
      if (
        "gboost-ui" in dependencies &&
        dependencies["gboost-ui"] !== uiVersion
      ) {
        dependencies["gboost-ui"] = uiVersion;
        edited = true;
      }
      if (edited) {
        writePkgJson(pkgJsonPath, pkgJson);
      }
    }
  }
}

interface PkgJson {
  version: string;
  dependencies?: Record<string, string>;
}

function readPkgJson(path: string): PkgJson {
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
