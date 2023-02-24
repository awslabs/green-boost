import { readFileSync, writeFileSync } from "node:fs";
import { BaseOperation, OperationType } from "./common.js";

export interface UpdatePackageJsonOperation extends BaseOperation {
  type: OperationType.UpdatePackageJson;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update?: (packageJson: Record<string, any>) => Record<string, any>;
  /**
   * File of package.json to update
   */
  sourcePaths: string[];
}

export function updatePackageJson(params: UpdatePackageJsonOperation): void {
  for (const sourcePath of params.sourcePaths) {
    const ogPackageJsonStr = readFileSync(sourcePath, {
      encoding: "utf-8",
    });
    const ogPackageJson: PackageJson = JSON.parse(ogPackageJsonStr);
    let packageJson: PackageJson = { ...ogPackageJson };
    if (params.dependencies) {
      packageJson.dependencies = sortObjectByKeys({
        ...packageJson.dependencies,
        ...params.dependencies,
      });
    }
    if (params.devDependencies) {
      packageJson.devDependencies = sortObjectByKeys({
        ...packageJson.devDependencies,
        ...params.devDependencies,
      });
    }
    if (params.update) {
      packageJson = params.update(packageJson);
    }
    writeFileSync(sourcePath, JSON.stringify(packageJson, null, 2));
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sortObjectByKeys(o: Record<string, any>): Record<string, any> {
  return Object.fromEntries(Object.entries(o).sort());
}

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}
