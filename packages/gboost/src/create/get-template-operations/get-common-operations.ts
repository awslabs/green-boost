import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

export function getCommonOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, appId } = params;
  return [
    {
      name: "ReplaceAppIdAndTsNoCheck",
      type: OperationType.Replace,
      values: [
        { find: /{{GB_APP_ID}}/g, replace: appId },
        { find: "// @ts-nocheck\n", replace: "" },
      ],
      sourcePath: destinationPath,
    },
  ];
}
