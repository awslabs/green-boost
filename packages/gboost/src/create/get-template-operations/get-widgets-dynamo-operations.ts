import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

export function getWidgetsDynamoOperations(
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
      name: "CopyWidgetsDynamoTemplate",
      type: OperationType.Copy,
      sourcePath: resolve(templatesDirPath, "widgets-dynamo"),
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
