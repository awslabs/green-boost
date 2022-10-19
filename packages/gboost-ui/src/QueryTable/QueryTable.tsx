import { ReactElement, useMemo, useRef, useState } from "react";
import { styled } from "../index.js";
import { Pagination as DefaultPagination } from "./Pagination.js";
import { ActionBar as DefaultActionBar } from "./ActionBar/ActionBar.js";
import type { Density } from "./ActionBar/DensityAction.js";
import { TableBody } from "./TableBody.js";
import { QueryTableProps } from "./types/props.js";
import { TableHeader } from "./TableHeader.js";
import { Row } from "./types/row.js";

const StyledTable = styled("div", {
  display: "grid",
  borderCollapse: "collapse",
  minWidth: "100%",
  overflow: "auto", // TODO: why won't responsive scrolling work like
  // this example: https://codepen.io/adam-lynch/pen/XwKWdG
});

const selectColWidth = 50;

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
export function QueryTable<T extends Row>(
  props: QueryTableProps<T>
): ReactElement {
  const {
    columns,
    defaultColumnWidth = "minmax(150px, 1fr)",
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
  const tableRef = useRef<HTMLTableElement>(null);
  const cell = tableRef.current?.children[1]?.children[0]?.children[0] as
    | HTMLTableCellElement
    | undefined;
  const rowHeight = cell?.offsetHeight || 60;
  const gridTemplateColumns = useMemo(() => {
    let gridTempCols = visibleColumns.reduce(
      (prev, cur) => `${prev} ${cur.width || defaultColumnWidth}`,
      ""
    );
    if (selected) gridTempCols = `${selectColWidth}px ` + gridTempCols;
    return gridTempCols;
  }, [defaultColumnWidth, selected, visibleColumns]);
  const padding = densityToPadding[density];

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
        ref={tableRef}
        {...tableProps}
        css={{
          gridTemplateColumns,
        }}
        className="amplify-table"
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
          enableSingleSelect={enableSingleSelect}
          getRowId={getRowId}
          loading={loading}
          onChangeSelected={onChangeSelected}
          padding={padding}
          pageSize={pagination?.pageSize || 10}
          rows={rows}
          rowHeight={rowHeight}
          selected={selected}
          visibleColumns={visibleColumns}
        />
      </StyledTable>
      {AlertMessage}
      {Pagination}
    </>
  );
}
