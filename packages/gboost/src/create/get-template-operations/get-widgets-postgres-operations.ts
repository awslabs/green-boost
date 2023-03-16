import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

export function getWidgetsPostgresOperations(
  params: GetOperationsParams
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
      sourcePath: resolve(templatesDirPath, "widgets-core"),
      destinationPath,
    },
    {
      name: "CopyWidgetsPostgresTemplate",
      type: OperationType.Copy,
      sourcePath: resolve(templatesDirPath, "widgets-postgres"),
      destinationPath,
    },
    {
      name: "ReplaceTitle",
      type: OperationType.Replace,
      values: [{ find: "{{GB_APP_TITLE}}", replace: "Widgets" }],
      sourcePath: resolve(destinationPath, "ui/index.html"),
    },
  ];
}
