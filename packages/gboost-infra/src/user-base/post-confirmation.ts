import type { PostConfirmationTriggerHandler } from "aws-lambda";
import {
  AdminAddUserToGroupCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

const cognitoClient = new CognitoIdentityProviderClient({});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log({ event });
  const defaultGroupName = getDefaultGroupName();
  await cognitoClient.send(
    new AdminAddUserToGroupCommand({
      UserPoolId: event.userPoolId,
      GroupName: defaultGroupName,
      Username: event.userName,
    })
  );
  return event;
};

function getDefaultGroupName(): string {
  const defaultGroupName = process.env["DEFAULT_GROUP_NAME"];
  if (!defaultGroupName) {
    throw new Error("DEFAULT_GROUP_NAME env var is missing");
  }
  return defaultGroupName;
}
