import { fileURLToPath } from "node:url";
import { cpSync, rmSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { buildFunction } from "./build-function.js";
import { execSync } from "node:child_process";

const thisFilePath = fileURLToPath(import.meta.url);
const libDir = resolve(thisFilePath, "../../lib");
const srcDir = resolve(thisFilePath, "../../src");

rmSync(libDir, { recursive: true, force: true });
execSync("pnpm exec tsc -p tsconfig.build.json", { stdio: "inherit" });
// bundle and minify functions with esbuild
// Note, tsconfig.build.json ignores these files so tsc transpiled js files
// don't overrwrite esbuild built files
await buildFunction({
  entryPointPath: "web-deployment/web-deploy-cr-handler.ts",
  outFilePath: "web-deployment/web-deploy-cr-handler.mjs",
});
// needed for vtl and js files that aren't built with tsc
cpSync(srcDir, libDir, {
  filter(source: string, destination: string) {
    // must return true for directories to recursively get to files
    if (statSync(source).isDirectory()) return true;
    const fileExt = destination.split(".").pop();
    return fileExt === "vtl" || fileExt === "js";
  },
  recursive: true,
});
