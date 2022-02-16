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
      email_verified: GraphqlType.string(),
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
        new URL("./includeSelectionSetList.vtl", import.meta.url).pathname
      ),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: userType.attribute(),
    })
  );
  // TODO: figure out why I need to make api.createResolver() call,
  // passing dataSource to api.addQuery() should be enough to do this
  // create resolver from api NOT data source: https://github.com/aws/aws-cdk/issues/13269#issuecomment-874158150
  api.createResolver({
    dataSource,
    fieldName: "getUser",
    typeName: "Query",
    requestMappingTemplate: MappingTemplate.fromFile(
      new URL("./includeSelectionSetList.vtl", import.meta.url).pathname
    ),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "listGroupsForUser",
    typeName: "Query",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
  api.addQuery(
    "listGroups",
    new ResolvableField({
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: groupConnection.attribute({ isRequired: true }),
    })
  );
  api.createResolver({
    dataSource,
    fieldName: "listGroups",
    typeName: "Query",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "listUsersInGroup",
    typeName: "Query",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "listUsers",
    typeName: "Query",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });

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
  api.createResolver({
    dataSource,
    fieldName: "createUser",
    typeName: "Mutation",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "deleteUsers",
    typeName: "Mutation",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "disableUsers",
    typeName: "Mutation",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "enableUsers",
    typeName: "Mutation",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "resetPasswords",
    typeName: "Mutation",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
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
  api.createResolver({
    dataSource,
    fieldName: "updateUser",
    typeName: "Mutation",
    requestMappingTemplate: MappingTemplate.lambdaRequest(),
    responseMappingTemplate: MappingTemplate.lambdaResult(),
  });
}
