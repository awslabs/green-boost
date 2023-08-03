// @ts-nocheck
"use client";

import { CustomTablePagination } from "@/components/CustomTablePagination";
import { type ItemSchema } from "@{{GB_APP_ID}}/core/shared";
import { Box, Container, Link, Typography } from "@mui/material";
import {
  DataGrid,
  getGridStringOperators,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useCallback, useTransition } from "react";
import NextLink from "next/link";
import { ItemsToolbar } from "./ItemsToolbar";
import { formatDate } from "@/utils/format";
import { useDataGridFilter } from "@/hooks/use-data-grid-filter";
import { useDataGridSort } from "@/hooks/use-data-grid-sort";

const filterOperators = getGridStringOperators().filter(({ value }) =>
  ["equals", "contains", "startsWith", "endsWith"].includes(value),
);

function generateColumns(columns: GridColDef[]): GridColDef[] {
  return columns.map((c) => ({
    ...c,
    filterable: c.filterable ?? false,
    filterOperators,
    sortable: c.sortable ?? false,
    flex: 1,
  }));
}

const columns = generateColumns([
  {
    field: "id",
    headerName: "ID",
    renderCell: (params: GridRenderCellParams) => (
      <Link
        component={NextLink}
        href={`/items/${params.value}`}
        sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {params.value}
      </Link>
    ),
  },
  {
    field: "name",
    filterable: true,
    headerName: "Name",
  },
  {
    field: "description",
    filterable: true,
    headerName: "Description",
  },
  {
    field: "createdAt",
    headerName: "Created Date",
    sortable: true,
    valueGetter: ({ value }) => formatDate(value),
  },
  {
    field: "updatedAt",
    headerName: "Updated Date",
    sortable: true,
    valueGetter: ({ value }) => formatDate(value),
  },
]);

interface ItemsTableProps {
  items: ItemSchema[];
}

export function ItemsTable(props: ItemsTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleRefresh = useCallback(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);
  const filterProps = useDataGridFilter({
    baseUri: "/items",
    startTransition,
  });
  const sortProps = useDataGridSort({
    baseUri: "/items",
    startTransition,
  });
  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" gap={2} height="80vh">
        <Typography variant="h4">Items Table</Typography>
        <DataGrid
          columns={columns}
          disableRowSelectionOnClick
          loading={isPending}
          {...filterProps}
          {...sortProps}
          rows={props.items}
          slots={{
            pagination: CustomTablePagination,
            toolbar: ItemsToolbar,
          }}
          slotProps={{
            pagination: {
              count: props.items.length,
            },
            toolbar: {
              handleRefresh,
              isPending,
            },
          }}
        />
      </Box>
    </Container>
  );
}
