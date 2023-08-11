import {
  CognitoIdentityProviderClient,
  AdminDeleteUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import { type UsernameArgs, validate } from "./validateUsernames.js";

interface DeleteUsersParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<UsernameArgs>;
  userPoolId: string;
}

export async function deleteUsers(params: DeleteUsersParams): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const { usernames } = event.arguments;
  await Promise.all(
    usernames.map((u) =>
      cognitoClient.send(
        new AdminDeleteUserCommand({
          UserPoolId: userPoolId,
          Username: u,
        })
      )
    )
  );
  return usernames;
}
