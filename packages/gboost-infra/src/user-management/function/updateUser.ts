import {
  CognitoIdentityProviderClient,
  AdminUpdateUserAttributesCommand,
  AdminListGroupsForUserCommand,
  AdminRemoveUserFromGroupCommand,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import Joi from "joi";
import { getCognitoIdentity } from "./getCognitoIdentity.js";
import { groupNames, adminGroupNames } from "./group.js";

interface UpdateUserArgs {
  input: {
    email?: string;
    family_name?: string;
    given_name?: string;
    groups?: string[];
    username: string;
  };
}
interface UpdateUserParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<UpdateUserArgs>;
  userPoolId: string;
}

let schema: undefined | Joi.ObjectSchema;
function validate(args: UpdateUserArgs) {
  if (!schema) {
    schema = Joi.object({
      input: {
        email: Joi.string().email(),
        family_name: Joi.string(),
        given_name: Joi.string(),
        groups: Joi.array().items(Joi.string().valid(...groupNames)),
        username: Joi.string().max(128).required(),
      },
    });
  }
  Joi.assert(args, schema);
}

function authz(e: AppSyncResolverEvent<UpdateUserArgs>) {
  const identity = getCognitoIdentity(e);
  if (
    e.arguments.input.username !== identity.username &&
    !identity.groups.some((g) => adminGroupNames.includes(g))
  ) {
    throw new Error("User is unauthorized to make update");
  }
}

export async function updateUser(params: UpdateUserParams): Promise<string> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  authz(event);
  const { username, groups, ...inputUserAttributes } = event.arguments.input;
  const userAttributes = Object.entries(inputUserAttributes).map(([k, v]) => ({
    Name: k,
    Value: v,
  }));
  const promises: Promise<unknown>[] = [];
  if (Object.keys(inputUserAttributes).length) {
    promises.push(
      cognitoClient.send(
        new AdminUpdateUserAttributesCommand({
          UserPoolId: userPoolId,
          Username: username,
          UserAttributes: userAttributes,
        }),
      ),
    );
  }
  if (groups) {
    promises.push(updateGroups(params));
  }
  await Promise.all(promises);
  return username;
}

async function updateGroups(params: UpdateUserParams): Promise<void> {
  const { cognitoClient, event, userPoolId } = params;
  const res1 = await cognitoClient.send(
    new AdminListGroupsForUserCommand({
      UserPoolId: userPoolId,
      Username: event.arguments.input.username,
    }),
  );
  if (!res1.Groups) throw new Error("no groups for user");
  const oldGroups = res1.Groups.map((g) => g.GroupName as string);
  const newGroups = event.arguments.input.groups as string[];
  const promises: Promise<unknown>[] = [];
  for (const oldGroup of oldGroups) {
    if (!newGroups.includes(oldGroup)) {
      promises.push(
        cognitoClient.send(
          new AdminRemoveUserFromGroupCommand({
            GroupName: oldGroup,
            UserPoolId: userPoolId,
            Username: event.arguments.input.username,
          }),
        ),
      );
    }
  }
  for (const newGroup of newGroups) {
    if (!oldGroups.includes(newGroup)) {
      promises.push(
        cognitoClient.send(
          new AdminAddUserToGroupCommand({
            GroupName: newGroup,
            UserPoolId: userPoolId,
            Username: event.arguments.input.username,
          }),
        ),
      );
    }
  }
  await Promise.all(promises);
}
