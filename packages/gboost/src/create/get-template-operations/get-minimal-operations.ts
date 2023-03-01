import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

export function getMinimalOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, templatesDirPath, appId } = params;
  return [
    {
      type: OperationType.Copy,
      name: "CopyMinimalTemplate",
      sourcePath: resolve(templatesDirPath, "minimal"),
      destinationPath,
    },
    {
      name: "ReplaceTitle",
      type: OperationType.Replace,
      values: [{ find: "{{GB_APP_TITLE}}", replace: "Minimal" }],
      sourcePath: resolve(destinationPath, "ui/index.html"),
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
  ];
}
