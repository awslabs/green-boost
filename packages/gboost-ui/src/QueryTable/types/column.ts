import { ReactElement } from "react";
import { FilterOptions } from "./filter.js";

export interface Column<T extends Record<string, any>> {
  /**
   * Must be unique for all columns. Will be used to access your row's object's
   * value or can be any unique string as a display column. If `id` is not a
   * key of your row's object, then you need to provide `renderCell`.
   */
  id: keyof T | string;
  filterOptions?: FilterOptions;
  /**
   * Display header name per column
   */
  headerName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderCell?: (value: any, row: T) => ReactElement | string;
  /**
   * @default false
   */
  sortable?: boolean;
  /**
   * Defines max argument in grid-template-columns property
   * minmax(150px, insert-width)
   * @example "0px"
   * @example "20%"
   * @example "400px"
   * @default "minmax(150px, 1fr)"
   */
  width?: string;
}
