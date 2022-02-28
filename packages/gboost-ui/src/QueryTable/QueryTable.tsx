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
import { ActionBar, FilterOptions } from "./ActionBar.jsx";

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
export interface Filter {
  column: string;
  comparator: string;
  value: string;
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
export interface OnQueryReturnValue {
  rows?: Row[];
  nextToken?: string;
  errorMessage?: string;
}
interface QueryTableProps {
  columns: Column[];
  /**
   * @default 10
   */
  defaultPageSize?: number;
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
  tableProps?: TableProps;
}

const tableState = {
  filters: [] as Filter[],
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
  | { type: "filter"; filters: Filter[] }
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
        if (state.nextToken) {
          // prevents empty string being added for first page
          prevTokens = [...state.prevTokens, state.nextToken];
        }
      } else if (action.page < state.page) {
        // previous page (could jump back multiple)
        nextToken = state.prevTokens[action.page - 2];
        prevTokens = state.prevTokens.slice(0, action.page - 2);
      }
      return {
        ...state,
        nextToken,
        prevTokens,
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

export function QueryTable(props: QueryTableProps): ReactElement {
  const {
    columns,
    defaultPageSize = 10,
    onQuery,
    RightActionBar,
    rowIdAccessor = "id",
    tableProps,
  } = props;
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
        const res = await onQuery({ filters, nextToken, pageSize, sorts });
        if (res.rows && res.nextToken) {
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
  const handleFilter = useCallback((newFilters: Filter[]) => {
    dispatch({ type: "filter", filters: newFilters });
  }, []);
  const showBody = !errorMessage && !loading;
  return (
    <>
      <ActionBar
        columns={columns}
        filters={filters}
        onFilter={handleFilter}
        RightActionBar={RightActionBar}
      />
      <Table {...tableProps}>
        <StyledTableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell key={c.accessor} as="th">
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
