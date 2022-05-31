import { ReactElement } from "react";
import { Placeholder } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Box } from "../Box.js";
import { BaseSmartInputProps } from "./baseProps.js";
import {
  MultiSelectField,
  MultiSelectFieldProps,
} from "../MultiSelectField.js";

export interface SmartMultiSelectFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<MultiSelectFieldProps, "name"> {}

export function SmartMultiSelectField<T extends FieldValues>(
  props: SmartMultiSelectFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    name,
    ...multiSelectFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });
  return loading ? (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
      <label className="amplify-label">{label}</label>
      <Placeholder height={40} />
    </Box>
  ) : (
    <MultiSelectField
      {...(multiSelectFieldProps as Omit<
        MultiSelectFieldProps,
        "label" | "name"
      >)}
      ref={ref}
      errorMessage={errorMessage || error?.message}
      hasError={hasError || invalid}
      name={name}
      label={label}
      onChange={onChange}
      value={value}
    />
  );
}
