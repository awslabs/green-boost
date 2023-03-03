import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { GetOperationsParams } from "./common.js";
import { getMinimalOperations } from "./get-minimal-operations.js";

export function getWidgetsDynamoOperations(
  params: GetOperationsParams
): Operation[] {
  const { destinationPath, appId, templatesDirPath } = params;
  return [
    ...getMinimalOperations({
      destinationPath,
      appId,
      templatesDirPath,
    }),
    {
      name: "CopyBasicTemplate",
      type: OperationType.Copy,
      sourcePath: resolve(templatesDirPath, "widgets-dynamo"),
      destinationPath,
    },
    // {
    //   name: "UpdatePnpmPatchedDependencies",
    //   type: OperationType.UpdatePackageJson,
    //   sourcePath: resolve(destinationPath, "package.json"),
    //   update(packageJson) {
    //     packageJson.pnpm.patchedDependencies = {
    //       "@hookform/resolvers@2.9.10": "patches/@hookform__resolvers@2.9.10.patch"
    //     }
    //     return packageJson;
    //   },
    // },
  ];
}
