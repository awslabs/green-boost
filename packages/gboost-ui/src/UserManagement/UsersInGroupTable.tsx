import { ReactElement, useCallback, useMemo } from "react";
import { listUsersInGroup } from "./gql.js";
import type { CognitoUser, ListUsersInGroupArgs } from "gboost-common";
import { Link } from "@aws-amplify/ui-react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import {
  Box,
  Column,
  gQuery,
  QueryTable,
  OnQueryParams,
  OnQueryReturnValue,
  useBps,
} from "../index.js";
import {
  BackIcon,
  Container,
  getTitleSize,
  renderDate,
  renderStatus,
  Title,
} from "./common.js";

interface ListUsersInGroupResponse {
  listUsersInGroup: {
    users: CognitoUser[];
    nextToken?: string;
  };
}

export function UsersInGroupTable(): ReactElement {
  const { groupName } = useParams();
  const bps = useBps();
  const titleSize = getTitleSize(bps);
  const handleQuery = useCallback(
    async function handleQuery(
      params: OnQueryParams
    ): Promise<OnQueryReturnValue> {
      const { pageSize: limit, nextToken } = params;
      if (!groupName) return { errorMessage: "Group Name is missing" };
      const vars: ListUsersInGroupArgs = {
        input: {
          limit,
          nextToken: nextToken || undefined,
          groupName,
        },
      };
      try {
        const res = await gQuery<ListUsersInGroupResponse>({
          query: listUsersInGroup,
          vars,
        });
        const { nextToken, users: rows } = res.listUsersInGroup;
        return { rows, nextToken: nextToken ?? "" };
      } catch (err) {
        return { errorMessage: "Error fetching user data" };
      }
    },
    [groupName]
  );
  const columns: Column<CognitoUser>[] = useMemo(
    () => [
      {
        accessor: "username",
        name: "Username",
        renderCell: (username) => (
          <Link as={RouterLink} to={`../${username}`}>
            {username}
          </Link>
        ),
      },
      {
        accessor: "email",
        name: "Email",
        width: "2fr",
      },
      {
        accessor: "family_name",
        name: "Last Name",
        width: !bps.bp3 ? "0" : undefined,
      },
      {
        accessor: "given_name",
        name: "First Name",
        width: !bps.bp3 ? "0" : undefined,
      },
      {
        accessor: "status",
        name: "Status",
        renderCell: renderStatus,
        width: "2fr",
      },
      {
        accessor: "enabled",
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
  return (
    <Container>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box css={{ flex: 1 }}>
          <Link as={RouterLink} to="../groups">
            <BackIcon aria-label="back" as={MdArrowBack} />
            Groups
          </Link>
        </Box>
        <Box css={{ alignItems: "center", flex: 4 }}>
          <Title level={2} css={{ fontSize: titleSize }}>
            Users in Group: {groupName}
          </Title>
        </Box>
        <Box css={{ flex: 1 }} />
      </Box>
      <QueryTable
        columns={columns}
        getRowId={(r) => r.username}
        onQuery={handleQuery}
      />
    </Container>
  );
}
