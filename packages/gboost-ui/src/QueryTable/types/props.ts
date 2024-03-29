import type { ReactElement, ReactNode } from "react";
import type { TableProps } from "@aws-amplify/ui-react";
import { type Filter } from "./filter.js";
import type { Density } from "../ActionBar/DensityAction.js";
import { type Pagination } from "../types/pagination.js";
import { type Column } from "./column.js";
import { type Sort } from "./sort.js";
import { type OnChangeSelectedParams } from "./selected.js";
import { ActionBar } from "../ActionBar/ActionBar.js";
import { type Row } from "./row.js";
/**
 * @deprecated
 */
export interface QueryTableProps<T extends Row> {
  /**
   * Background loading. Shows `Loader` below table header when true
   */
  bgLoading?: boolean;
  /**
   * Column definitions
   */
  columns: Column<T>[];
  /**
   * Disable user providing multiple filters
   * @default false
   */
  disableMultiFilter?: boolean;
  /**
   * Default column width
   * @default "minmax(150px, 1fr)"
   */
  defaultColumnWidth?: string;
  /**
   * Use radio buttons instead of checkboxes for selection. Enabling single
   * select will causes the table to only display the first row in the
   * `selection` array as selected.
   * @default false
   */
  enableSingleSelect?: boolean;
  /**
   * To disable filters, exclude `filters` from passed props. To enable single
   * filter, replace the 0th element in your filter array for each `onFilter`
   * callback. To enable multi-filters, push to your filter array for each
   * `onFilter` callback, but make sure to spread a new array into your state
   * to trigger calling your query function again
   * @default undefined
   */
  filters?: Filter[];
  /**
   * Function to get id for reach row
   * @default (r) => r.id
   */
  getRowId?: (r: T) => string;
  /**
   * Title of table
   */
  heading?: ReactNode;
  /**
   * Record with keys being column ids. Default show all columns
   * @default `columns.reduce((prev, cur) => ({ ...prev, [cur.id]: true }), {})`
   */
  initColumnVisibility?: Record<string, boolean>;
  /**
   * Default padding in table cells
   * @default "standard"
   */
  initDensity?: Density;
  /**
   * When true, replaces rows with `Placeholder` components
   * @default false
   */
  loading?: boolean;
  /**
   * Pagination state. When `undefined`, hides pagination
   * @default undefined
   */
  pagination?: Pagination;
  onChangeFilters?: (filters: Filter[]) => void;
  onChangePagination?: (pagination: Pagination) => void;
  /**
   * Function called upon update to selected rows
   * @param action determines whether user selected or unselected
   * @param allSelectedRows resulting selection based on user action
   * @param actionRow row user selected or unselected. `undefined` if selecting
   * or unselecting all rows
   */
  onChangeSelected?: (selection: OnChangeSelectedParams<T>) => void;
  onChangeSorts?: (sorts: Sort[]) => void;
  /**
   * Controls the number of pages displayed on each side of the current page
   *
   * @default 1
   * @link https://ui.docs.amplify.aws/react/components/pagination#sibling-count
   */
  pageSiblingCount?: number;
  /**
   * Options for page sizes.
   * @default [10, 20, 50]
   */
  pageSizeOptions?: number[];
  /**
   * If supplied, will show refresh button in ActionBar which when clicked will
   * call this function
   */
  refreshFn?: () => unknown;
  /**
   * Rows of table. If undefined and you'd like to display a "no data" message,
   * use `AlertMessage` prop
   */
  rows?: T[];
  /**
   * Selected rows.
   */
  selected?: T[];
  /**
   * Array of sort models. When `undefined`, sorting is disabled. Control single
   * or multi-sorting via `onChangeSorts` prop
   */
  sorts?: Sort[];
  /**
   * Amplify UI TableProps
   */
  tableProps?: TableProps;
  /**
   * Custom ActionBar to override default ActionBar
   */
  ActionBar?: typeof ActionBar;
  /**
   * Additional actions that are placed to the right of default actions (if not
   * disabled). Potential use case could be an "Actions" menu button - think
   * EC2 instances table. Or a refresh button.
   */
  AdditionalActions?: ReactElement;
  /**
   * Alert message to display instead of data rows. Possible use cases include:
   * error message or no data message
   */
  AlertMessage?: ReactElement;
  /**
   * Custom component to replace default Pagination Component
   */
  Pagination?: ReactElement;
}
