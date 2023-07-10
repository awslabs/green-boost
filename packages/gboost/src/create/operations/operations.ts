import type { CopyOperation } from "./copy";
import type { ReplaceOperation } from "./replace";
import type { RenameFilesOperation } from "./rename-files";
import type { UpdatePackageJsonOperation } from "./update-package-json";

export { OperationType } from "./common.js";
export type Operation =
  | CopyOperation
  | ReplaceOperation
  | UpdatePackageJsonOperation
  | RenameFilesOperation;

export { copy } from "./copy.js";
export { replace } from "./replace.js";
export { updatePackageJson } from "./update-package-json.js";
export { renameFiles } from "./rename-files.js";
