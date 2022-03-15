import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import {
  Alert,
  Placeholder,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableProps,
} from "@aws-amplify/ui-react";
import { randomId } from "@mantine/hooks";
import { Box } from "../Box.js";
import { Pagination } from "./Pagination.js";
import { styled } from "../stitches.config.js";
import { ActionBar } from "./ActionBar/ActionBar.js";
import {
  Filter,
  FilterOptions,
  InternalFilter,
} from "./ActionBar/FilterAction/FilterAction.js";
import type { Density } from "./ActionBar/DensityAction.js";
import { TableHeaderCell } from "./TableHeaderCell.js";
import { useRef } from "react";

const StyledPlaceholder = styled(Placeholder, { height: 55 });
const StyledTable = styled(Table, { display: "grid" });
// https://adamlynch.com/flexible-data-tables-with-css-grid/
const StyledTableHead = styled(TableHead, {
  display: "contents !important",
});
const StyledTableBody = styled(TableBody, { display: "contents !important" });
const StyledTableRow = styled(TableRow, { display: "contents !important" });
const StyledTableCell = styled(TableCell, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Row = any;
export interface Column {
  accessor: string;
  filterOptions?: FilterOptions;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderCell?: (value: any, row: Row) => ReactElement | string;
  /**
   * @default false
   */
  sortable?: boolean;
  /**
   * Defines max argument in grid-template-columns property
   * minmax(150px, insert-width)
   * @example "20%"
   * @example "400px"
   * @default "1fr"
   */
  width?: string;
}
export interface Sort {
  column: string;
  direction: "asc" | "desc";
}
export interface OnQueryParams {
  filters: Filter[];
  nextToken: string;
  pageSize: number;
  sorts: Sort[];
}
type OnQuerySuccessReturnValue = {
  rows: Row[];
  nextToken: string;
};
type OnQueryErrorReturnValue = {
  errorMessage: string;
};
export type OnQueryReturnValue =
  | OnQuerySuccessReturnValue
  | OnQueryErrorReturnValue;
interface QueryTableProps {
  columns: Column[];
  /**
   * @default false
   */
  disableMultiSort?: boolean;
  /**
   * @default false
   */
  disableMultiFilter?: boolean;
  /**
   * Enable CSV file download
   * @default false
   */
  download?: boolean;
  /**
   * If download enabled, sets file name
   * @default "data.csv"
   */
  downloadFileName?: string;
  /**
   * @default "$primary5"
   */
  headerBackgroundColor?: string;
  /**
   * Title of table
   */
  heading?: string;
  /**
   * Default padding in table cells
   * @default "standard"
   */
  initDensity?: Density;
  /**
   * Initial filters. Columns must have filterable: true
   */
  initFilters?: Filter[];
  /**
   * Number of rows per page
   * @default 10
   */
  initPageSize?: number;
  /**
   * Initial sorts. Columns must have sortable: true in definition
   */
  initSorts?: Sort[];
  /**
   * Function called to query data from external data source. Params include:
   * nextToken, filterModel, selectionModel, and sortModel. Must return object
   * with rows and nextToken or errorMessage.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onQuery: (params: OnQueryParams) => Promise<OnQueryReturnValue>;
  /**
   * Action Menu Component placed on top right of table, often used for creating a row or
   * displaying an actions menu button for user to perform actions on selected
   * row
   */
  ActionMenu?: ReactElement;
  /**
   * Provides key for each row
   * @default "id"
   */
  rowIdAccessor?: string;
  /**
   * Amplify UI TableProps to be passes to the table
   */
  tableProps?: TableProps;
}

const densityToPadding: Record<Density, string> = {
  cozy: ".5rem !important",
  standard: "1rem !important",
  comfy: "1.5rem !important",
};

const tableState = {
  columnVisibility: {} as Record<string, boolean>,
  density: "standard" as Density,
  errorMessage: "",
  filters: [] as InternalFilter[],
  loading: false,
  nextToken: "",
  nextNextToken: "",
  page: 1,
  pageSize: 10,
  pageSizeOptions: [10, 20, 50],
  prevTokens: [] as string[],
  rows: [] as Row[],
  sorts: [] as Sort[],
};

type Action =
  | {
      type: "changeColumnVisibility";
      columnVisibility: Record<string, boolean>;
    }
  | { type: "changeDensity"; density: Density }
  | { type: "changeError"; message: string }
  | { type: "changeLoading"; loading: boolean }
  | { type: "changePage"; page: number }
  | { type: "changePageSize"; pageSize: number }
  | { type: "changeRows"; rows: Row[]; nextNextToken: string }
  | { type: "filter"; filters: InternalFilter[] }
  | { type: "refresh" }
  | { type: "sort"; sorts: Sort[] }
  | { type: "unknown" };

function tableReducer(
  state: typeof tableState,
  action: Action
): typeof tableState {
  switch (action.type) {
    case "changeColumnVisibility":
      return { ...state, columnVisibility: action.columnVisibility };
    case "changeDensity":
      return { ...state, density: action.density };
    case "changeError":
      return { ...state, loading: false, errorMessage: action.message };
    case "changeLoading":
      return { ...state, loading: action.loading, errorMessage: "" };
    case "changePage":
      let nextToken = state.nextToken;
      let prevTokens = state.prevTokens;
      if (action.page > state.page) {
        // next page
        nextToken = state.nextNextToken;
        // if (state.nextToken) {
        // prevents empty string being added for first page
        prevTokens = [...state.prevTokens, state.nextToken];
        // }
      } else if (action.page < state.page) {
        // action.page / state.page are 1-based
        // indexing on state.prevTokens is 0-based
        nextToken = state.prevTokens[action.page - 1];
        prevTokens = state.prevTokens.slice(0, action.page - 1);
      }
      return {
        ...state,
        nextToken,
        prevTokens,
        page: action.page,
      };
    case "changePageSize": // reset currentToken, nextToken, prevTokens
      return {
        ...state,
        nextToken: "",
        nextNextToken: "",
        pageSize: action.pageSize,
        prevTokens: [],
      };
    case "changeRows":
      return {
        ...state,
        rows: action.rows,
        nextNextToken: action.nextNextToken,
        loading: false,
      };
    case "filter":
      return { ...state, filters: action.filters };
    case "refresh":
      // trigger useEffect to run again
      return { ...state, filters: [...state.filters] };
    case "sort":
      return { ...state, sorts: action.sorts };
    default:
      throw new Error(`Unknown action ${action.type as string}`);
  }
}
const defaultErrorMessage = "Something went wrong";

/**
 * Table component with powerful onQuery prop useful for server side or client
 * side pagination. First class token pagination support with page number
 * pagination also supported. Features filtering, sorting, and custom column
 * widths through columns prop.
 * @component Component
 */
export function QueryTable({
  columns,
  disableMultiSort = false,
  disableMultiFilter = false,
  download = false,
  downloadFileName = "data.csv",
  headerBackgroundColor = "$primary5",
  initDensity = "standard",
  initFilters = [],
  initPageSize = 10,
  initSorts = [],
  heading,
  onQuery,
  ActionMenu,
  rowIdAccessor = "id",
  tableProps,
}: QueryTableProps): ReactElement {
  let spanTableEl: ReactElement | undefined;
  const [
    {
      columnVisibility,
      density,
      errorMessage,
      filters,
      loading,
      nextToken,
      nextNextToken,
      page,
      pageSize,
      pageSizeOptions,
      prevTokens,
      rows,
      sorts,
    },
    dispatch,
  ] = useReducer(tableReducer, {
    ...tableState,
    columnVisibility: columns.reduce(
      (prev, cur) => ({ ...prev, [cur.name]: true }),
      {}
    ),
    density: initDensity,
    filters: initFilters.map((f) => ({ ...f, id: randomId() })),
    pageSize: initPageSize,
    sorts: initSorts,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "changeLoading", loading: true });
        const externalFilters = filters.map((f) => {
          const { id, ...externalFilter } = f;
          return externalFilter;
        });
        const res = await onQuery({
          filters: externalFilters,
          nextToken,
          pageSize,
          sorts,
        });
        if ("rows" in res) {
          dispatch({
            type: "changeRows",
            nextNextToken: res.nextToken,
            rows: res.rows,
          });
        } else {
          dispatch({
            type: "changeError",
            message: res.errorMessage || defaultErrorMessage,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({ type: "changeError", message: defaultErrorMessage });
      }
    }
    fetchData();
  }, [filters, nextToken, onQuery, pageSize, sorts]);
  const handlePageChange = useCallback(async (newPage: number) => {
    dispatch({ type: "changePage", page: newPage });
  }, []);
  const handlePageSizeChange = useCallback((newPageSize: number) => {
    dispatch({ type: "changePageSize", pageSize: newPageSize });
  }, []);
  if (errorMessage) {
    spanTableEl = <Alert variation="error">{errorMessage}</Alert>;
  } else if (loading) {
    spanTableEl = (
      <Box
        css={{ display: "flex", gap: "$1", flexDirection: "column", my: "$2" }}
      >
        {[...Array(10)].map((e, i) => (
          <StyledPlaceholder key={i} />
        ))}
      </Box>
    );
  }
  const handleFilter = useCallback((newFilters: InternalFilter[]) => {
    dispatch({ type: "filter", filters: newFilters });
  }, []);
  const handleCreateSort = useCallback(
    (sort) =>
      dispatch({
        type: "sort",
        sorts: disableMultiSort ? [...sorts, sort] : [sort],
      }),
    [disableMultiSort, sorts]
  );
  const handleUpdateSort = useCallback(
    (column: string, direction: "asc" | "desc") => {
      const newSorts: Sort[] = [];
      for (const s of sorts) {
        if (s.column === column) {
          newSorts.push({ column, direction });
        } else {
          newSorts.push(s);
        }
      }
      dispatch({ type: "sort", sorts: newSorts });
    },
    [sorts]
  );
  const handleRemoveSort = useCallback(
    (column: string) => {
      dispatch({
        type: "sort",
        sorts: sorts.filter((s) => s.column !== column),
      });
    },
    [sorts]
  );
  const visibleColumns = useMemo(
    () => columns.filter((c) => columnVisibility[c.name]),
    [columns, columnVisibility]
  );
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const getGridTemplateColumns = useCallback(
    (columns: Column[]): string => {
      return visibleColumns.reduce(
        (prev, cur) => `${prev} minmax(150px, ${cur.width || "1fr"})`,
        ""
      );
    },
    [visibleColumns]
  );
  const showBody = !errorMessage && !loading;
  const padding = densityToPadding[density];
  return (
    <>
      <ActionBar
        columns={columns}
        columnVisibility={columnVisibility}
        density={density}
        disableMultiFilter={disableMultiFilter}
        download={download}
        downloadFileName={downloadFileName}
        filters={filters}
        filterButtonRef={filterButtonRef}
        heading={heading}
        onChangeColumnVisibility={(columnVisibility: Record<string, boolean>) =>
          dispatch({ type: "changeColumnVisibility", columnVisibility })
        }
        onChangeDensity={(density) =>
          dispatch({ type: "changeDensity", density })
        }
        onFilter={handleFilter}
        rows={rows}
        ActionMenu={ActionMenu}
      />
      <StyledTable
        {...tableProps}
        css={{ gridTemplateColumns: getGridTemplateColumns(columns) }}
      >
        <StyledTableHead>
          <StyledTableRow>
            {visibleColumns.map((c, i) => (
              <TableHeaderCell
                key={c.accessor}
                activeFilter={filters.some((f) => f.column === c.accessor)}
                backgroundColor={headerBackgroundColor}
                column={c}
                filterButtonRef={filterButtonRef}
                onCreateSort={handleCreateSort}
                onUpdateSort={handleUpdateSort}
                onRemoveSort={handleRemoveSort}
                padding={padding}
                sort={sorts.find((s) => s.column === c.accessor)}
              />
            ))}
          </StyledTableRow>
        </StyledTableHead>
        {showBody && (
          <StyledTableBody>
            {rows.map((r) => (
              <StyledTableRow key={r[rowIdAccessor]} rowSpan={columns.length}>
                {visibleColumns.map((c) => (
                  <StyledTableCell key={c.accessor} css={{ padding }}>
                    {c.renderCell
                      ? c.renderCell(r[c.accessor], r)
                      : r[c.accessor]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </StyledTableBody>
        )}
      </StyledTable>
      {spanTableEl}
      <Pagination
        disableNext={!nextNextToken}
        disablePrev={!prevTokens.length}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        page={page}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
      />
    </>
  );
}
