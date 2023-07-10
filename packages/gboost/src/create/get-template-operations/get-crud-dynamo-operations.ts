import { resolve } from "node:path";
import { type Operation, OperationType } from "../operations/operations";
import type { GetOperationsParams } from "./common";

export function getCrudDynamoOperations(
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
      sourcePath: resolve(templatesDirPath, "crud-core"),
      destinationPath,
    },
    {
      name: "CopyWidgetsDynamoTemplate",
      type: OperationType.Copy,
      sourcePath: resolve(templatesDirPath, "crud-dynamo"),
      destinationPath,
    },
  ];
}
