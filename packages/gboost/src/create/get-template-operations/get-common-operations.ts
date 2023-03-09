import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

/**
 * Common operations to run at END of specific template operations
 */
export function getCommonOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, appId } = params;
  return [
    {
      name: "ReplaceAppIdAndTsNoCheck",
      type: OperationType.Replace,
      values: [
        { find: /{{GB_APP_ID}}/g, replace: appId },
        { find: "// @ts-nocheck\n", replace: "" },
      ],
      sourcePath: destinationPath,
    },
    {
      name: "UpdateNodeUtilDevDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [
        resolve(destinationPath, "core/package.json.t"),
        resolve(destinationPath, "db/package.json.t"),
        resolve(destinationPath, "infra/package.json.t"),
      ],
      devDependencies: {
        [`@${appId}/eslint-config-node`]: "workspace:^0.1.0",
        [`@${appId}/tsconfig`]: "workspace:^0.1.0",
        [`@${appId}/utils`]: "workspace:^0.1.0",
      },
    },
    {
      name: "UpdateUiUtilDevDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [resolve(destinationPath, "ui/package.json.t")],
      devDependencies: {
        [`@${appId}/eslint-config-react`]: "workspace:^0.1.0",
        [`@${appId}/tsconfig`]: "workspace:^0.1.0",
        [`@${appId}/utils`]: "workspace:^0.1.0",
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
