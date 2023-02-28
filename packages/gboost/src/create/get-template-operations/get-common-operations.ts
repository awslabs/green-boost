import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";

/**
 * Common operations to run at END of specific template operations
 */
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
    {
      name: "RenameDotTFiles",
      type: OperationType.RenameFiles,
      directoryPath: params.destinationPath,
      filePattern: /.+\.t$/,
      update: (oldFilePath) => oldFilePath.slice(0, -2),
    },
  ];
}
