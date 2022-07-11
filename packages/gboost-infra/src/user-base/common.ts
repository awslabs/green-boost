import { Duration } from "aws-cdk-lib";
import {
  CfnUserPoolGroup,
  CfnUserPoolGroupProps,
  PasswordPolicy,
  StandardAttributesMask,
  UserPoolClientProps,
  UserPoolProps,
} from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export interface CommonUserBaseProps {
  groups: UserPoolGroupProps[];
  userPoolProps?: Partial<UserPoolProps>;
  userPoolClientProps?: Partial<UserPoolClientProps>;
}

export interface UserPoolGroupProps
  extends Omit<CfnUserPoolGroupProps, "userPoolId"> {
  groupName: string;
}

export function createUserPoolGroups(
  scope: Construct,
  groups: UserPoolGroupProps[],
  userPoolId: string
) {
  for (const group of groups) {
    const { groupName, precedence, description } = group;
    new CfnUserPoolGroup(scope, `UserPoolGroup${groupName}`, {
      userPoolId: userPoolId,
      groupName,
      precedence, // lower takes precendence
      description,
    });
  }
}

export const defaultPasswordPolicy: PasswordPolicy = {
  minLength: 8,
  requireDigits: true,
  requireLowercase: true,
  requireSymbols: true,
  requireUppercase: true,
  tempPasswordValidity: Duration.days(7),
};

/**
 * Used to define with attributes an app client should be able to write to.
 * emailVerified and phoneNumberVerified are left out b/c user shouldn't be
 * able to write to those.
 * Ensure authz attributes like custom:groups are NOT able to be written by app
 * client.
 */
export const standardWriteAttributes: Required<
  Omit<StandardAttributesMask, "emailVerified" | "phoneNumberVerified">
> = {
  address: true,
  birthdate: true,
  email: true,
  familyName: true,
  fullname: true,
  gender: true,
  givenName: true,
  lastUpdateTime: true,
  locale: true,
  middleName: true,
  nickname: true,
  phoneNumber: true,
  preferredUsername: true,
  profilePage: true,
  profilePicture: true,
  timezone: true,
  website: true,
};
