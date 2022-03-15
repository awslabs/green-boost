import { ReactElement } from "react";
import { Placeholder, TextField, TextFieldProps } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Box } from "../Box.js";
import { BaseSmartInputProps } from "./baseProps.js";

export interface SmartTextFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<TextFieldProps<false>, "hasError" | "errorMessage" | "name"> {}

export function SmartTextField<T extends FieldValues>(
  props: SmartTextFieldProps<T>
): ReactElement {
  const { control, label, loading, name, ...textFieldProps } = props;
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
    <TextField
      {...(textFieldProps as Omit<TextFieldProps<false>, "label" | "name">)}
      ref={ref}
      errorMessage={error?.message}
      hasError={invalid}
      name={name}
      label={label}
      onChange={onChange}
      value={value}
    />
  );
}
