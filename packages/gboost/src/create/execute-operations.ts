import { logger } from "../utils/logger.js";
import {
  updatePackageJson,
  copy,
  Operation,
  OperationType,
  replace,
} from "./operations.js";

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
      case OperationType.AddDependencies:
        updatePackageJson(operation);
        break;
    }
  }
}
