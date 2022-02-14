import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { init, ModuleInfos } from "license-checker";
import { readFileSync, writeFileSync } from "node:fs";

const cwd = fileURLToPath(import.meta.url);
const rootDir = resolve(cwd, "../../");
const backEndTemplatePath = "packages/gb-cli/template";
const backEndTemplatePkgJsonPath = resolve(backEndTemplatePath, "package.json");
const frontEndTemplatePath = "packages/gb-cli/template/front-end";
const frontEndTemplatePkgJsonPath = resolve(
  frontEndTemplatePath,
  "package.json"
);
const packages = [
  ".",
  "docs",
  "packages/gboost",
  "packages/gboost-common",
  "packages/gboost-infra",
  "packages/gboost-ui",
  backEndTemplatePath,
  frontEndTemplatePath,
];
const paths = packages.map((d) => resolve(rootDir, d));
const backEndPkgJson = readFileSync(backEndTemplatePkgJsonPath, {
  encoding: "utf-8",
});
const frontEndPkgJson = readFileSync(frontEndTemplatePkgJsonPath, {
  encoding: "utf-8",
});

try {
  // template files have variable interpolation for package.json names and
  // license-checker think's they're invalid packages so we have to rewrite
  // the package.json and then gather license info then revert
  const newBackEndPkgJson = JSON.parse(backEndPkgJson);
  newBackEndPkgJson.name = "back-end-app";
  writeFileSync(backEndTemplatePkgJsonPath, JSON.stringify(newBackEndPkgJson));
  const newFrontEndPkgJson = JSON.parse(frontEndPkgJson);
  newFrontEndPkgJson.name = "front-end-app";
  writeFileSync(
    frontEndTemplatePkgJsonPath,
    JSON.stringify(newFrontEndPkgJson)
  );

  const licenses: Record<string, string | undefined | string[]> = {};

  // get module info from each package and write to licenses Record
  for (const path of paths) {
    const packages: ModuleInfos = await getModuleInfos(path);
    Object.entries(packages).forEach(([k, v]) => {
      licenses[k] = v.licenses;
    });
  }

  printLicenses(licenses);
  console.log(`Licenses found: ${Object.keys(licenses).length}`);
} catch (err) {
  console.error(err);
} finally {
  // restore template package.json files
  writeFileSync(
    backEndTemplatePkgJsonPath,
    JSON.stringify(JSON.parse(backEndPkgJson), null, 2)
  );
  writeFileSync(
    frontEndTemplatePkgJsonPath,
    JSON.stringify(JSON.parse(frontEndPkgJson), null, 2)
  );
}

async function getModuleInfos(start: string): Promise<ModuleInfos> {
  return new Promise((resolve, reject) => {
    init(
      {
        start,
        direct: true,
      },
      (err, packages) => {
        if (err) reject(err);
        resolve(packages);
      }
    );
  });
}

function printLicenses(
  licenses: Record<string, string | undefined | string[]>
) {
  const exclude = [
    "gb-docs",
    "gb-cli",
    "gb-lic",
    "front-end-app",
    "back-end-app",
  ];
  Object.entries(licenses)
    .filter(([k]) => !exclude.some((e) => k.startsWith(e)))
    .forEach(([name, license]) => console.log(`${name} - ${license}`));
}
