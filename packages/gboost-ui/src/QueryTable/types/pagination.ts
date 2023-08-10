/**
 * Pagination state for `QueryTable`
 *
 * @link https://ui.docs.amplify.aws/react/components/pagination
 * @deprecated
 */
export interface Pagination {
  /**
   * Number of rows per page
   */
  pageSize: number;
  /**
   * Total number of pages. If unknown (like DDB), just use 1 initially
   * and then as the user pages through data, keep track of previous tokens
   * increasing totalPages
   */
  totalPages: number;
  /**
   * Current page index. Starts from 1
   */
  currentPage: number;
  /**
   * Set to true if you don't know the totalPages but know there is still more
   * data to pull (like in DDB if there is a next token
   *
   * @link https://ui.docs.amplify.aws/react/components/pagination#paginating-at-an-api-level
   */
  hasMorePages?: boolean;
}
