import { FetchNextPageOptions, InfiniteData } from "@tanstack/react-query";
import { Pagination } from "gboost-ui";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";

interface ListResult<T> {
  items: T[];
}

interface UseInfiniteQueryProps<T> {
  data: InfiniteData<ListResult<T>> | undefined;
  fetchNextPage: (params: FetchNextPageOptions) => Promise<unknown>;
  hasNextPage?: boolean | undefined;
  pagination: Pagination;
  setPagination: Dispatch<SetStateAction<Pagination>>;
}

/**
 * Transforms @tanstack/react-query's `useInfiniteQuery` result into
 * `onChangePagination`, `pagination`, and `rows` for gboost-ui's `QueryTable`
 */
export function useInfiniteQueryPagination<T>(props: UseInfiniteQueryProps<T>) {
  const { data, fetchNextPage, hasNextPage, pagination, setPagination } = props;
  const qtPagination: Pagination = useMemo(() => {
    const pageParams = data?.pageParams as number[];
    const set = new Set<number>(pageParams);
    return { ...pagination, hasMorePages: hasNextPage, totalPages: set.size };
  }, [hasNextPage, pagination, data?.pageParams]);
  const page = data?.pages[pagination.currentPage - 1];
  const items = page?.items;

  const onChangePagination = useCallback(
    (newPagination: Pagination) => {
      const nextCursor = data?.pageParams[newPagination.currentPage - 1] as
        | number
        | undefined;
      fetchNextPage({ pageParam: nextCursor });
      setPagination(newPagination);
    },
    [data, fetchNextPage, setPagination]
  );

  return { rows: items, onChangePagination, pagination: qtPagination };
}
