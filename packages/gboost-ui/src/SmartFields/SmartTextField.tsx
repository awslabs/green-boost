import { ReactElement } from "react";
import { TextField, TextFieldProps } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { ControlProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export interface SmartTextFieldProps<T>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<TextFieldProps, "name"> {}

export function SmartTextField<T extends FieldValues>(
  props: SmartTextFieldProps<T>
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
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-textfield"
    >
      <TextField
        {...(textFieldProps as Omit<TextFieldProps, "label" | "name">)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        label={label}
        labelHidden
        onChange={onChange}
        value={value}
      />
    </BaseSmartField>
  );
}
