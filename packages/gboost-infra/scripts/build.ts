import { execSync } from "node:child_process";
import fse from "fs-extra";

const libDir = new URL("../lib", import.meta.url).pathname;
fse.removeSync(new URL("../lib", import.meta.url).pathname);
execSync("pnpm exec tsc");
fse.copySync(new URL("../src", import.meta.url).pathname, libDir, {
  filter: (src, dest) => {
    // must return true for directories to recursively get to files
    if (fse.lstatSync(src).isDirectory()) return true;
    return dest.slice(-3) === "vtl";
  },
  recursive: true,
});
