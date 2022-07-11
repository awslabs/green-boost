import {
  GraphqlApi,
  GraphqlType,
  InputType,
  ObjectType,
  ResolvableField,
  EnumType,
  Directive,
  BaseDataSource,
  MappingTemplate,
} from "@aws-cdk/aws-appsync-alpha";
import { fileURLToPath } from "node:url";
import { groupNames, adminGroupNames } from "./function/group.js";

export function createSchema(api: GraphqlApi, dataSource: BaseDataSource) {
  // Enum Types
  const groupNameEnum = new EnumType("GroupNameEnum", {
    definition: groupNames,
  });
  api.addType(groupNameEnum);

  // Input Types
  const createUserInput = new InputType("CreateUserInput", {
    definition: {
      email: GraphqlType.awsEmail({ isRequired: true }),
      family_name: GraphqlType.string({ isRequired: true }),
      given_name: GraphqlType.string({ isRequired: true }),
      groups: groupNameEnum.attribute({
        isList: true,
        isRequired: true,
        isRequiredList: true,
      }),
      username: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(createUserInput);
  const filterInput = new InputType("FilterInput", {
    definition: {
      field: GraphqlType.string({ isRequired: true }),
      operator: GraphqlType.string({ isRequired: true }),
      value: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(filterInput);
  const listUsersInput = new InputType("ListUsersInput", {
    definition: {
      limit: GraphqlType.int(),
      nextToken: GraphqlType.string(),
      filter: filterInput.attribute(),
    },
  });
  api.addType(listUsersInput);
  const listUsersInGroupInput = new InputType("ListUsersInGroupInput", {
    definition: {
      groupName: GraphqlType.string({ isRequired: true }),
      limit: GraphqlType.int(),
      nextToken: GraphqlType.string(),
    },
  });
  api.addType(listUsersInGroupInput);
  const updateUserInput = new InputType("UpdateUserInput", {
    definition: {
      email: GraphqlType.awsEmail(),
      family_name: GraphqlType.string(),
      given_name: GraphqlType.string(),
      groups: groupNameEnum.attribute({
        isList: true,
        isRequired: true,
      }),
      username: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(updateUserInput);

  // Object Types
  const userType = new ObjectType("User", {
    definition: {
      createdAt: GraphqlType.awsDateTime({ isRequired: true }),
      email: GraphqlType.awsEmail({ isRequired: true }),
      email_verified: GraphqlType.boolean({ isRequired: true }),
      enabled: GraphqlType.boolean({ isRequired: true }),
      given_name: GraphqlType.string({ isRequired: true }),
      groups: GraphqlType.string({
        isList: true,
        isRequiredList: true,
        isRequired: true,
      }),
      family_name: GraphqlType.string({ isRequired: true }),
      status: GraphqlType.string({ isRequired: true }),
      sub: GraphqlType.id({ isRequired: true }),
      updatedAt: GraphqlType.awsDateTime({ isRequired: true }),
      username: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(userType);
  const userConnection = new ObjectType("UserConnection", {
    definition: {
      users: userType.attribute({ isList: true, isRequiredList: true }),
      nextToken: GraphqlType.string(),
    },
  });
  api.addType(userConnection);
  const groupType = new ObjectType("Group", {
    definition: {
      createdAt: GraphqlType.awsDateTime({ isRequired: true }),
      description: GraphqlType.string(),
      name: groupNameEnum.attribute({ isRequired: true }),
      precedence: GraphqlType.int({ isRequired: true }),
      updatedAt: GraphqlType.awsDateTime({ isRequired: true }),
    },
  });
  api.addType(groupType);
  const groupConnection = new ObjectType("GroupConnection", {
    definition: {
      groups: groupType.attribute({ isList: true, isRequiredList: true }),
      nextToken: GraphqlType.string(),
    },
  });
  api.addType(groupConnection);

  // Queries
  api.addQuery(
    "getUser",
    new ResolvableField({
      args: { username: GraphqlType.string({ isRequired: true }) },
      dataSource,
      // https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html
      // Note: When using $utils.toJson() on context.info, the values that
      // selectionSetGraphQL and selectionSetList return are not serialized by default
      // so we need custom VTL to get access to know whether to get groups
      requestMappingTemplate: MappingTemplate.fromFile(
        fileURLToPath(new URL("./includeSelectionSetList.vtl", import.meta.url))
      ),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: userType.attribute(),
    })
  );
  api.addQuery(
    "listGroupsForUser",
    new ResolvableField({
      args: { username: GraphqlType.string({ isRequired: true }) },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: groupType.attribute({
        isRequired: true,
        isRequiredList: true,
        isList: true,
      }),
    })
  );
  api.addQuery(
    "listGroups",
    new ResolvableField({
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: groupConnection.attribute({ isRequired: true }),
    })
  );
  api.addQuery(
    "listUsersInGroup",
    new ResolvableField({
      args: { input: listUsersInGroupInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: userConnection.attribute({ isRequired: true }),
    })
  );
  api.addQuery(
    "listUsers",
    new ResolvableField({
      args: { input: listUsersInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: userConnection.attribute({ isRequired: true }),
    })
  );

  // Mutations
  api.addMutation(
    "createUser",
    new ResolvableField({
      args: { input: createUserInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: userType.attribute({ isRequired: true }),
    })
  );
  api.addMutation(
    "deleteUsers",
    new ResolvableField({
      args: {
        usernames: GraphqlType.string({
          isRequired: true,
          isList: true,
          isRequiredList: true,
        }),
      },
      dataSource,
      directives: [Directive.cognito(...adminGroupNames)],
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: GraphqlType.string(),
    })
  );
  api.addMutation(
    "disableUsers",
    new ResolvableField({
      args: {
        usernames: GraphqlType.string({
          isRequired: true,
          isList: true,
          isRequiredList: true,
        }),
      },
      dataSource,
      directives: [Directive.cognito(...adminGroupNames)],
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: GraphqlType.string(),
    })
  );
  api.addMutation(
    "enableUsers",
    new ResolvableField({
      args: {
        usernames: GraphqlType.string({
          isRequired: true,
          isList: true,
          isRequiredList: true,
        }),
      },
      dataSource,
      directives: [Directive.cognito(...adminGroupNames)],
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: GraphqlType.string(),
    })
  );
  api.addMutation(
    "resetPasswords",
    new ResolvableField({
      args: {
        usernames: GraphqlType.string({
          isRequired: true,
          isList: true,
          isRequiredList: true,
        }),
      },
      dataSource,
      directives: [Directive.cognito(...adminGroupNames)],
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: GraphqlType.string(),
    })
  );
  api.addMutation(
    "updateUser",
    new ResolvableField({
      args: { input: updateUserInput.attribute() },
      dataSource,
      directives: [Directive.cognito(...groupNames)],
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: GraphqlType.string(),
    })
  );
}
