import {
  CfnUserPoolGroup,
  CfnUserPoolGroupProps,
  UserPoolClientProps,
  UserPoolProps,
} from "aws-cdk-lib/aws-cognito/index.js";
import { Construct } from "constructs";

export interface CommonUserBaseProps {
  groups: UserPoolGroupProps[];
  userPoolProps?: UserPoolProps;
  userPoolClientProps?: UserPoolClientProps;
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
