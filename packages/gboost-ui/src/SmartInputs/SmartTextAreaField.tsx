import { ReactElement } from "react";
import {
  Placeholder,
  TextAreaField,
  TextAreaFieldProps,
} from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { Box } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";

export interface SmartTextAreaFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<TextAreaFieldProps, "name"> {}

export function SmartTextAreaField<T extends FieldValues>(
  props: SmartTextAreaFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    name,
    ...textFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController<T>({ name, control });
  return loading ? (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
      <label className="amplify-label">{label}</label>
      <Placeholder height={103} />
    </Box>
  ) : (
    <TextAreaField
      {...(textFieldProps as Omit<TextAreaFieldProps, "label" | "name">)}
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
