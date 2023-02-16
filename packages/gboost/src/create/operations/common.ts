export enum OperationType {
  Copy = "Copy",
  Replace = "Replace",
  UpdatePackageJson = "UpdatePackageJson",
  UpdateFileNames = "UpdateFileName",
}

export interface BaseOperation {
  name: string;
}
