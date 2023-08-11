import { logger } from "../utils/logger.js";
import {
  updatePackageJson,
  copy,
  type Operation,
  OperationType,
  replace,
  renameFiles,
} from "./operations/operations.js";

/**
 * Executes all operations upon destination directory
 */
export function executeOperations(operations: Operation[]): void {
  for (const operation of operations) {
    logger.debug(`Executing operation: ${JSON.stringify(operation)}`);
    switch (operation.type) {
      case OperationType.Copy:
        copy(operation);
        break;
      case OperationType.Replace:
        replace(operation);
        break;
      case OperationType.UpdatePackageJson:
        updatePackageJson(operation);
        break;
      case OperationType.RenameFiles:
        renameFiles(operation);
        break;
    }
  }
}
