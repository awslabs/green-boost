import type {
  UserType,
  AdminGetUserCommandOutput,
  AttributeType,
} from "@aws-sdk/client-cognito-identity-provider";
import type { CognitoUser, CognitoUserStatus } from "gboost-common";

// values in Attributes array returned from Cognito
// (not directly on user)
export const userAttrNames = [
  "email",
  "email_verified",
  "given_name",
  "family_name",
] as const;
type UserAttrName = (typeof userAttrNames)[number];

export function transformUser(
  // UserType is returned by List commands and
  // AdminGetUserCommandOuput is returned by Get command
  user: UserType | AdminGetUserCommandOutput,
): Omit<CognitoUser, "groups"> {
  let attributes: AttributeType[] | undefined;
  if ("Attributes" in user) {
    attributes = user.Attributes;
  } else if ("UserAttributes" in user) {
    attributes = user.UserAttributes;
  }
  if (!attributes) throw new Error();
  const userAttrs: Partial<CognitoUser> = {};
  console.log({ attributes });
  for (const { Name, Value } of attributes) {
    const name = Name as UserAttrName;
    if (Name && Value && userAttrNames.includes(name)) {
      if (name === "email_verified") {
        userAttrs[name] = Value === "true";
      } else {
        userAttrs[name] = Value;
      }
    }
  }
  if (!userAttrs.email_verified) userAttrs.email_verified = false;
  console.log({ userAttrs });
  if (!user.UserCreateDate) throw new Error("!user.UserCreatedData");
  if (!user.UserLastModifiedDate) throw new Error("!user.UserLastModifiedDate");
  return {
    ...(userAttrs as Pick<CognitoUser, UserAttrName>),
    createdAt: user.UserCreateDate.toISOString(),
    enabled: user.Enabled as boolean,
    status: user.UserStatus as CognitoUserStatus,
    updatedAt: user.UserLastModifiedDate.toISOString(),
    username: user.Username as string,
  };
}
