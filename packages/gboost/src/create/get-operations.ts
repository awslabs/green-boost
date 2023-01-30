import { Template } from "./ask.js";
import { Operation, OperationType } from "./operations.js";
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
          { find: "{{GB_APP_SCOPE}}", replace: scope },
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
