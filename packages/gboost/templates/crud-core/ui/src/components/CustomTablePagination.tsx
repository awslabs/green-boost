// @ts-nocheck
import {
  Box,
  IconButton,
  TablePagination,
  type TablePaginationProps,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, type ChangeEvent, useCallback } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NextLink from "next/link";

/**
 * Custom Table Pagination for use with MUI Data Grid and Next.js.
 */
export function CustomTablePagination(props: TablePaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = useMemo<number>(
    () => Number(searchParams.get("page")) || 0,
    [searchParams],
  );
  const pageSize = useMemo<number>(
    () => Number(searchParams.get("pageSize")) || 10,
    [searchParams],
  );
  const onRowsPerPageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const urlSearchParams = new URLSearchParams(searchParams.toString());
      const newPageSize = Number(event.target.value) || 10;
      urlSearchParams.set("pageSize", String(newPageSize));
      router.push(`${pathname}?${urlSearchParams.toString()}`);
    },
    [pathname, router, searchParams],
  );
  const nextHref = useMemo<string>(() => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const nextPage = page + 1;
    urlSearchParams.set("page", nextPage.toString());
    return `${pathname}?${urlSearchParams.toString()}`;
  }, [page, pathname, searchParams]);
  const prevHref = useMemo<string>(() => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const prevPage = page - 1;
    urlSearchParams.set("page", prevPage.toString());
    return `${pathname}?${urlSearchParams.toString()}`;
  }, [page, pathname, searchParams]);
  return (
    <TablePagination
      component="div"
      {...props}
      count={-1}
      labelDisplayedRows={(info) =>
        `${info.from} - ${info.from + props.count - 1}`
      }
      page={page}
      onPageChange={() => undefined} // see ActionComponents
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPage={pageSize}
      ActionsComponent={() => (
        <Box display="flex" ml={(t) => t.spacing(1)}>
          <IconButton
            component={NextLink}
            disabled={page === 0}
            href={prevHref}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            component={NextLink}
            href={nextHref}
            disabled={props.count + 1 < pageSize}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      )}
    />
  );
}
