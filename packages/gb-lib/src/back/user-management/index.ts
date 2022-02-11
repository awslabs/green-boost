import { Arn, Stack } from "aws-cdk-lib";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { GraphqlApi, MappingTemplate } from "@aws-cdk/aws-appsync-alpha";
import { Function } from "../function.js";
import { createSchema } from "./createSchema.js";
import { Stage } from "../stages.js";

export interface UserManagementProps {
  api: GraphqlApi;
  userPoolId: string;
  groupNames: string[];
  /**
   * Admin Group Names
   *
   * Admin group names allocate elevated privileges to users in these groups
   */
  adminGroupNames: string[];
  stage: Stage;
}

/**
 * UserManagement Construct
 * Creates an Cognito User Pool, Groups, Client
 */
export class UserManagement extends Construct {
  constructor(scope: Construct, id: string, props: UserManagementProps) {
    super(scope, id);
    const { api, groupNames, adminGroupNames, userPoolId, stage } = props;

    const userFn = new Function(this, "UserFunction", {
      entry: new URL("./function/index.ts", import.meta.url).pathname,
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
              Stack.of(this)
            ),
          ],
        }),
      ],
      memorySize: 512,
      stage,
    });

    const userDs = api.addLambdaDataSource("UserFn", userFn);
    createSchema(api, userDs);
    const resolverConfigs = [
      {
        fieldName: "getUser",
        // https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html
        // Note: When using $utils.toJson() on context.info, the values that
        // selectionSetGraphQL and selectionSetList return are not serialized by default.
        reqMapTemp: MappingTemplate.fromFile(
          new URL("./includeSelectionSetList.vtl", import.meta.url).pathname
        ),
        typeName: "Query",
      },
      { fieldName: "listGroupsForUser", typeName: "Query" },
      { fieldName: "listGroups", typeName: "Query" },
      { fieldName: "listUsersInGroup", typeName: "Query" },
      { fieldName: "listUsers", typeName: "Query" },
      { fieldName: "createUser", typeName: "Mutation" },
      { fieldName: "deleteUsers", typeName: "Mutation" },
      { fieldName: "disableUsers", typeName: "Mutation" },
      { fieldName: "enableUsers", typeName: "Mutation" },
      { fieldName: "resetPasswords", typeName: "Mutation" },
      { fieldName: "updateUser", typeName: "Mutation" },
    ];
    resolverConfigs.forEach(({ fieldName, reqMapTemp, typeName }) =>
      userDs.createResolver({
        fieldName,
        typeName,
        requestMappingTemplate: reqMapTemp ?? MappingTemplate.lambdaRequest(),
        responseMappingTemplate: MappingTemplate.lambdaResult(),
      })
    );
  }
}
