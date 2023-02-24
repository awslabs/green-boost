import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import { GetOperationsParams } from "./common.js";
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
    {
      name: "UpdateUiDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [resolve(destinationPath, "ui/package.json")],
      dependencies: {
        "@trpc/client": "^10.11.1",
        "@trpc/react-query": "^10.11.1",
      },
      devDependencies: {
        "@trpc/server": "^10.11.1",
      },
    },
    {
      name: "UpdateCoreDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [resolve(destinationPath, "core/package.json")],
      dependencies: {
        "@aws-lambda-powertools/logger": "^1.5.1",
        "@trpc/server": "^10.11.1",
        zod: "^3.20.6",
      },
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
