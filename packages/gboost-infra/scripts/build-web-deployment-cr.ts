import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { build } from "esbuild";

const thisFilePath = fileURLToPath(import.meta.url);
const libDir = resolve(thisFilePath, "../../lib");
const srcDir = resolve(thisFilePath, "../../src");

const requireShim = `import module from 'module';if (typeof globalThis.require === "undefined"){globalThis.require = module.createRequire(import.meta.url);}`;

export function buildWebDeploymentCr() {
  return build({
    entryPoints: [
      resolve(
        srcDir,
        "web-deployment",
        "custom-resource-handler",
        "custom-resource-handler.ts"
      ),
    ],
    bundle: true,
    external: ["@aws-sdk/*"],
    outfile: resolve(
      libDir,
      "web-deployment",
      "custom-resource-handler",
      "custom-resource-handler.mjs"
    ),
    platform: "node",
    target: "node18",
    minify: true,
    format: "esm",
    sourcemap: true,
    banner: { js: requireShim },
  });
}

await buildWebDeploymentCr();
