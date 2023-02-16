import { Template } from "./ask.js";
import { Operation, OperationType } from "./operations/operations.js";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

interface GetOperations {
  template: Template;
  destination: string;
  scope: string;
}

/**
 * Gets operations for creating Green Boost app on users computer. Examples of
 * operations including copying files from template directories to user's
 * specified directory, replacing tokens in files, adding dependencies, etc.
 */
export function getOperations(params: GetOperations): Operation[] {
  const { template, scope } = params;
  const destinationPath = resolve(params.destination);
  const templatesDirPath = resolve(
    fileURLToPath(import.meta.url),
    "../../../templates"
  );
  const operations: Record<Template, Operation[]> = {
    [Template.Minimal]: [
      {
        type: OperationType.Copy,
        name: "CopyMinimalTemplate",
        sourcePath: resolve(templatesDirPath, "minimal"),
        destinationPath,
      },
      {
        name: "ReplaceScopeAndTsNoCheck",
        type: OperationType.Replace,
        values: [
          { find: /{{GB_APP_SCOPE}}/g, replace: scope },
          { find: "// @ts-nocheck\n", replace: "" },
        ],
        sourcePath: destinationPath,
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
        updates: [
          {
            source: resolve(destinationPath, "core/.lintstagedrc.t"),
            newName: ".lintstagedrc.js",
          },
          {
            source: resolve(destinationPath, "db/.lintstagedrc.t"),
            newName: ".lintstagedrc.js",
          },
          {
            source: resolve(destinationPath, "infra/.lintstagedrc.t"),
            newName: ".lintstagedrc.js",
          },
          {
            source: resolve(destinationPath, "ui/.lintstagedrc.t"),
            newName: ".lintstagedrc.js",
          },
        ],
      },
    ],
    get [Template.Basic](): Operation[] {
      return [
        ...this[Template.Minimal],
        {
          name: "CopyBasicTemplate",
          type: OperationType.Copy,
          sourcePath: resolve(templatesDirPath, "basic"),
          destinationPath,
        },
        {
          name: "UpdateUiDependencies",
          type: OperationType.UpdatePackageJson,
          sourcePath: resolve(templatesDirPath, "ui/package.json"),
          dependencies: {
            "@trpc/client": "^10.11.1",
            "@trpc/react-query": "^10.11.1",
          },
          devDependencies: {
            "@trpc/server": "^10.11.1",
          },
        },
        {
          name: "UpdatePnpmPatchedDependencies",
          type: OperationType.UpdatePackageJson,
          sourcePath: resolve(templatesDirPath, "package.json"),
          update(packageJson) {
            packageJson.pnpm.patchedDependencies["@hookform/resolvers@2.9.10"] =
              "patches/@hookform__resolvers@2.9.10.patch";
            return packageJson;
          },
        },
      ];
    },
    get [Template.ToDo](): Operation[] {
      return [
        ...this[Template.Minimal],
        {
          name: "CopyToDoTemplate",
          type: OperationType.Copy,
          sourcePath: resolve(templatesDirPath, "todo"),
          destinationPath,
        },
      ];
    },
    get [Template.Dashboard](): Operation[] {
      return [
        ...this[Template.Minimal],
        {
          name: "CopyToDoTemplate",
          type: OperationType.Copy,
          sourcePath: resolve(templatesDirPath, "dashboard"),
          destinationPath,
        },
      ];
    },
    get [Template.KitchenSink](): Operation[] {
      return [
        ...this[Template.Minimal],
        {
          name: "CopyToDoTemplate",
          type: OperationType.Copy,
          sourcePath: resolve(templatesDirPath, "kitchen-sink"),
          destinationPath,
        },
      ];
    },
  };
  return operations[template];
}
