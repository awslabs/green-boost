import { ReactElement, useCallback, useEffect, useReducer } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableProps,
  Alert,
  Placeholder,
} from "@aws-amplify/ui-react";
import { Box } from "../Box.jsx";
import { Pagination } from "./Pagination.jsx";
import { styled } from "../stitches.config.js";
import { ActionBar } from "./ActionBar/ActionBar.jsx";
import {
  Filter,
  FilterOptions,
  InternalFilter,
} from "./ActionBar/FilterAction/FilterAction.jsx";

const StyledPlaceholder = styled(Placeholder, { height: 55 });
const StyledTableHead = styled(TableHead, { bc: "$primary5" });

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
   * Number of rows per page
   * @default 10
   */
  defaultPageSize?: number;
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
  heading?: string;
  /**
   * Function called to query data from external data source. Params include:
   * nextToken, filterModel, selectionModel, and sortModel. Must return object
   * with rows and nextToken or errorMessage.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onQuery: (params: OnQueryParams) => Promise<OnQueryReturnValue>;
  /**
   * Component placed on top right of table, often used for creating a row or
   * displaying an actions menu button for user to perform actions on selected
   * row
   */
  RightActionBar?: ReactElement;
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

const tableState = {
  filters: [] as InternalFilter[],
  errorMessage: "",
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
  | { type: "changeError"; message: string }
  | { type: "changeLoading"; loading: boolean }
  | { type: "changePage"; page: number }
  | { type: "changePageSize"; pageSize: number }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { type: "changeRows"; rows: Record<string, any>[]; nextNextToken: string }
  | { type: "filter"; filters: InternalFilter[] }
  | { type: "refresh" }
  | { type: "sort"; sorts: Sort[] }
  | { type: "unknown" };

function tableReducer(
  state: typeof tableState,
  action: Action
): typeof tableState {
  switch (action.type) {
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
  defaultPageSize = 10,
  download = false,
  downloadFileName = "data.csv",
  heading,
  onQuery,
  RightActionBar,
  rowIdAccessor = "id",
  tableProps,
}: QueryTableProps): ReactElement {
  let spanTableEl: ReactElement | undefined;
  const [
    {
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
    pageSize: defaultPageSize ?? tableState.pageSize,
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
  const showBody = !errorMessage && !loading;
  return (
    <>
      <ActionBar
        columns={columns}
        download={download}
        downloadFileName={downloadFileName}
        filters={filters}
        heading={heading}
        onFilter={handleFilter}
        rows={rows}
        RightActionBar={RightActionBar}
      />
      <Table {...tableProps}>
        <StyledTableHead>
          <TableRow>
            {columns.map((c, i) => (
              <TableCell key={c.name + i} as="th">
                {c.name}
              </TableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        {showBody && (
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r[rowIdAccessor]} rowSpan={columns.length}>
                {columns.map((c) => (
                  <TableCell key={c.accessor}>
                    {c.renderCell
                      ? c.renderCell(r[c.accessor], r)
                      : r[c.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
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
