import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

export function getCrudPostgresOperations(
  params: GetOperationsParams
): Operation[] {
  const { appId, destinationPath, templatesDirPath } = params;
  return [
    {
      type: OperationType.Copy,
      name: "CopyMinimalTemplate",
      sourcePath: resolve(templatesDirPath, "minimal"),
      destinationPath,
    },
    {
      name: "CopyWidgetsCoreTemplate",
      type: OperationType.Copy,
      sourcePath: resolve(templatesDirPath, "crud-core"),
      destinationPath,
    },
    {
      name: "CopyWidgetsPostgresTemplate",
      type: OperationType.Copy,
      sourcePath: resolve(templatesDirPath, "crud-postgres"),
      destinationPath,
    },
    {
      name: "UpdateCoreDependenciesToIncludeDb",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [resolve(destinationPath, "core/package.json.t")],
      dependencies: {
        [`@${appId}/db`]: "workspace:^0.1.0",
      },
    },
  ];
}
