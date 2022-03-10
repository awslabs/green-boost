import { ReactElement } from "react";
import { Badge } from "@aws-amplify/ui-react";
import { Column, QueryTable } from "../QueryTable/QueryTable.js";
import { listUsers } from "./gql.js";
import type { CognitoUser, ListUsersArgs } from "gboost-common";
import { CognitoUserStatus } from "gboost-common";
import type {
  OnQueryParams,
  OnQueryReturnValue,
} from "../QueryTable/QueryTable.js";
import { UsersTableRightActionBar } from "./UsersTableRightActionBar.js";
import { gQuery } from "../utils/gQuery.js";

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

async function handleQuery(params: OnQueryParams): Promise<OnQueryReturnValue> {
  const { pageSize: limit, nextToken } = params;
  const vars: ListUsersArgs = {
    input: {
      limit,
      nextToken: nextToken || undefined,
    },
  };
  try {
    const res = await gQuery({ query: listUsers, vars });
    const { nextToken, users: rows } = (res.data as ListUsersResponse)
      .listUsers;
    return { rows, nextToken: nextToken ?? "" };
  } catch (err) {
    console.error(err);
    return { errorMessage: err as string };
  }
  // const filter = getFilter(filters);
  // if (filter && filter.value === undefined) {
  //   // return undefined so request isn't sent when user
  //   // opens filter modal
  //   return undefined;
  // }
  // if (vars.input && filter) vars.input.filter = filter;
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
    <QueryTable
      columns={columns}
      onQuery={handleQuery}
      ActionMenu={<UsersTableRightActionBar />}
      rowIdAccessor="username"
      tableProps={{ highlightOnHover: true }}
    />
  );
}
