import { ReactElement } from "react";
import { Badge } from "@aws-amplify/ui-react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Column, GqlTable } from "../GqlTable/GqlTable.jsx";
import { listUsers } from "./gql.js";
import type { CognitoUser, ListUsersArgs } from "gboost-common";
import { CognitoUserStatus } from "gboost-common";
import { OnQueryParams } from "../GqlTable/GqlTable.js";
import { UsersTableRightActionBar } from "./UsersTableRightActionBar.jsx";

interface ListUsersResponse {
  listUsers: {
    users: CognitoUser[];
    nextToken?: string;
  };
}

function renderDate(dateStr: string) {
  return new Date(dateStr).toLocaleString();
}
type BadgeVariation = "info" | "error" | "warning" | "success";
const statusToVariation: Record<CognitoUserStatus, BadgeVariation> = {
  [CognitoUserStatus.Archived]: "info",
  [CognitoUserStatus.Compromised]: "error",
  [CognitoUserStatus.Confirmed]: "success",
  [CognitoUserStatus.ForceChangePassword]: "info",
  [CognitoUserStatus.ResetRequired]: "info",
  [CognitoUserStatus.Unconfirmed]: "info",
  [CognitoUserStatus.Unknown]: "warning",
};
function renderStatus(status: CognitoUserStatus) {
  return (
    <Badge size="small" variation={statusToVariation[status]}>
      {status}
    </Badge>
  );
}

function handleResponse(res: GraphQLResult<ListUsersResponse>) {
  const { nextToken, users: rows } = (res.data as ListUsersResponse).listUsers;
  return { nextToken: nextToken ?? "", rows };
}

function handleQuery(params: OnQueryParams) {
  const { pageSize: limit, nextToken } = params;
  const vars: ListUsersArgs = {
    input: {
      limit,
      nextToken: nextToken || undefined,
    },
  };
  // const filter = getFilter(filters);
  // if (filter && filter.value === undefined) {
  //   // return undefined so request isn't sent when user
  //   // opens filter modal
  //   return undefined;
  // }
  // if (vars.input && filter) vars.input.filter = filter;
  return vars;
}

const columns: Column[] = [
  {
    accessor: "username",
    filterOptions: {
      comparators: [
        { name: "equals", value: "=" },
        { name: "begins with", value: "^=" },
      ],
      value: {
        type: "text",
      },
    },
    name: "Username",
  },
  { accessor: "email", name: "Email" },
  { accessor: "family_name", name: "Last Name" },
  { accessor: "given_name", name: "First Name" },
  { accessor: "status", name: "Status", renderCell: renderStatus },
  { accessor: "createdAt", name: "Created At", renderCell: renderDate },
  { accessor: "updatedAt", name: "Updated At", renderCell: renderDate },
];

export function UsersTable(): ReactElement {
  return (
    <GqlTable
      columns={columns}
      onQuery={handleQuery}
      onResponse={handleResponse}
      query={listUsers}
      RightActionBar={<UsersTableRightActionBar />}
      rowIdAccessor="username"
      tableProps={{ highlightOnHover: true }}
    />
  );
}
