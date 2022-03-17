import { API } from "aws-amplify";
import { DocumentNode } from "graphql/language/ast";

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

export async function gQuery<T>({
  query,
  vars,
  authMode,
}: GqlParams): Promise<T> {
  const res = await API.graphql({
    query,
    variables: vars,
    authMode,
  });
  if ("data" in res) {
    return res.data;
  } else {
    throw new Error("No 'data' in GQL response");
  }
}
