// @ts-nocheck
import {
  Column,
  Pagination,
  QueryTable,
  useInfiniteQueryPagination,
} from "gboost-ui";
import { Alert, Button, Icon, Rating } from "@aws-amplify/ui-react";
import { ReactElement, useMemo, useState } from "react";
import { Item } from "@{{GB_APP_ID}}/core/models";
import { trpc } from "src/trpc.js";
import { formatCurrency, formatDateTime } from "src/utils/format.js";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";

export function ItemsTable(): ReactElement {
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
  });
  const query = trpc.item.list.useInfiniteQuery<Item>(
    {
      pageSize: pagination.pageSize,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  const paginationProps = useInfiniteQueryPagination<Item>({
    ...query,
    pagination,
    setPagination,
  });
  const columns = useMemo<Column<Item>[]>(
    () => [
      {
        headerName: "Name",
        id: "name",
        renderCell: (v, { id }) => (
          <Link className="amplify-link" to={id}>
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
  let alertMessage: ReactElement | undefined;
  if (!paginationProps.rows?.length) {
    alertMessage = <Alert variation="info">No items available</Alert>;
  }
  return (
    <QueryTable
      columns={columns}
      loading={query.isLoading}
      bgLoading={query.isFetching}
      AdditionalActions={
        <Link to="create">
          <Button backgroundColor="background.success">Create</Button>
        </Link>
      }
      AlertMessage={alertMessage}
      refreshFn={query.refetch}
      {...paginationProps}
    />
  );
}
