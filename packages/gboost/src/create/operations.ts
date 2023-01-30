import {
  readdirSync,
  readFileSync,
  writeFileSync,
  cpSync,
  CopySyncOptions,
  statSync,
  copyFileSync,
  constants,
} from "node:fs";
import { basename, normalize, resolve } from "node:path";

export enum OperationType {
  Copy = "Copy",
  Replace = "Replace",
  AddDependencies = "AddDependency",
}

interface BaseOperation {
  name: string;
}

interface CopyOperation extends BaseOperation {
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

interface ReplaceOperation extends BaseOperation {
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

type PackageVersion = `${"^" | "~"}${number}.${number}.${number}`;

interface UpdatePackageJsonOperation extends BaseOperation {
  type: OperationType.AddDependencies;
  dependencies?: Record<string, PackageVersion>;
  devDependencies?: Record<string, PackageVersion>;
  /**
   * File of package.json to update
   */
  sourcePath: string;
}

export type Operation =
  | CopyOperation
  | ReplaceOperation
  | UpdatePackageJsonOperation;

export function copy(params: CopyOperation): void {
  if (statSync(params.sourcePath).isDirectory()) {
    const options: CopySyncOptions = {
      recursive: true,
      force: true,
    };
    const filterFiles = params.filterFiles;
    if (filterFiles) {
      options.filter = (source: string, destination: string) =>
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

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

export function updatePackageJson(params: UpdatePackageJsonOperation): void {
  const ogPackageJsonStr = readFileSync(params.sourcePath, {
    encoding: "utf-8",
  });
  const ogPackageJson: PackageJson = JSON.parse(ogPackageJsonStr);
  const packageJson: PackageJson = { ...ogPackageJson };
  if (params.dependencies) {
    packageJson.dependencies = sortObjectByKeys({
      ...packageJson.dependencies,
      ...params.dependencies,
    });
  }
  if (params.devDependencies) {
    packageJson.devDependencies = sortObjectByKeys({
      ...packageJson.devDependencies,
      ...params.devDependencies,
    });
  }
  writeFileSync(params.sourcePath, JSON.stringify(packageJson, null, 2));
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sortObjectByKeys(o: Record<string, any>): Record<string, any> {
  return Object.fromEntries(Object.entries(o).sort());
}
