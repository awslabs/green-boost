import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import type { UpdateFileNamesOperation } from "../operations/update-file-names.js";
import type { GetOperationsParams } from "./common.js";

export function getMinimalOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, templatesDirPath, appId } = params;
  return [
    {
      type: OperationType.Copy,
      name: "CopyMinimalTemplate",
      sourcePath: resolve(templatesDirPath, "minimal"),
      destinationPath,
    },
    {
      name: "ReplaceTitle",
      type: OperationType.Replace,
      values: [{ find: "{{GB_APP_TITLE}}", replace: "Minimal" }],
      sourcePath: resolve(destinationPath, "ui/index.html"),
    },
    {
      name: "UpdateLintStagedFileNames",
      type: OperationType.UpdateFileNames,
      // .txt files are used to reduce IDE error messages so we
      // need to switch back the file extensions when creating repos
      updates: [
        {
          source: resolve(destinationPath, "package.txt"),
          newName: "package.json",
        },
        ...getConfigFileNameUpdates(destinationPath, "core"),
        ...getConfigFileNameUpdates(destinationPath, "db"),
        ...getConfigFileNameUpdates(destinationPath, "infra"),
        ...getConfigFileNameUpdates(destinationPath, "ui"),
        ...getUtilConfigFileNameUpdates(destinationPath),
      ],
    },
    {
      name: "UpdateNodeUtilDevDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [
        resolve(destinationPath, "core/package.json"),
        resolve(destinationPath, "db/package.json"),
        resolve(destinationPath, "infra/package.json"),
        resolve(destinationPath, "ui/package.json"),
      ],
      devDependencies: {
        [`@${appId}/eslint-config-node`]: "workspace:^0.1.0",
        [`@${appId}/tsconfig`]: "workspace:^0.1.0",
        [`@${appId}/utils`]: "workspace:^0.1.0",
      },
    },
    {
      name: "UpdateUiUtilDevDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePaths: [resolve(destinationPath, "ui/package.json")],
      devDependencies: {
        [`@${appId}/eslint-config-react`]: "workspace:^0.1.0",
        [`@${appId}/tsconfig`]: "workspace:^0.1.0",
        [`@${appId}/utils`]: "workspace:^0.1.0",
      },
    },
  ];
}

/**
 * For given directory, updates .lintstagedrc.txt => .lintstagedrc.js,
 * .eslintrc.txt => .eslintrc.cjs, package.txt = > package.json,
 * tsconfig.txt => tsconfig.json
 */
function getConfigFileNameUpdates(destinationPath: string, dir: string) {
  return [
    {
      source: resolve(destinationPath, `${dir}/.lintstagedrc.txt`),
      newName: ".lintstagedrc.js",
    },
    {
      source: resolve(destinationPath, `${dir}/.eslintrc.txt`),
      newName: ".eslintrc.cjs",
    },
    {
      source: resolve(destinationPath, `${dir}/package.txt`),
      newName: "package.json",
    },
    {
      source: resolve(destinationPath, `${dir}/tsconfig.txt`),
      newName: "tsconfig.json",
    },
  ];
}

type FileNameUpdate = UpdateFileNamesOperation["updates"][number];
/**
 * Updates util packages in packages/ directory
 */
function getUtilConfigFileNameUpdates(basePath: string): FileNameUpdate[] {
  return [
    {
      source: resolve(basePath, "packages/eslint-config-node/package.txt"),
      newName: "package.json",
    },
    {
      source: resolve(basePath, "packages/eslint-config-node/.eslintrc.txt"),
      newName: ".eslintrc.cjs",
    },
    {
      source: resolve(basePath, "packages/eslint-config-react/package.txt"),
      newName: "package.json",
    },
    {
      source: resolve(basePath, "packages/eslint-config-react/.eslintrc.txt"),
      newName: ".eslintrc.cjs",
    },
    {
      source: resolve(basePath, "packages/tsconfig/package.txt"),
      newName: "package.json",
    },
    {
      source: resolve(basePath, "packages/tsconfig/tsconfig.node.txt"),
      newName: "tsconfig.node.json",
    },
    {
      source: resolve(basePath, "packages/tsconfig/tsconfig.ui.txt"),
      newName: "tsconfig.ui.json",
    },
  ];
}
