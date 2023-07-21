import { resolve } from "node:path";
import { type Operation, OperationType } from "../operations/operations";
import type { BaseOperationParams } from "./base-operation-params";

/**
 * Common operations to run at END of specific template operations
 */
export function getCommonOperations(params: BaseOperationParams): Operation[] {
  const { destinationPath, appId, appTitle } = params;

  //
  // for windows/linux compatability, we need to ensure a full absolutle path to ts-node is
  // present. No relative paths work correctly on windows, so all ./ references need to be replaced.
  // This code below forms an absolute path to ts-node and replaces on all back slash with forward slash
  // have a consistent paths through out the file.
  //
  const tsxPath = resolve(`${destinationPath}/infra/node_modules/.bin/tsx`);
  const normalizedPath = tsxPath.replace(/\\/g, "/");

  return [
    {
      name: "ReplaceTokens",
      type: OperationType.Replace,
      values: [
        { find: /{{GB_APP_ID}}/g, replace: appId },
        { find: /{{GB_APP_TITLE}}/g, replace: appTitle },
        { find: "// @ts-nocheck\n", replace: "" },
      ],
      sourcePath: destinationPath,
    },
    // This fixes up the cdk app line in cdk.json to work in both windows
    // and linux systems. This is needed because of windows/linux file path
    // differences.
    {
      name: "UpdateTsxPath",
      type: OperationType.Replace,
      values: [{ find: /{{GB_TSX_PATH}}/g, replace: normalizedPath }],
      sourcePath: `${destinationPath}/infra/cdk.json`,
    },
    // programatically add monorepo workspace dependencies instead of using
    // "@{{GB_APP_ID}}/utils": "workspace:^0.1.0" in package.json.t's so that
    // we can use scripts/update-template-pkg-json.ts to easily update dependencies.
    // if we use above technique npm-check-updates fails b/c package isn't the
    // "@{{GB_APP_ID}}/utils" package name isn't recognized
    {
      name: "UpdateDevDependenciesNodeUtils",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [
        resolve(destinationPath, "core/package.json.t"),
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
        [`@${appId}/eslint-config-next`]: "workspace:^",
        [`@${appId}/tsconfig`]: "workspace:^",
        [`@${appId}/utils`]: "workspace:^",
      },
    },
    {
      name: "UpdateDependenciesWithCore",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [
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
