import type { AppSyncResolverEvent } from "aws-lambda";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { listUsers } from "./listUsers.js";
import { createUser } from "./createUser.js";
import { updateUser } from "./updateUser.js";
import { deleteUsers } from "./deleteUsers.js";
import { disableUsers } from "./disableUsers.js";
import { enableUsers } from "./enableUsers.js";
import { resetPasswords } from "./resetPasswords.js";
import { listGroups } from "./listGroups.js";
import { listUsersInGroup } from "./listUsersInGroup.js";
import { listGroupsForUser } from "./listGroupsForUser.js";
import { getUser } from "./getUser.js";

const cognitoClient = new CognitoIdentityProviderClient({});
const userPoolId = process.env["USER_POOL_ID"] as string;

export async function handler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: AppSyncResolverEvent<any>
): Promise<unknown> {
  const params = {
    cognitoClient,
    event,
    userPoolId,
  };
  console.log(JSON.stringify(event));
  try {
    switch (event.info.fieldName) {
      case "createUser":
        return createUser(params);
      case "deleteUsers":
        return deleteUsers(params);
      case "disableUsers":
        return disableUsers(params);
      case "enableUsers":
        return enableUsers(params);
      case "getUser":
        return getUser(params);
      case "listGroupsForUser":
        return listGroupsForUser(params);
      case "listGroups":
        return listGroups(params);
      case "listUsers":
        return listUsers(params);
      case "listUsersInGroup":
        return listUsersInGroup(params);
      case "resetPasswords":
        return resetPasswords(params);
      case "updateUser":
        return updateUser(params);
      default:
        throw new Error(
          `unknown event.info.fieldName: ${event.info.fieldName}`
        );
    }
  } catch (e) {
    console.error(e);
  }
  return;
}
