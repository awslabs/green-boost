import { execSync } from "node:child_process";
import { rmSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);
const outDir = resolve(thisFilePath, `../dist`);
rmSync(outDir, { recursive: true, force: true });
execSync("pnpm tsc --project tsconfig.build.json", { stdio: "inherit" });
