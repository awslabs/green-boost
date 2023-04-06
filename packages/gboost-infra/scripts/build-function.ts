import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { build } from "esbuild";

interface BuildFunctionProps {
  /**
   * Path relative to gboost-infra/src
   */
  entryPointPath: string;
  /**
   * Path relative to gboost-infra/lib
   */
  outFilePath: string;
}

const thisFilePath = fileURLToPath(import.meta.url);
const libDir = resolve(thisFilePath, "../../lib");
const srcDir = resolve(thisFilePath, "../../src");

export async function buildFunction(params: BuildFunctionProps) {
  return build({
    entryPoints: [resolve(srcDir, params.entryPointPath)],
    bundle: true,
    external: ["@aws-sdk/*"],
    outfile: resolve(libDir, params.outFilePath),
    platform: "node",
    target: "node18",
    minify: true,
    format: "esm",
    sourcemap: true,
    banner: {
      js: `import module from 'module';if (typeof globalThis.require === "undefined"){globalThis.require = module.createRequire(import.meta.url);}`,
    },
  });
}
