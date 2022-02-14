import {
  UserType,
  AdminGetUserCommandOutput,
  AttributeType,
} from "@aws-sdk/client-cognito-identity-provider";

export interface User {
  createdAt: string;
  email: string;
  email_verified: string;
  enabled: boolean;
  family_name: string;
  given_name: string;
  status: string;
  updatedAt: string;
  username: string;
}
// values in Attributes array returned from Cognito
// (not directly on user)
export const userAttrNames = [
  "email",
  "email_verified",
  "given_name",
  "family_name",
] as const;
type UserAttrName = typeof userAttrNames[number];

export interface UserWithGroup extends User {
  groups: string[];
}

export function transformUser(
  // UserType is returned by List commands and
  // AdminGetUserCommandOuput is returned by Get command
  user: UserType | AdminGetUserCommandOutput
): User {
  let attributes: AttributeType[] | undefined;
  if ("Attributes" in user) {
    attributes = user.Attributes;
  } else if ("UserAttributes" in user) {
    attributes = user.UserAttributes;
  }
  if (!attributes) throw new Error();
  const userAttrs: Partial<User> = {};
  for (const { Name, Value } of attributes) {
    const name = Name as UserAttrName;
    if (Name && Value && userAttrNames.includes(name)) {
      userAttrs[name] = Value;
    }
  }
  if (!user.UserCreateDate) throw new Error("!user.UserCreatedData");
  if (!user.UserLastModifiedDate) throw new Error("!user.UserLastModifiedDate");
  return {
    ...(userAttrs as Pick<User, UserAttrName>),
    createdAt: user.UserCreateDate.toISOString(),
    enabled: user.Enabled as boolean,
    status: user.UserStatus as string,
    updatedAt: user.UserLastModifiedDate.toISOString(),
    username: user.Username as string,
  };
}
