import { Template } from "../ask.js";
import { Operation } from "../operations/operations.js";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getMinimalOperations } from "./get-minimal-operations.js";
import { getWidgetsDynamoOperations } from "./get-widgets-dynamo-operations.js";
import { getWidgetsPostgresOperations } from "./get-widgets-postgres-operations.js";
import { getCommonOperations } from "./get-common-operations.js";

export interface GetTemplateOperations {
  template: Template;
  destination: string;
  scope: string;
}

/**
 * Gets operations for creating Green Boost app on users computer. Examples of
 * operations including copying files from template directories to user's
 * specified directory, replacing tokens in files, adding dependencies, etc.
 */
export function getTemplateOperations(
  params: GetTemplateOperations
): Operation[] {
  const { template, scope } = params;
  const destinationPath = resolve(params.destination);
  const templatesDirPath = resolve(
    fileURLToPath(import.meta.url),
    "../../../../templates"
  );
  const commonParams = {
    destinationPath,
    scope,
    templatesDirPath,
  };
  const operations: Record<Template, Operation[]> = {
    [Template.Minimal]: [
      ...getMinimalOperations(commonParams),
      ...getCommonOperations(commonParams),
    ],
    [Template.WidgetsDynamo]: [
      ...getWidgetsDynamoOperations(commonParams),
      ...getCommonOperations(commonParams),
    ],
    [Template.WidgetsPostgres]: [
      ...getWidgetsPostgresOperations(commonParams),
      ...getCommonOperations(commonParams),
    ],
    [Template.WebPortal]: [], // TODO
    [Template.KitchenSink]: [], // TODO
  };
  return operations[template];
}
