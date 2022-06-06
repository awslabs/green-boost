import { ReactElement, useMemo } from "react";
import { listGroups } from "./gql.js";
import { CognitoGroup } from "gboost-common";
import { Link } from "@aws-amplify/ui-react";
import { Link as RouterLink } from "react-router-dom";
import {
  Column,
  gQuery,
  QueryTable,
  OnQueryParams,
  OnQueryReturnValue,
  useBps,
} from "../index.js";
import { renderDate } from "./common.js";

interface ListGroupsResponse {
  listGroups: {
    groups: CognitoGroup[];
    nextToken: string;
  };
}

async function handleQuery(params: OnQueryParams): Promise<OnQueryReturnValue<CognitoGroup>> {
  try {
    const res = await gQuery({ query: listGroups });
    const { nextToken, groups: rows } = (res as ListGroupsResponse).listGroups;
    return { rows, nextToken: nextToken ?? "" };
  } catch (err) {
    console.error(err);
    return { errorMessage: err as string };
  }
}

export function GroupsTable(): ReactElement {
  const bps = useBps();
  const columns: Column<CognitoGroup>[] = useMemo(
    () => [
      {
        accessor: "name",
        name: "Name",
        renderCell: (name) => (
          <Link as={RouterLink} to={`./${name}`}>
            {name}
          </Link>
        ),
      },
      { accessor: "description", name: "Description", width: "3fr" },
      { accessor: "precedence", name: "Precedence" },
      {
        accessor: "createdAt",
        name: "Created At",
        renderCell: renderDate,
        width: !bps.bp3 ? "0" : "2fr",
      },
      {
        accessor: "updatedAt",
        name: "Updated At",
        renderCell: renderDate,
        width: !bps.bp3 ? "0" : "2fr",
      },
    ],
    [bps]
  );
  return (
    <QueryTable
      columns={columns}
      getRowId={(r) => r.name}
      heading="Groups"
      onQuery={handleQuery}
    />
  );
}
