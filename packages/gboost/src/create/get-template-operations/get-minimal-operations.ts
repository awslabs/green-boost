import { resolve } from "node:path";
import { Operation, OperationType } from "../operations/operations.js";
import { GetOperationsParams } from "./common.js";

export function getMinimalOperations(params: GetOperationsParams): Operation[] {
  const { destinationPath, templatesDirPath, scope } = params;
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
      ],
    },
    {
      name: "UpdateCoreDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePath: resolve(destinationPath, "core/package.json"),
      devDependencies: {
        [`@${scope}/eslint-config-node`]: "workspace:^0.1.0",
        [`@${scope}/tsconfig`]: "workspace:^0.1.0",
        [`@${scope}/utils`]: "workspace:^0.1.0",
      },
    },
    {
      name: "UpdateDbDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePath: resolve(destinationPath, "db/package.json"),
      devDependencies: {
        [`@${scope}/eslint-config-node`]: "workspace:^0.1.0",
        [`@${scope}/tsconfig`]: "workspace:^0.1.0",
        [`@${scope}/utils`]: "workspace:^0.1.0",
      },
    },
    {
      name: "UpdateInfraDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePath: resolve(destinationPath, "infra/package.json"),
      devDependencies: {
        [`@${scope}/eslint-config-node`]: "workspace:^0.1.0",
        [`@${scope}/tsconfig`]: "workspace:^0.1.0",
        [`@${scope}/utils`]: "workspace:^0.1.0",
      },
    },
    {
      name: "UpdateUiDependencies",
      type: OperationType.UpdatePackageJson,
      sourcePath: resolve(destinationPath, "ui/package.json"),
      devDependencies: {
        [`@${scope}/eslint-config-react`]: "workspace:^0.1.0",
        [`@${scope}/tsconfig`]: "workspace:^0.1.0",
        [`@${scope}/utils`]: "workspace:^0.1.0",
      },
    },
  ];
}

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
