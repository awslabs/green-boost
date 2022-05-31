import { ReactElement } from "react";
import {
  Placeholder,
  SelectField,
  SelectFieldProps,
} from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { Box } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";

export interface SmartSelectFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<SelectFieldProps, "name"> {
  children: ReactElement | ReactElement[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SmartSelectField<T extends FieldValues>(
  props: SmartSelectFieldProps<T>
): ReactElement {
  const {
    children,
    errorMessage,
    hasError,
    control,
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
      <Placeholder height={50} />
    </Box>
  ) : (
    <SelectField
      {...(textFieldProps as Omit<SelectFieldProps, "label" | "name">)}
      ref={ref}
      errorMessage={errorMessage || error?.message}
      hasError={hasError || invalid}
      name={name}
      label={label}
      onChange={onChange}
      value={value}
    >
      {children}
    </SelectField>
  );
}
