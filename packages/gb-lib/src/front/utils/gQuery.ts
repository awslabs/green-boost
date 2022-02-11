import Api, {
  GraphQLResult,
  GRAPHQL_AUTH_MODE,
} from "@aws-amplify/api-graphql";
import { DocumentNode } from "graphql/language/ast";

interface GqlParams {
  query: DocumentNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vars?: Record<string, any>;
  authMode?: GRAPHQL_AUTH_MODE;
}
interface CustomGraphQLResult<T> extends GraphQLResult<T> {
  data: T;
}

export async function gQuery<T>({
  query,
  vars,
  authMode,
}: GqlParams): Promise<CustomGraphQLResult<T>> {
  const q = (await Api.graphql({
    query,
    variables: vars,
    authMode,
  })) as GraphQLResult<T>;
  if (!q.data) throw new Error("GQL query returned no data");
  return q as CustomGraphQLResult<T>;
}
