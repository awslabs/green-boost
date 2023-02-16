import { renameSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { BaseOperation, OperationType } from "./common.js";

interface FileNameUpdate {
  source: string;
  newName: string;
}

export interface UpdateFileNamesOperation extends BaseOperation {
  updates: FileNameUpdate[];
  type: OperationType.UpdateFileNames;
}

export function updateFileNames(params: UpdateFileNamesOperation) {
  for (const update of params.updates) {
    renameSync(update.source, resolve(dirname(update.source), update.newName));
  }
}
