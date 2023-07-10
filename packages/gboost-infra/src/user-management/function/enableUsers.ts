import {
  CognitoIdentityProviderClient,
  AdminEnableUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import { type UsernameArgs, validate } from "./validateUsernames";

// params
interface EnableUsersParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<UsernameArgs>;
  userPoolId: string;
}

export async function enableUsers(params: EnableUsersParams): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const { usernames } = event.arguments;
  await Promise.all(
    usernames.map((u) =>
      cognitoClient.send(
        new AdminEnableUserCommand({
          UserPoolId: userPoolId,
          Username: u,
        })
      )
    )
  );
  return usernames;
}
