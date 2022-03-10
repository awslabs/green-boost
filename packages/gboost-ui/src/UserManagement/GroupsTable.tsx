import { ReactElement } from "react";
import {
  Column,
  QueryTable,
  OnQueryParams,
  OnQueryReturnValue,
} from "../QueryTable/QueryTable.js";
import { listGroups } from "./gql.js";
import { CognitoGroup } from "gboost-common";
import { gQuery } from "../utils/gQuery.js";

interface ListGroupsResponse {
  listGroups: {
    groups: CognitoGroup[];
    nextToken: string;
  };
}

async function handleQuery(params: OnQueryParams): Promise<OnQueryReturnValue> {
  try {
    const res = await gQuery({ query: listGroups });
    const { nextToken, groups: rows } = (res.data as ListGroupsResponse)
      .listGroups;
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
  { accessor: "name", name: "Name" },
  { accessor: "description", name: "Description" },
  { accessor: "precedence", name: "Precedence" },
  { accessor: "createAt", name: "Created At" },
  { accessor: "updatedAt", name: "Updated At" },
];

export function GroupsTable(): ReactElement {
  return <QueryTable columns={columns} onQuery={handleQuery} />;
}
