import {
  constants,
  copyFileSync,
  CopySyncOptions,
  cpSync,
  statSync,
} from "node:fs";
import { basename, normalize } from "node:path";
import type { BaseOperation, OperationType } from "./common.js";

export interface CopyOperation extends BaseOperation {
  type: OperationType.Copy;
  /**
   * File or directory path where file(s) will be copied from
   */
  sourcePath: string;
  /**
   * File or directory where file(s) will be copied to. Must be directory if
   * `sourcePath` is directory
   */
  destinationPath: string;
  /**
   * Regular Expression to filter source files. If `undefined`, all files are
   * copied
   */
  filterFiles?: RegExp;
}

export function copy(params: CopyOperation): void {
  if (statSync(params.sourcePath).isDirectory()) {
    const options: CopySyncOptions = {
      recursive: true,
      force: true,
    };
    const filterFiles = params.filterFiles;
    if (filterFiles) {
      options.filter = (_source: string, destination: string) =>
        filterFiles.test(destination);
    }
    // WARNING: experimental API, could be breaking changes, but it does so much
    // that it's worth the risk :)
    cpSync(params.sourcePath, params.destinationPath, options);
  } else {
    let dest = params.destinationPath;
    if (statSync(params.destinationPath).isDirectory()) {
      dest = normalize(dest + "/" + basename(params.sourcePath));
    }
    copyFileSync(params.sourcePath, dest, constants.COPYFILE_FICLONE);
  }
}
