// @ts-nocheck
import type { DataGridProps, GridSortModel } from "@mui/x-data-grid";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCallback,
  type TransitionStartFunction,
  useState,
  useEffect,
} from "react";

const sortFieldName = "sortField";
const sortDirectionName = "sortDirection";

interface UseDataGridSortProps {
  baseUri: string;
  initialSortModel?: GridSortModel;
  startTransition: TransitionStartFunction;
}

/**
 * Server side sorting hook for MUI `DataGrid` with Next.js. Only support single
 * sort. Syncs sort model with url search params. Returns sort props for `DataGrid`.
 */
export function useDataGridSort(
  props: UseDataGridSortProps,
): Pick<DataGridProps, "sortModel" | "onSortModelChange"> {
  const { baseUri, initialSortModel, startTransition } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortModel, setSortModel] = useState<GridSortModel>(
    initialSortModel ?? [],
  );
  const onSortModelChange = useCallback(
    (model: GridSortModel) => {
      const newUrlSearchParams = new URLSearchParams(searchParams.toString());
      // delete old sort params
      newUrlSearchParams.delete(sortFieldName);
      newUrlSearchParams.delete(sortDirectionName);
      // delete old page b/c we should reset pagination when changing sort
      newUrlSearchParams.delete("page");
      // add new sort params
      const [sortModel] = model;
      const { field, sort: direction } = sortModel ?? {};
      if (field && direction) {
        newUrlSearchParams.set(sortFieldName, encodeURIComponent(field));
        newUrlSearchParams.set(
          sortDirectionName,
          encodeURIComponent(direction),
        );
        setSortModel([{ field, sort: direction }]);
        startTransition(() => {
          router.replace(`${baseUri}?${newUrlSearchParams.toString()}`);
        });
      }
      if (!model.length) {
        // reset sort search params
        startTransition(() => {
          router.replace(`${baseUri}?${newUrlSearchParams.toString()}`);
        });
      }
    },
    [baseUri, router, searchParams, startTransition],
  );
  // purpose of this effect is to sync sort model with search params
  useEffect(() => {
    const field = searchParams.get(sortFieldName);
    const direction = searchParams.get(sortDirectionName);
    if (field && (direction === "asc" || direction === "desc")) {
      setSortModel([{ field: decodeURIComponent(field), sort: direction }]);
    } else {
      setSortModel([]);
    }
  }, [searchParams]);
  return { onSortModelChange, sortModel };
}
