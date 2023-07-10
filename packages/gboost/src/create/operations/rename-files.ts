import { renameSync } from "node:fs";
import { type BaseOperation, listFilePaths, OperationType } from "./common";

export interface RenameFilesOperation extends BaseOperation {
  /**
   * Parent directory to search below recursively
   */
  directoryPath: string;
  /**
   * RegExp pattern to match files within `directoryPath` against. Matched files
   * will have `updateFile` called
   */
  filePattern: RegExp;
  type: OperationType.RenameFiles;
  /**
   * Callback function with original file path. Returned string will rename file
   */
  update: (oldFilePath: string) => string;
}

export function renameFiles(params: RenameFilesOperation) {
  const filePaths = listFilePaths(params.directoryPath);
  for (const filePath of filePaths) {
    if (params.filePattern.test(filePath)) {
      renameSync(filePath, params.update(filePath));
    }
  }
}
