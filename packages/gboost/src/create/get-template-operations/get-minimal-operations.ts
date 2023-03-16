import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

export function getMinimalOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, templatesDirPath } = params;
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
      values: [{ find: "{{GB_APP_TITLE}}", replace: "My App" }],
      sourcePath: resolve(destinationPath, "ui/index.html"),
    },
  ];
}
