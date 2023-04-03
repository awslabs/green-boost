import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

/**
 * Common operations to run at END of specific template operations
 */
export function getCommonOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, appId, appTitle } = params;
  return [
    {
      name: "ReplaceAppIdAndTsNoCheck",
      type: OperationType.Replace,
      values: [
        { find: /{{GB_APP_ID}}/g, replace: appId },
        { find: /{{GB_APP_TITLE}}/g, replace: appTitle },
        { find: "// @ts-nocheck\n", replace: "" },
      ],
      sourcePath: destinationPath,
    },
    // programatically add monorepo workspace dependencies instead of using
    // "@{{GB_APP_ID}}/utils": "workspace:^0.1.0" in package.json.t's so that
    // we can use scripts/update-template-pkg-json.ts to easily update dependencies.
    // if we use above technique npm-check-updates fails b/c package isn't real
    {
      name: "UpdateDevDependenciesNodeUtils",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [
        resolve(destinationPath, "core/package.json.t"),
        resolve(destinationPath, "db/package.json.t"),
        resolve(destinationPath, "infra/package.json.t"),
      ],
      devDependencies: {
        [`@${appId}/eslint-config-node`]: "workspace:^",
        [`@${appId}/tsconfig`]: "workspace:^",
        [`@${appId}/utils`]: "workspace:^",
      },
    },
    {
      name: "UpdateDevDependenciesWithUiUtils",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [resolve(destinationPath, "ui/package.json.t")],
      devDependencies: {
        [`@${appId}/eslint-config-react`]: "workspace:^",
        [`@${appId}/tsconfig`]: "workspace:^",
        [`@${appId}/utils`]: "workspace:^",
      },
    },
    {
      name: "UpdateDependenciesWithCore",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [
        resolve(destinationPath, "db/package.json.t"),
        resolve(destinationPath, "infra/package.json.t"),
        resolve(destinationPath, "ui/package.json.t"),
      ],
      dependencies: {
        [`@${appId}/core`]: "workspace:^",
      },
    },
    {
      name: "RenameDotTFiles",
      type: OperationType.RenameFiles,
      directoryPath: params.destinationPath,
      filePattern: /.+\.t$/,
      update: (oldFilePath) => oldFilePath.slice(0, -2),
    },
  ];
}
