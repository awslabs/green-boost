import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { OperationType } from "./operations.js";
import { BaseOperation } from "./common.js";

interface FindReplace {
  /**
   * Value to replace
   */
  find: string | RegExp;
  /**
   * Value to replace with
   */
  replace: string;
}

export interface ReplaceOperation extends BaseOperation {
  type: OperationType.Replace;
  /**
   * Values to find and replace
   */
  values: FindReplace[];
  /**
   * File or directory where files will be replaced
   */
  sourcePath: string;
  /**
   * Regular Expression to filter source files. If `undefined`, all files are
   * searched
   */
  filterFiles?: RegExp;
}

export function replace(params: ReplaceOperation): void {
  let sourceFiles: string[];
  if (statSync(params.sourcePath).isDirectory()) {
    sourceFiles = listFilePaths(params.sourcePath);
  } else {
    sourceFiles = [params.sourcePath];
  }
  for (const sourceFile of sourceFiles) {
    if (params.filterFiles && !params.filterFiles.test(sourceFile)) {
      return;
    }
    let fileContent = readFileSync(sourceFile, { encoding: "utf-8" });
    for (const { find, replace } of params.values) {
      fileContent = fileContent.replace(find, replace);
    }
    writeFileSync(sourceFile, fileContent);
  }
}

/**
 * Given path of directory, returns array of all file paths within directory
 */
function listFilePaths(dirPath: string): string[] {
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
