import {
  CognitoIdentityProviderClient,
  ListGroupsCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import Joi from "joi";
import type { AppSyncResolverEvent } from "aws-lambda";
import { type Group, transformGroup } from "./group.js";

interface ListGroupsArgs {
  input: {
    nextToken?: string;
    limit?: number;
  };
}
interface ListGroupsParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<ListGroupsArgs>;
  userPoolId: string;
}
let schema: undefined | Joi.ObjectSchema;
function validate(args: ListGroupsArgs) {
  if (!schema) {
    schema = Joi.object({
      input: {
        nextToken: Joi.string(),
        limit: Joi.number().max(60),
      },
    });
  }
  Joi.assert(args, schema);
}

export async function listGroups(params: ListGroupsParams): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const limit = event.arguments.input?.limit;
  const res = await cognitoClient.send(
    new ListGroupsCommand({
      UserPoolId: userPoolId,
      Limit: limit,
      NextToken: event.arguments.input?.nextToken,
    }),
  );
  const groups: Group[] = [];
  if (res.Groups) {
    for (const group of res.Groups) {
      groups.push(transformGroup(group));
    }
  }
  return { groups, nextToken: res.NextToken };
}
