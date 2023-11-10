import {
  CognitoIdentityProviderClient,
  AdminGetUserCommand,
  AdminListGroupsForUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import Joi from "joi";
import { transformUser } from "./user.js";
import type { CognitoUser } from "gboost-common";

interface GetUserArgs {
  username: string;
}
interface GetUserParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<GetUserArgs>;
  userPoolId: string;
}
let schema: undefined | Joi.ObjectSchema;
function validate(args: GetUserArgs) {
  if (!schema) {
    schema = Joi.object({
      username: Joi.string().max(128).required(),
    });
  }
  Joi.assert(args, schema);
}

export async function getUser(
  params: GetUserParams,
): Promise<CognitoUser | Omit<CognitoUser, "groups">> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const { username } = event.arguments;
  if (event.info?.selectionSetList.includes("groups")) {
    const [res1, res2] = await Promise.all([
      cognitoClient.send(
        new AdminGetUserCommand({
          UserPoolId: userPoolId,
          Username: username,
        }),
      ),
      cognitoClient.send(
        new AdminListGroupsForUserCommand({
          UserPoolId: userPoolId,
          Username: username,
        }),
      ),
    ]);
    const user = transformUser(res1);
    let groups: string[] = [];
    if (res2.Groups) {
      groups = res2.Groups.map((g) => g.GroupName as string);
    }
    const fullUser: CognitoUser = { ...user, groups };
    return fullUser;
  } else {
    const user = await cognitoClient.send(
      new AdminGetUserCommand({
        UserPoolId: userPoolId,
        Username: username,
      }),
    );
    return transformUser(user);
  }
}
