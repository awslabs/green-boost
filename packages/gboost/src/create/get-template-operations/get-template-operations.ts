import { Template } from "../templates.js";
import type { Operation } from "../operations/operations.js";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getMinimalOperations } from "./get-minimal-operations.js";
import { getCrudDynamoOperations } from "./get-crud-dynamo-operations.js";
import { getCrudPostgresOperations } from "./get-crud-postgres-operations.js";
import { getCommonOperations } from "./get-common-operations.js";
import type { Answers } from "../ask.js";
import type { GetOperationsParams } from "./common.js";

/**
 * Gets operations for creating Green Boost app on users computer. Examples of
 * operations including copying files from template directories to user's
 * specified directory, replacing tokens in files, adding dependencies, etc.
 */
export function getTemplateOperations(answers: Answers): Operation[] {
  const { appId, appTitle, template, directory } = answers;
  const destinationPath = resolve(directory);
  const templatesDirPath = resolve(
    fileURLToPath(import.meta.url),
    "../../../../templates"
  );
  const opsParams: GetOperationsParams = {
    appId,
    appTitle,
    destinationPath,
    templatesDirPath,
  };
  const operations: Record<Template, Operation[]> = {
    [Template.Minimal]: [
      ...getMinimalOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    [Template.CrudDynamo]: [
      ...getCrudDynamoOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    [Template.CrudPostgres]: [
      ...getCrudPostgresOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    [Template.Dashboard]: [], // TODO
    [Template.UserAuthMgmtCognito]: [], // TODO
  };
  return operations[template];
}
