import { ReactElement } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Column, GqlTable, OnQueryParams } from "../GqlTable/GqlTable.jsx";
import { listGroups } from "./gql.js";
import { CognitoGroup } from "gboost-common";

interface ListGroupsResponse {
  listGroups: {
    groups: CognitoGroup[];
    nextToken: string;
  };
}

function handleResponse(res: GraphQLResult<ListGroupsResponse>) {
  const { nextToken, groups: rows } = (res.data as ListGroupsResponse)
    .listGroups;
  return { nextToken, rows };
}

function handleQuery(params: OnQueryParams) {
  const { pageSize: limit, nextToken } = params;
  return { limit, nextToken: nextToken ? nextToken : undefined };
}

const columns: Column[] = [
  { accessor: "name", name: "Name" },
  { accessor: "description", name: "Description" },
  { accessor: "precedence", name: "Precedence" },
  { accessor: "createAt", name: "Created At" },
  { accessor: "updatedAt", name: "Updated At" },
];

export function GroupsTable(): ReactElement {
  return (
    <GqlTable
      columns={columns}
      onResponse={handleResponse}
      onQuery={handleQuery}
      query={listGroups}
    />
  );
}
