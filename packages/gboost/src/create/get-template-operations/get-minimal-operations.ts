import { resolve } from "node:path";
import { type Operation, OperationType } from "../operations/operations";
import type { GetOperationsParams } from "./common";

export function getMinimalOperations(params: GetOperationsParams): Operation[] {
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
