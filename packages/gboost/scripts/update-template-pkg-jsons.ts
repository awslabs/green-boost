import * as ncu from "npm-check-updates";
import { resolve } from "node:path";
import { listFilePaths } from "../src/create/operations/common";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

/**
 * Updates package.json versions within templates/ folder. `pnpm update` doesn't
 * support specifying specific package.json file path so using npm-check-updates
 */
async function main() {
  const templateFilePaths = listFilePaths(
    resolve(thisFilePath, "../../templates")
  );
  const pkgJsonPaths = templateFilePaths.filter((p) =>
    p.endsWith("package.json.t")
  );
  const updatedPkgJsons = await Promise.all(
    pkgJsonPaths.map((packageFile) =>
      ncu.run({
        packageFile,
        upgrade: true,
        target: "minor", // or "latest" if you want to update major versions
        jsonAll: true,
        silent: false,
        packageManager: "pnpm",
      })
    )
  );

  let i = 0;
  for (const pkgJsonPath of pkgJsonPaths) {
    writeFileSync(pkgJsonPath, JSON.stringify(updatedPkgJsons[i], null, 2));
    i++;
  }
}
main();
