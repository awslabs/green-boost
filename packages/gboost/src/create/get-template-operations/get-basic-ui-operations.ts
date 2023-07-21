import { resolve } from "node:path";
import { type Operation, OperationType } from "../operations/operations";
import type { BaseOperationParams } from "./base-operation-params";

export function getBasicUiOperations(params: BaseOperationParams): Operation[] {
  const { destinationPath, templatesDirPath } = params;
  return [
    {
      type: OperationType.Copy,
      name: "CopyMinimalTemplate",
      sourcePath: resolve(templatesDirPath, "minimal"),
      destinationPath,
    },
    {
      type: OperationType.Copy,
      name: "CopyBasicUiTemplate",
      sourcePath: resolve(templatesDirPath, "basic-ui"),
      destinationPath,
    },
    {
      name: "UpdateInfraDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [resolve(destinationPath, "infra/package.json.t")],
      devDependencies: {
        [`cdk-nextjs-standalone`]: "^3.2.1",
      },
    },
  ];
}
