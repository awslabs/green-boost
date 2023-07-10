import {
  CognitoIdentityProviderClient,
  AdminDisableUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import { type UsernameArgs, validate } from "./validateUsernames";

interface DisableUsersParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<UsernameArgs>;
  userPoolId: string;
}

export async function disableUsers(
  params: DisableUsersParams
): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const { usernames } = event.arguments;
  await Promise.all(
    usernames.map((u) =>
      cognitoClient.send(
        new AdminDisableUserCommand({
          UserPoolId: userPoolId,
          Username: u,
        })
      )
    )
  );
  return usernames;
}
