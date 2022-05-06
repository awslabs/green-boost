import { ReactElement, RefObject, useMemo } from "react";
import { Button, Heading, Icon } from "@aws-amplify/ui-react";
import { Box } from "../../Box.js";
import { Column } from "../QueryTable.js";
import { DownloadAction } from "./DownloadAction.js";
import { FilterAction, InternalFilter } from "./FilterAction/FilterAction.js";
import { ColumnVisibilityAction } from "./ColumnVisibilityAction.js";
import { Density, DensityAction } from "./DensityAction.js";
import { MdRefresh } from "react-icons/md";

interface ActionBarProps<T> {
  columns: Column<T>[];
  columnVisibility: Record<string, boolean>;
  density: Density;
  disableMultiFilter: boolean;
  disableRefresh: boolean;
  download: boolean;
  downloadFileName: string;
  filters: InternalFilter[];
  filterButtonRef: RefObject<HTMLButtonElement>;
  heading?: string;
  onChangeColumnVisibility: (columnVisibility: Record<string, boolean>) => void;
  onChangeDensity: (density: Density) => void;
  onFilter: (filters: InternalFilter[]) => void;
  onRefresh: () => void;
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
    disableRefresh,
    download,
    downloadFileName,
    filters,
    filterButtonRef,
    heading,
    onChangeColumnVisibility: handleChangeColumnVisibility,
    onChangeDensity: handleChangeDensity,
    onFilter,
    onRefresh,
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
        {!disableRefresh && (
          <Button size="large" onClick={onRefresh}>
            <Icon ariaLabel="columns" as={MdRefresh} />
          </Button>
        )}
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
