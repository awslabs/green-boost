import { ReactElement } from "react";
import { Placeholder, Radio, RadioGroupField, RadioGroupFieldProps } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Box } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";

interface Option {
  label: string;
  value: string;
}

export interface SmartRadioGroupFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<RadioGroupFieldProps, "name" | "children"> {
      options: Option[];
    }

export function SmartRadioGroupField<T extends FieldValues>(
  props: SmartRadioGroupFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    options,
    name,
    ...radioGroupFieldProps
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
    <RadioGroupField
      {...(radioGroupFieldProps as Omit<RadioGroupFieldProps, "label" | "name">)}
      ref={ref}
      errorMessage={errorMessage || error?.message}
      hasError={hasError || invalid}
      name={name}
      label={label}
      onChange={onChange}
      value={value}
    >
      {options.map((o) => <Radio key={o.value} value={o.value} >{o.label}</Radio>)}
      </RadioGroupField>
  );
}
