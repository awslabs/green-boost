import { Operation, OperationType } from "../operations/operations.js";
import { GetOperationsParams } from "./common.js";

export function getCommonOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, scope } = params;
  return [
    {
      name: "ReplaceScopeAndTsNoCheck",
      type: OperationType.Replace,
      values: [
        { find: /{{GB_APP_SCOPE}}/g, replace: scope },
        { find: "// @ts-nocheck\n", replace: "" },
      ],
      sourcePath: destinationPath,
    },
  ]
}