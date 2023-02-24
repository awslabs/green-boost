import { Template } from "../templates.js";
import { Operation } from "../operations/operations.js";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getMinimalOperations } from "./get-minimal-operations.js";
import { getWidgetsDynamoOperations } from "./get-widgets-dynamo-operations.js";
import { getWidgetsPostgresOperations } from "./get-widgets-postgres-operations.js";
import { getCommonOperations } from "./get-common-operations.js";
import { Answers } from "../ask.js";
import { GetOperationsParams } from "./common.js";

/**
 * Gets operations for creating Green Boost app on users computer. Examples of
 * operations including copying files from template directories to user's
 * specified directory, replacing tokens in files, adding dependencies, etc.
 */
export function getTemplateOperations(answers: Answers): Operation[] {
  const { appId, template, directory } = answers;
  const destinationPath = resolve(directory);
  const templatesDirPath = resolve(
    fileURLToPath(import.meta.url),
    "../../../../templates"
  );
  const opsParams: GetOperationsParams = {
    destinationPath,
    appId,
    templatesDirPath,
  };
  const operations: Record<Template, Operation[]> = {
    [Template.Minimal]: [
      ...getMinimalOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    [Template.WidgetsDynamo]: [
      ...getWidgetsDynamoOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    [Template.WidgetsPostgres]: [
      ...getWidgetsPostgresOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    [Template.WebPortal]: [], // TODO
    [Template.KitchenSink]: [], // TODO
  };
  return operations[template];
}
