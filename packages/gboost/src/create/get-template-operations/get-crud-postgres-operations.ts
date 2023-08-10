import { resolve } from "node:path";
import { type Operation, OperationType } from "../operations/operations";
import type { BaseOperationParams } from "./base-operation-params.js";

export function getCrudPostgresOperations(
  params: BaseOperationParams
): Operation[] {
  const { destinationPath, templatesDirPath } = params;
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
  ];
}
