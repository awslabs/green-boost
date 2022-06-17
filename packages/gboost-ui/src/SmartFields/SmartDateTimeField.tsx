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

export interface SmartDateTimeFieldProps<T>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<TextFieldProps, "name"> {}

export function SmartDateTimeField<T extends FieldValues>(
  props: SmartDateTimeFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    name,
    ...dateTimeFieldProps
  } = props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      descriptiveText="Click calendar icon for date/time picker"
      className="amplify-textfield"
      id={id}
      loadingHeight={40}
    >
      <TextField
        {...(dateTimeFieldProps as Omit<TextFieldProps, "label" | "name">)}
        id={id}
        type="datetime-local"
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
