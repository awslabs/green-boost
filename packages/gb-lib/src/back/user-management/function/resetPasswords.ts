import {
  CognitoIdentityProviderClient,
  AdminResetUserPasswordCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import { UsernameArgs, validate } from "./validateUsernames.js";

// params
interface ResetPasswordsParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<UsernameArgs>;
  userPoolId: string;
}

export async function resetPasswords(
  params: ResetPasswordsParams
): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = params;
  validate(event.arguments);
  const { usernames } = event.arguments;
  await Promise.all(
    usernames.map((u) =>
      cognitoClient.send(
        new AdminResetUserPasswordCommand({
          UserPoolId: userPoolId,
          Username: u,
        })
      )
    )
  );
  return usernames;
}
