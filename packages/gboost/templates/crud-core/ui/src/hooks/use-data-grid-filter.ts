// @ts-nocheck
import type { GridFilterModel, DataGridProps } from "@mui/x-data-grid";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCallback,
  type TransitionStartFunction,
  useState,
  useEffect,
} from "react";

const filterFieldName = "filterField";
const filterOperatorName = "filterOperator";
const filterValueName = "filterValue";

interface UseDataGridFilterProps {
  baseUri: string;
  initialFilterModel?: GridFilterModel;
  startTransition: TransitionStartFunction;
}

/**
 * Server side filter hook for MUI `DataGrid` with Next.js. Only support single
 * filter. Handles syncing `filterModel` with url search params. Returns
 * filter props for `DataGrid`.
 */
export function useDataGridFilter(
  props: UseDataGridFilterProps,
): Pick<DataGridProps, "filterModel" | "onFilterModelChange" | "filterMode"> {
  const { baseUri, initialFilterModel, startTransition } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    initialFilterModel ?? { items: [] },
  );
  const onFilterModelChange = useCallback(
    (model: GridFilterModel) => {
      const newUrlSearchParams = new URLSearchParams(searchParams.toString());
      // delete old filter params
      newUrlSearchParams.delete(filterFieldName);
      newUrlSearchParams.delete(filterOperatorName);
      newUrlSearchParams.delete(filterValueName);
      // delete old page b/c we should reset pagination when changing filter
      newUrlSearchParams.delete("page");
      // add new filter params
      const [filterModel] = model.items;
      const { field, operator, value } = filterModel ?? {};
      if (field && operator) {
        // need to update filter model even if value is undefined for
        // intermediate step where user has selected field and operator and is
        // about to select/input value
        setFilterModel({ items: [{ field, operator, value }] });
        if (value) {
          // only set query string parameters when value is set
          newUrlSearchParams.set(filterFieldName, encodeURIComponent(field));
          newUrlSearchParams.set(
            filterOperatorName,
            encodeURIComponent(operator),
          );
          newUrlSearchParams.set(filterValueName, encodeURIComponent(value));
          startTransition(() => {
            router.replace(`${baseUri}?${newUrlSearchParams.toString()}`);
          });
        }
      }
      if (!model.items.length) {
        // reset filter search params
        startTransition(() => {
          router.replace(`${baseUri}?${newUrlSearchParams.toString()}`);
        });
      }
    },
    [baseUri, router, searchParams, startTransition],
  );
  // purpose of this effect is to sync filter model with search params
  useEffect(() => {
    const field = searchParams.get(filterFieldName);
    const operator = searchParams.get(filterOperatorName);
    const value = searchParams.get(filterValueName);
    if (field && operator && value) {
      setFilterModel({
        items: [
          {
            field: decodeURIComponent(field),
            operator: decodeURIComponent(operator),
            value: decodeURIComponent(value),
          },
        ],
      });
    } else {
      setFilterModel({ items: [] });
    }
  }, [searchParams]);
  return { filterModel, onFilterModelChange, filterMode: "server" };
}
