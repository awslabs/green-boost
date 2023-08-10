import { Template } from "../templates";
import type { Operation } from "../operations/operations";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getMinimalOperations } from "./get-minimal-operations";
// import { getCrudDynamoOperations } from "./get-crud-dynamo-operations";
import { getCrudPostgresOperations } from "./get-crud-postgres-operations";
import { getCommonOperations } from "./get-common-operations";
import type { Answers } from "../ask";
import type { BaseOperationParams } from "./base-operation-params";
import { getBasicUiOperations } from "./get-basic-ui-operations";

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
  const opsParams: BaseOperationParams = {
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
    [Template.BasicUI]: [
      ...getBasicUiOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    // [Template.CrudDynamo]: [
    //   ...getCrudDynamoOperations(opsParams),
    //   ...getCommonOperations(opsParams),
    // ],
    [Template.CrudPostgres]: [
      ...getCrudPostgresOperations(opsParams),
      ...getCommonOperations(opsParams),
    ],
    // [Template.Dashboard]: [],
    // [Template.UserAuthMgmtCognito]: [],
  };
  return operations[template];
}
