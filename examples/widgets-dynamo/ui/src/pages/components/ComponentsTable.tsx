import { ReactElement, useMemo, useState } from "react";
import {
  Column,
  Pagination,
  QueryTable,
  useInfiniteQueryPagination,
} from "gboost-ui";
import { Component } from "@myapp/core/models";
import { trpc } from "../../trpc.js";
import { Icon, Link, Rating } from "@aws-amplify/ui-react";
import { Link as RouterLink } from "react-router-dom";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { formatCurrency, formatDateTime } from "../../utils/format.js";
import { WidgetsAdditionalActions } from "../widgets/WidgetsAdditionalActions.js";

export function ComponentsTable(): ReactElement {
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
  });
  const query = trpc.component.list.useInfiniteQuery<Component>(
    {
      pageSize: pagination.pageSize,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  const paginationProps = useInfiniteQueryPagination<Component>({
    ...query,
    pagination,
    setPagination,
  });
  const columns = useMemo<Column<Component>[]>(
    () => [
      {
        headerName: "Name",
        id: "name",
        renderCell: (v, { id }) => (
          <Link as={RouterLink} to={id}>
            {v}
          </Link>
        ),
      },
      {
        headerName: "Description",
        id: "description",
      },
      {
        headerName: "Price",
        id: "price",
        renderCell: (v) => formatCurrency(v),
      },
      {
        headerName: "Rating",
        id: "rating",
        renderCell: (v: number) => <Rating value={v} maxValue={5} />,
      },
      {
        headerName: "Stock",
        id: "inStock",
      },
      {
        headerName: "Expiration Date",
        id: "expirationDate",
        renderCell: (v) => formatDateTime(v),
      },
    ],
    []
  );
  return (
    <QueryTable
      columns={columns}
      loading={query.isLoading}
      bgLoading={query.isFetching}
      AdditionalActions={<WidgetsAdditionalActions />}
      refreshFn={query.refetch}
      {...paginationProps}
    />
  );
}
