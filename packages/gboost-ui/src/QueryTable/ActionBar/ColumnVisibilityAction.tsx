import { ChangeEvent, ReactElement, useMemo } from "react";
import { MdViewColumn } from "react-icons/md";
import type { Column } from "../types/column.js";
import { Button, Icon, SwitchField } from "@aws-amplify/ui-react";
import { Box, Dialog } from "../../index.js";
import { Row } from "../types/row.js";

interface ColumnVisibilityActionProps<T extends Row> {
  columns: Column<T>[];
  columnVisibility: Record<string, boolean>;
  onChangeColumnVisibility: (columnVisibility: Record<string, boolean>) => void;
}

export function ColumnVisibilityAction<T extends Row>(
  props: ColumnVisibilityActionProps<T>
): ReactElement {
  const {
    columns,
    columnVisibility,
    onChangeColumnVisibility: handleChangeColumnVisibility,
  } = props;
  const columnIdToName: Record<string, string> = useMemo(
    () =>
      columns.reduce(
        (prev, cur) => ({ ...prev, [cur.id]: cur.headerName }),
        {}
      ),
    [columns]
  );
  return (
    <Dialog
      maxWidth="300px"
      title="Columns"
      trigger={
        <Button size="large">
          <Icon ariaLabel="columns" as={MdViewColumn} />
        </Button>
      }
    >
      <Box css={{ display: "flex", flexDirection: "column" }}>
        {Object.entries(columnVisibility).map(([k, v]) => (
          <SwitchField
            key={k}
            label={columnIdToName[k]}
            labelPosition="end"
            isChecked={v}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeColumnVisibility({
                ...columnVisibility,
                [k]: e.target.checked,
              })
            }
          />
        ))}
      </Box>
    </Dialog>
  );
}
