import { readdirSync } from "node:fs";
import { resolve } from "node:path";

export enum OperationType {
  Copy = "Copy",
  Replace = "Replace",
  UpdatePackageJson = "UpdatePackageJson",
  RenameFiles = "UpdateFileName",
}

export interface BaseOperation {
  name: string;
}

/**
 * Given path of directory, returns array of all file paths within directory
 */
export function listFilePaths(dirPath: string): string[] {
  const filePaths: string[] = [];
  const directory = readdirSync(dirPath, { withFileTypes: true });
  for (const d of directory) {
    const filePath = resolve(dirPath, d.name);
    if (d.isDirectory()) {
      filePaths.push(...listFilePaths(filePath));
    } else {
      filePaths.push(filePath);
    }
  }
  return filePaths;
}
