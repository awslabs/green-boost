import { ReactElement } from "react";
import { Placeholder } from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { Box } from "../Box.js";
import { defaultListHeight, TransferList } from "../TransferList.js";
import type { TransferListProps } from "../TransferList.js";
import { BaseSmartInputProps } from "./baseProps.js";

export interface SmartTransferListProps<T, U>
  extends BaseSmartInputProps<T>,
    Omit<TransferListProps<U>, "name" | "value" | "onChange"> {}

/**
 * Smart Transfer List - first generic type is react-hook-form type,
 * and second type is item of the transfer list. For example, the first type
 * generic is the type of your form input which could be input for a user and include
 * roleIds and the second type parameter could be the Role interface which user
 * will be selecting but only roleIds are returned for user form input
 */
export function SmartTransferList<T extends FieldValues, U>(
  props: SmartTransferListProps<T, U>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    name,
    ...transferListProps
  } = props;
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
      {...(transferListProps as Omit<TransferListProps<U>, "label" | "name">)}
      ref={ref}
      label={label}
      errorMessage={errorMessage || error?.message}
      hasError={hasError || invalid}
      onChange={onChange}
      value={value}
    />
  );
}
