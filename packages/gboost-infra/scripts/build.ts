import { execSync } from "node:child_process";
import fse from "fs-extra";
import { fileURLToPath } from "node:url";

const libDir = fileURLToPath(new URL("../lib", import.meta.url));
const srcDir = fileURLToPath(new URL("../src", import.meta.url));
fse.removeSync(libDir);
execSync("pnpm exec tsc");
fse.copySync(srcDir, libDir, {
  filter: (src, dest) => {
    // must return true for directories to recursively get to files
    if (fse.lstatSync(src).isDirectory()) return true;
    const fileExt = dest.split(".").pop();
    return fileExt === "vtl" || fileExt === "js";
  },
  recursive: true,
});
