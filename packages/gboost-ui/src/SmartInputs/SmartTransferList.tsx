import { ReactElement } from "react";
import { Placeholder } from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { Box } from "../Box.js";
import {
  defaultListHeight,
  RefTransferList as TransferList,
} from "../TransferList.js";
import type { TransferListProps } from "../TransferList.js";
import { BaseSmartInputProps } from "./baseProps.js";

export interface SmartTransferListProps<T>
  extends BaseSmartInputProps<T>,
    Omit<
      TransferListProps<T>,
      "hasError" | "errorMessage" | "name" | "value" | "onChange"
    > {}

export function SmartTransferList<T extends FieldValues>(
  props: SmartTransferListProps<T>
): ReactElement {
  const { control, label, loading, name, ...transferListProps } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });
  return loading ? (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
      <label className="amplify-label">{label}</label>
      <Placeholder
        height={`calc(${
          transferListProps.listHeight ?? defaultListHeight
        } + 42px)`}
      />
    </Box>
  ) : (
    <TransferList
      {...(transferListProps as Omit<TransferListProps<T>, "label" | "name">)}
      ref={ref}
      label={label}
      errorMessage={error?.message}
      hasError={invalid}
      onChange={onChange}
      value={value}
    />
  );
}
