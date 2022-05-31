import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
  useRef,
} from "react";
import { Link } from "@aws-amplify/ui-react";
import { Link as RouterLink } from "react-router-dom";
import type { CognitoUser, ListUsersArgs } from "gboost-common";
import { CognitoUserStatus } from "gboost-common";
import { listUsers } from "./gql.js";
import { UsersTableActionBar } from "./UsersTableActionBar.js";
import {
  Column,
  gQuery,
  OnQueryParams,
  OnQueryReturnValue,
  QueryTable,
  useBps,
} from "../index.js";
import { renderDate, renderStatus } from "./common.js";

interface ListUsersResponse {
  listUsers: {
    users: CognitoUser[];
    nextToken?: string;
  };
}

const textFilterOptions: Column<CognitoUser>["filterOptions"] = {
  comparators: [
    { name: "equals", value: "=" },
    { name: "begins with", value: "^=" },
  ],
  value: {
    type: "text",
  },
};

interface UsersTableProps {
  setUsers: Dispatch<SetStateAction<CognitoUser[]>>;
}

export function UsersTable(props: UsersTableProps): ReactElement {
  const { setUsers } = props;
  const [selectedUsers, setSelectedUsers] = useState<CognitoUser[]>([]);
  const handleQuery = useCallback(
    async function handleQuery(
      params: OnQueryParams
    ): Promise<OnQueryReturnValue> {
      const { filters, pageSize: limit, nextToken } = params;
      const vars: ListUsersArgs = {
        input: {
          limit,
          nextToken: nextToken || undefined,
        },
      };
      try {
        if (filters[0] && vars.input) {
          vars.input.filter = {
            field: filters[0].column,
            operator: filters[0].comparator,
            value: filters[0].value,
          };
        }
        const res = await gQuery<ListUsersResponse>({ query: listUsers, vars });
        const { nextToken, users: rows } = res.listUsers;
        setUsers(rows);
        return { rows, nextToken: nextToken ?? "" };
      } catch (err) {
        return { errorMessage: "Error fetching user data" };
      }
    },
    [setUsers]
  );
  const bps = useBps();
  const columns: Column<CognitoUser>[] = useMemo(
    () => [
      {
        accessor: "username",
        filterOptions: textFilterOptions,
        name: "Username",
        renderCell: (username) => (
          <Link as={RouterLink} to={`../${username}`}>
            {username}
          </Link>
        ),
      },
      {
        accessor: "email",
        filterOptions: textFilterOptions,
        name: "Email",
        width: "2fr",
      },
      {
        accessor: "family_name",
        filterOptions: textFilterOptions,
        name: "Last Name",
        width: !bps.bp3 ? "0" : undefined,
      },
      {
        accessor: "given_name",
        filterOptions: textFilterOptions,
        name: "First Name",
        width: !bps.bp3 ? "0" : undefined,
      },
      {
        accessor: "status",
        filterOptions: {
          comparators: [{ name: "equals", value: "=" }],
          value: {
            type: "select",
            options: [
              {
                value: CognitoUserStatus.Archived,
                name: CognitoUserStatus.Archived,
              },
              {
                value: CognitoUserStatus.Compromised,
                name: CognitoUserStatus.Compromised,
              },
              {
                value: CognitoUserStatus.Confirmed,
                name: CognitoUserStatus.Confirmed,
              },
              {
                value: CognitoUserStatus.ForceChangePassword,
                name: CognitoUserStatus.ForceChangePassword,
              },
              {
                value: CognitoUserStatus.ResetRequired,
                name: CognitoUserStatus.ResetRequired,
              },
              {
                value: CognitoUserStatus.Unconfirmed,
                name: CognitoUserStatus.Unconfirmed,
              },
              {
                value: CognitoUserStatus.Unknown,
                name: CognitoUserStatus.Unknown,
              },
            ],
          },
        },
        name: "Status",
        renderCell: renderStatus,
        width: "2fr",
      },
      {
        accessor: "enabled",
        filterOptions: {
          comparators: [{ name: "equals", value: "=" }],
          value: {
            type: "select",
            options: [
              {
                value: "Enabled",
                name: "Enabled",
              },
              {
                value: "Disabled",
                name: "Disabled",
              },
            ],
          },
        },
        name: "Enabled",
        renderCell: (v) => (v ? "Enabled" : "Disabled"),
        width: !bps.bp4 ? "0" : "1fr",
      },
      {
        accessor: "createdAt",
        name: "Created At",
        renderCell: renderDate,
        width: !bps.bp4 ? "0" : "2fr",
      },
      {
        accessor: "updatedAt",
        name: "Updated At",
        renderCell: renderDate,
        width: !bps.bp4 ? "0" : "2fr",
      },
    ],
    [bps]
  );
  const refreshRef = useRef<HTMLButtonElement>(null);
  return (
    <QueryTable
      columns={columns}
      disableMultiFilter
      enableSelect
      heading="Users"
      onQuery={handleQuery}
      onSelect={(action, allSelectedRows) => setSelectedUsers(allSelectedRows)}
      getRowId={(r) => r.username}
      tableProps={{ highlightOnHover: true }}
      refreshRef={refreshRef}
      ActionButton={
        <UsersTableActionBar
          refreshRef={refreshRef}
          selectedUsers={selectedUsers}
        />
      }
    />
  );
}
