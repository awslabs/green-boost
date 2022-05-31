import {
  CognitoIdentityProviderClient,
  AdminCreateUserCommand,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import type { AppSyncResolverEvent } from "aws-lambda";
import { transformUser } from "./user.js";
import Joi from "joi";
import { CreateCognitoUser } from "gboost-common";
import { groupNames } from "./group.js";

interface CreateUserArgs {
  input: CreateCognitoUser;
}
interface CreateUserParams {
  cognitoClient: CognitoIdentityProviderClient;
  event: AppSyncResolverEvent<CreateUserArgs>;
  userPoolId: string;
}

let schema: undefined | Joi.ObjectSchema;
function validate(args: CreateUserArgs) {
  if (!schema) {
    schema = Joi.object({
      input: {
        email: Joi.string().email().required(),
        family_name: Joi.string().required(),
        given_name: Joi.string().required(),
        groups: Joi.array()
          .items(Joi.string().valid(...groupNames))
          .required(),
        username: Joi.string().max(128).required(),
      },
    });
  }
  Joi.assert(args, schema);
}

export async function createUser(props: CreateUserParams): Promise<unknown> {
  const { cognitoClient, event, userPoolId } = props;
  validate(event.arguments);
  const { username, groups, ...inputUserAttributes } = event.arguments.input;
  const userAttributes = Object.entries(inputUserAttributes).map(([k, v]) => ({
    Name: k,
    Value: v,
  }));
  // https://github.com/amazon-archives/amazon-cognito-identity-js/issues/187#issuecomment-255656804
  userAttributes.push({
    Name: "email_verified",
    Value: "true",
  });
  const res = await cognitoClient.send(
    new AdminCreateUserCommand({
      UserPoolId: userPoolId,
      Username: username,
      UserAttributes: userAttributes,
    })
  );
  await Promise.all(
    groups.map((g) =>
      cognitoClient.send(
        new AdminAddUserToGroupCommand({
          GroupName: g,
          Username: username,
          UserPoolId: userPoolId,
        })
      )
    )
  );
  if (!res.User) throw new Error("Error while creating user");
  const user = transformUser(res.User);
  return user;
}
