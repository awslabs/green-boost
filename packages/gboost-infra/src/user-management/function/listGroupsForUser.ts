import {
  CognitoIdentityProviderClient,
  AdminListGroupsForUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import Joi from "joi";
import { getCognitoIdentity } from "./getCognitoIdentity.js";
import { Group, transformGroup } from "./group.js";

interface ListGroupsForUser {
  username: string;
}
interface ListGroupsForUserParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<ListGroupsForUser>;
  userPoolId: string;
}

let schema: undefined | Joi.ObjectSchema;
function validate(args: ListGroupsForUser) {
  if (!schema) {
    schema = Joi.object({
      username: Joi.string().max(128),
    });
  }
  Joi.assert(args, schema);
}

function authz(e: AppSyncResolverEvent<ListGroupsForUser>) {
  const identity = getCognitoIdentity(e);
  if (
    e.arguments.username !== identity.username &&
    !identity.groups.includes("Admin")
  ) {
    throw new Error("Unauthorized to read other user's groups");
  }
}

export async function listGroupsForUser(
  params: ListGroupsForUserParams
): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  authz(event);
  const res = await cognitoClient.send(
    new AdminListGroupsForUserCommand({
      UserPoolId: userPoolId,
      Username: event.arguments.username,
    })
  );
  const groups: Group[] = [];
  if (res.Groups) {
    for (const group of res.Groups) {
      groups.push(transformGroup(group));
    }
  }
  return groups;
}
