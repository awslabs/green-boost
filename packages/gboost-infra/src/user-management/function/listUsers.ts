import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import type { CognitoUser, ListUsersArgs } from "gboost-common";
import Joi from "joi";
import { transformUser } from "./user.js";

interface ListUsersParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<ListUsersArgs>;
  userPoolId: string;
}

let schema: undefined | Joi.ObjectSchema;
function validate(args: ListUsersArgs) {
  if (!schema) {
    schema = Joi.object({
      input: {
        filter: {
          field: Joi.string().required(),
          operator: Joi.string().valid("=", "^="),
          value: Joi.string().required(),
        },
        nextToken: Joi.string(),
        limit: Joi.number().max(60),
      },
    });
  }
  Joi.assert(args, schema);
}

export async function listUsers(params: ListUsersParams): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const input = event.arguments.input;
  const filter = input?.filter;
  const limit = input?.limit;
  const nextToken = input?.nextToken;
  let filterString: string | undefined = undefined;
  if (filter) {
    // https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html#API_ListUsers_RequestSyntax
    if (filter.field === "status") {
      filter.field = "cognito:user_status";
    } else if (filter.field === "enabled") {
      filter.field = "status";
    }
    // escaping is required for Cognito API
    // eslint-disable-next-line no-useless-escape
    filterString = `${filter.field} ${filter.operator} \"${filter.value}\"`;
  }
  const resp = await cognitoClient.send(
    new ListUsersCommand({
      UserPoolId: userPoolId,
      Filter: filterString,
      Limit: limit,
      PaginationToken: nextToken,
    }),
  );
  const users: Omit<CognitoUser, "groups">[] = [];
  if (resp.Users) {
    for (const user of resp.Users) {
      users.push(transformUser(user));
    }
  }
  return { users, nextToken: resp.PaginationToken };
}
