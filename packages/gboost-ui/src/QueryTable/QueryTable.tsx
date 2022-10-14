import { ReactElement, useMemo, useRef, useState } from "react";
import { Placeholder, Table } from "@aws-amplify/ui-react";
import { Box, styled } from "../index.js";
import { Pagination as DefaultPagination } from "./Pagination.js";
import { ActionBar as DefaultActionBar } from "./ActionBar/ActionBar.js";
import type { Density } from "./ActionBar/DensityAction.js";
import { TableBody } from "./TableBody.js";
import { QueryTableProps } from "./types/props.js";
import { TableHeader } from "./TableHeader.js";

const StyledPlaceholder = styled(Placeholder, { height: 55 });
const StyledTable = styled(Table, {
  display: "grid",
  borderCollapse: "collapse",
  minWidth: "100%",
  overflow: "auto", // TODO: why won't responsive scrolling work like
  // this example: https://codepen.io/adam-lynch/pen/XwKWdG
});

const rowHeight = 55;
const selectColWidth = 50;
const defaultColWidth = "minmax(150px, 1fr)";

const densityToPadding: Record<Density, string> = {
  cozy: ".5rem !important",
  standard: "1rem !important",
  comfy: "1.5rem !important",
};

/**
 * QueryTable is a table component for displaying data queries from an API.
 * Features include pagination, filtering, sorting, column visibility, row
 * density, and slots for customizing specific elements of the table. Since
 * QueryTable does not support controlled pagination, filtering, sorting, or
 * selected as this state is always required for making data queries to your
 * API. However, these props are not required as leaving them `undefined` will
 * simply remove their functionality from the component.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function QueryTable<T extends Record<string, any>>(
  props: QueryTableProps<T>
): ReactElement {
  const {
    columns,
    disableMultiFilter = false,
    enableSingleSelect = false,
    filters,
    getRowId = (r: T) => r.id,
    heading,
    initDensity = "standard",
    initColumnVisibility,
    loading = false,
    pageSiblingCount = 1,
    pageSizeOptions = [10, 20, 50],
    pagination,
    onChangeFilters,
    onChangePagination,
    onChangeSelected,
    onChangeSorts,
    rows = [],
    selected,
    sorts,
    tableProps,
    ActionBar: CustomActionBar,
    AdditionalActions,
    AlertMessage,
    Pagination: CustomPagination,
  } = props;
  // if no initialColumnVisibility, show all columns
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >(
    !initColumnVisibility
      ? columns.reduce((prev, cur) => ({ ...prev, [cur.id]: true }), {})
      : initColumnVisibility
  );
  const [density, setDensity] = useState<Density>(initDensity);
  const visibleColumns = useMemo(
    () => columns.filter((c) => columnVisibility[c.id as string]),
    [columns, columnVisibility]
  );
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const gridTemplateColumns = useMemo(() => {
    let gridTempCols = visibleColumns.reduce(
      (prev, cur) => `${prev} ${cur.width || defaultColWidth}`,
      ""
    );
    if (selected) gridTempCols = `${selectColWidth}px ` + gridTempCols;
    return gridTempCols;
  }, [selected, visibleColumns]);
  const padding = densityToPadding[density];
  // need alt body b/c body is inside table grid
  let altBody: ReactElement | undefined = undefined;
  let paginationMt = 0;
  if (AlertMessage) {
    altBody = AlertMessage;
    // - 1 b/c 1 row of error alert message
    if (pagination?.pageSize) {
      paginationMt = rowHeight * (pagination.pageSize - 1);
    }
  } else if (loading) {
    altBody = (
      <Box
        css={{ display: "flex", gap: "$1", flexDirection: "column", my: "$2" }}
      >
        {[...Array(pagination?.pageSize)].map((e, i) => (
          <StyledPlaceholder key={i} />
        ))}
      </Box>
    );
  } else if (rows.length) {
    if (pagination?.pageSize) {
      paginationMt = rowHeight * (pagination?.pageSize - rows.length);
    }
  }
  let ActionBar: ReactElement;
  const actionBarProps: Parameters<typeof DefaultActionBar<T>>[0] = {
    columns,
    columnVisibility,
    density,
    disableMultiFilter,
    filters,
    filterButtonRef,
    heading,
    onChangeColumnVisibility: (v) => setColumnVisibility(v),
    onChangeDensity: (v) => setDensity(v),
    onChangeFilters,
    AdditionalActions,
  };
  if (CustomActionBar) {
    ActionBar = <CustomActionBar {...actionBarProps} />;
  } else {
    ActionBar = <DefaultActionBar {...actionBarProps} />;
  }
  let Pagination: ReactElement | undefined = undefined;
  if (CustomPagination) {
    Pagination = CustomPagination;
  } else if (pagination) {
    Pagination = (
      <DefaultPagination
        css={{ mt: paginationMt }}
        onChangePagination={onChangePagination}
        pageSizeOptions={pageSizeOptions}
        siblingCount={pageSiblingCount}
        {...pagination}
      />
    );
  }
  return (
    <>
      {ActionBar}
      <StyledTable
        {...tableProps}
        css={{
          gridTemplateColumns,
        }}
      >
        <TableHeader
          enableSingleSelect={enableSingleSelect}
          filters={filters}
          filterButtonRef={filterButtonRef}
          getRowId={getRowId}
          onChangeSelected={onChangeSelected}
          onChangeSorts={onChangeSorts}
          padding={padding}
          rows={rows}
          selected={selected}
          sorts={sorts}
          visibleColumns={visibleColumns}
        />
        <TableBody
          columns={columns}
          enableSingleSelect={enableSingleSelect}
          getRowId={getRowId}
          onChangeSelected={onChangeSelected}
          padding={padding}
          rows={rows}
          selected={selected}
          visibleColumns={visibleColumns}
        />
      </StyledTable>
      {altBody}
      {Pagination}
    </>
  );
}
