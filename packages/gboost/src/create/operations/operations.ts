import { CopyOperation } from "./copy.js";
import { ReplaceOperation } from "./replace.js";
import { UpdateFileNamesOperation } from "./update-file-names.js";
import { UpdatePackageJsonOperation } from "./update-package-json.js";

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
