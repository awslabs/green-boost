import {
  Column,
  Pagination,
  QueryTable,
  useInfiniteQueryPagination,
} from "gboost-ui";
import { Icon, Link, Rating } from "@aws-amplify/ui-react";
import { ReactElement, useMemo, useState } from "react";
import { Widget } from "@myapp/core/models";
import { WidgetsAdditionalActions } from "./WidgetsAdditionalActions.js";
import { trpc } from "src/trpc.js";
import { formatCurrency, formatDateTime } from "src/utils/format.js";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

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
        headerName: "Active",
        id: "active",
        renderCell: (v) => (
          <Icon
            as={v ? MdCheckBox : MdCheckBoxOutlineBlank}
            fontSize={20}
            color="font.primary"
          />
        ),
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
        headerName: "Updated Date",
        id: "updatedDate",
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
