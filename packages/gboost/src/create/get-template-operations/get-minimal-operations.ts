import { resolve } from "node:path";
import { type Operation, OperationType } from "../operations/operations";
import type { BaseOperationParams } from "./base-operation-params";

export function getMinimalOperations(params: BaseOperationParams): Operation[] {
  const { destinationPath, templatesDirPath } = params;
  return [
    {
      type: OperationType.Copy,
      name: "CopyMinimalTemplate",
      sourcePath: resolve(templatesDirPath, "minimal"),
      destinationPath,
    },
  ];
}
