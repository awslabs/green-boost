import type { CopyOperation } from "./copy.js";
import type { ReplaceOperation } from "./replace.js";
import type { UpdateFileNamesOperation } from "./update-file-names.js";
import type { UpdatePackageJsonOperation } from "./update-package-json.js";

export { OperationType } from "./common.js";
export type Operation =
  | CopyOperation
  | ReplaceOperation
  | UpdatePackageJsonOperation
  | UpdateFileNamesOperation;

export { copy } from "./copy.js";
export { replace } from "./replace.js";
export { updatePackageJson } from "./update-package-json.js";
export { updateFileNames } from "./update-file-names.js";
