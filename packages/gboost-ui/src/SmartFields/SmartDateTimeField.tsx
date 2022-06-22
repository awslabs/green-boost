import { ReactElement } from "react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { ControlProps } from "./common.js";
import { DateTimeField, DateTimeFieldProps } from "../index.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export interface SmartDateTimeFieldProps<T>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<DateTimeFieldProps, "name"> {}

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
  let pickerType: string = props.type || "datetime-local";
  pickerType = pickerType.replace("-local", "");
  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      descriptiveText={`Click calendar icon for ${pickerType} picker`}
      className="amplify-textfield"
      id={id}
      loadingHeight={40}
    >
      <DateTimeField
        {...(dateTimeFieldProps as Omit<DateTimeFieldProps, "label" | "name">)}
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