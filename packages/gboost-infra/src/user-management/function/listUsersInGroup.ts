import {
  CognitoIdentityProviderClient,
  ListUsersInGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import Joi from "joi";
import type { CognitoUser, ListUsersInGroupArgs } from "gboost-common";
import { transformUser } from "./user.js";
import { groupNames } from "./group.js";

// params
interface ListUsersInGroupParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<ListUsersInGroupArgs>;
  userPoolId: string;
}

let schema: undefined | Joi.ObjectSchema;
function validate(args: ListUsersInGroupArgs) {
  if (!schema) {
    schema = Joi.object({
      input: {
        groupName: Joi.string()
          .valid(...groupNames)
          .required(),
        nextToken: Joi.string(),
        limit: Joi.number().max(60),
      },
    });
  }
  Joi.assert(args, schema);
}

export async function listUsersInGroup(
  params: ListUsersInGroupParams
): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const input = event.arguments.input;
  const limit = input?.limit;
  const resp = await cognitoClient.send(
    new ListUsersInGroupCommand({
      UserPoolId: userPoolId,
      GroupName: input.groupName,
      Limit: limit,
      NextToken: input?.nextToken,
    })
  );
  const users: Omit<CognitoUser, "groups">[] = [];
  if (resp.Users) {
    for (const user of resp.Users) {
      users.push(transformUser(user));
    }
  }
  return { users, nextToken: resp.NextToken };
}
