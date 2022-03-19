import { ReactElement, RefObject, useMemo } from "react";
import { Heading } from "@aws-amplify/ui-react";
import { Box } from "../../Box.js";
import { Column } from "../QueryTable.js";
import { DownloadAction } from "./DownloadAction.js";
import { FilterAction, InternalFilter } from "./FilterAction/FilterAction.js";
import { ColumnVisibilityAction } from "./ColumnVisibilityAction.js";
import { Density, DensityAction } from "./DensityAction.js";

interface ActionBarProps<T> {
  columns: Column<T>[];
  columnVisibility: Record<string, boolean>;
  density: Density;
  disableMultiFilter: boolean;
  download: boolean;
  downloadFileName: string;
  filters: InternalFilter[];
  filterButtonRef: RefObject<HTMLButtonElement>;
  heading?: string;
  onChangeColumnVisibility: (columnVisibility: Record<string, boolean>) => void;
  onChangeDensity: (density: Density) => void;
  onFilter: (filters: InternalFilter[]) => void;
  rows: Record<string, string>[];
  ActionMenu?: ReactElement;
}

/**
 * @internal
 */
export function ActionBar<T>(props: ActionBarProps<T>): ReactElement {
  const {
    columns,
    columnVisibility,
    density,
    disableMultiFilter,
    download,
    downloadFileName,
    filters,
    filterButtonRef,
    heading,
    onChangeColumnVisibility: handleChangeColumnVisibility,
    onChangeDensity: handleChangeDensity,
    onFilter,
    rows,
    ActionMenu,
  } = props;
  const filterColumns = useMemo(
    () => columns.filter((c) => c.filterOptions),
    [columns]
  );
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-between",
        my: "$2",
        ml: "$1",
      }}
    >
      {heading ? <Heading level={3}>{heading}</Heading> : <Heading />}
      <Box css={{ display: "flex", gap: "$2" }}>
        {filterColumns.length && (
          <FilterAction
            disableMultiFilter={disableMultiFilter}
            filterColumns={filterColumns}
            filters={filters}
            filterButtonRef={filterButtonRef}
            onFilter={onFilter}
          />
        )}
        <ColumnVisibilityAction
          columnVisibility={columnVisibility}
          onChangeColumnVisibility={handleChangeColumnVisibility}
        />
        <DensityAction
          density={density}
          onChangeDensity={handleChangeDensity}
        />
        {download && (
          <DownloadAction downloadFileName={downloadFileName} rows={rows} />
        )}
        {ActionMenu}
      </Box>
    </Box>
  );
}
