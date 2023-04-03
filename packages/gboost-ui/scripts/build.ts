import { execSync } from "node:child_process";
import { existsSync, readdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

const libPath = resolve(thisFilePath, "../../lib");
if (existsSync(libPath)) {
  rmSync(libPath, { recursive: true });
}
execSync("tsc --project tsconfig.build.json", { stdio: "inherit" });
removeVETypes();

/**
 * Remove unecessary Vanilla Extract type files. When TS compiles, `declaration`
 * is set to true such that .d.ts and .d.ts.map files are created. We want this
 * for most components, but not for vanilla extract style components so this
 * function delete those files. Note, we still keep .css.js files.
 */
function removeVETypes() {
  const filePaths = listFilePaths(libPath);
  for (const filePath of filePaths) {
    console.log(filePath);
    if (filePath.endsWith(".css.d.ts") || filePath.endsWith(".css.d.ts.map")) {
      rmSync(filePath);
    }
  }
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
