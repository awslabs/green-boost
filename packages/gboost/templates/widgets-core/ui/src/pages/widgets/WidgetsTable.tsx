// @ts-nocheck
import {
  Column,
  Pagination,
  QueryTable,
  useInfiniteQueryPagination,
} from "gboost-ui";
import { ReactElement, useMemo, useState } from "react";
import { Widget } from "@{{GB_APP_ID}}/core/models";
import { WidgetsAdditionalActions } from "./WidgetsAdditionalActions.js";
import { trpc } from "src/trpc.js";

export function loader() {
  //
}

export function WidgetsTable(): ReactElement {
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
  });
  const query = trpc.widget.list.useInfiniteQuery<Widget>(
    {
      pageSize: pagination.pageSize,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  const paginationProps = useInfiniteQueryPagination<Widget>({
    ...query,
    pagination,
    setPagination,
  });
  const columns = useMemo<Column<Widget>[]>(
    () => [
      {
        headerName: "Name",
        id: "name",
      },
      {
        headerName: "Description",
        id: "description",
      },
      {
        headerName: "Active",
        id: "active",
      },
      {
        headerName: "Price",
        id: "price",
      },
      {
        headerName: "Rating",
        id: "rating",
      },
    ],
    []
  );
  return (
    <QueryTable
      columns={columns}
      AdditionalActions={<WidgetsAdditionalActions />}
      refreshFn={query.refetch}
      {...paginationProps}
    />
  );
}
