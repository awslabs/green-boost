import { Arn, Stack } from "aws-cdk-lib";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import type { GraphqlApi } from "@aws-cdk/aws-appsync-alpha";
import { Function } from "../function.js";
import { createSchema } from "./createSchema.js";
import { fileURLToPath } from "node:url";

export interface UserManagementProps {
  api: GraphqlApi;
  userPoolId: string;
  groupNames: string[];
  /**
   * Admin group names allocate elevated privileges to users in these groups
   */
  adminGroupNames: string[];
}

/**
 * Creates a Cognito user pool, Cognito groups, and Cognito user pool client
 * @deprecated
 */
export class UserManagement extends Construct {
  constructor(scope: Construct, id: string, props: UserManagementProps) {
    super(scope, id);
    const { api, groupNames, adminGroupNames, userPoolId } = props;

    const fileExt = import.meta.url.slice(-2);
    const entry = fileURLToPath(
      new URL(`./function/index.${fileExt}`, import.meta.url),
    );
    const userFn = new Function(this, "UserFunction", {
      entry,
      environment: {
        USER_POOL_ID: userPoolId,
        GROUP_NAMES: JSON.stringify(groupNames),
        ADMIN_GROUP_NAMES: JSON.stringify(adminGroupNames),
      },
      initialPolicy: [
        new PolicyStatement({
          actions: [
            "cognito-idp:AdminAddUserToGroup",
            "cognito-idp:AdminCreateUser",
            "cognito-idp:AdminDeleteUser",
            "cognito-idp:AdminDisableUser",
            "cognito-idp:AdminEnableUser",
            "cognito-idp:AdminGetUser",
            "cognito-idp:AdminListGroupsForUser",
            "cognito-idp:AdminListUsersInGroup",
            "cognito-idp:AdminRemoveUserFromGroup",
            "cognito-idp:AdminResetUserPassword",
            "cognito-idp:AdminUpdateUserAttributes",
            "cognito-idp:ListGroups",
            "cognito-idp:ListUsers",
            "cognito-idp:ListUsersInGroup",
          ],
          resources: [
            Arn.format(
              {
                service: "cognito-idp",
                resource: `userpool/${userPoolId}`,
              },
              Stack.of(this),
            ),
          ],
        }),
      ],
      memorySize: 512,
    });

    const userDs = api.addLambdaDataSource("UserFn", userFn);
    createSchema(api, userDs);
  }
}
