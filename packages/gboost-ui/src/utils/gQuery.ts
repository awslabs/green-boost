import { API } from "aws-amplify";
import { type DocumentNode, GraphQLError } from "graphql";

enum GRAPHQL_AUTH_MODE {
  API_KEY = "API_KEY",
  AWS_IAM = "AWS_IAM",
  OPENID_CONNECT = "OPENID_CONNECT",
  AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
  AWS_LAMBDA = "AWS_LAMBDA",
}

interface GqlParams {
  query: DocumentNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vars?: Record<string, any>;
  authMode?: GRAPHQL_AUTH_MODE;
}

/**
 * Convenience Wrapper around Amplify's API.graphql method that first checks to
 * see if there are any errors in the response. If so, the array of errors are
 * thrown, otherwise the data is returned so you only need to access the query
 * name on the returned object
 * @example
 * ```ts
interface CreateUserResponse {
    createUser: CognitoUser
}
try {
    const { createUser: createdUser } = await gQuery<CreateUserResponse>({
      query: createUser,
      vars: { input: newUser },
    });
    // do something with createdUser
} catch (err) {
    const errors = err as GraphQLError[];
    if (errors[0].message === "User account already exists") {
        // handle duplicate user error
    }
}
```
 */
export async function gQuery<T>({
  query,
  vars,
  authMode,
}: GqlParams): Promise<T> {
  try {
    const res = await API.graphql({
      query: query as any,
      variables: vars,
      authMode,
    });
    if ("data" in res) {
      return res.data;
    } else {
      throw new Error("No 'data' in response");
    }
  } catch (err) {
    const { errors } = err as { data: unknown; errors: GraphQLError[] };
    throw errors;
  }
}
