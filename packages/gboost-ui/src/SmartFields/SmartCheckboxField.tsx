import { ReactElement } from "react";
import { CheckboxField, CheckboxFieldProps } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { ControlProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export interface SmartCheckboxFieldProps<T>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<CheckboxFieldProps, "name" | "children"> {}

export function SmartCheckboxField<T extends FieldValues>(
  props: SmartCheckboxFieldProps<T>
): ReactElement {
  const id = useId();
  const {
    control,
    errorMessage,
    hasError,
    label,
    name,
    ...checkboxFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-checkboxfield"
      loadingHeight={32}
    >
      <CheckboxField
        {...(checkboxFieldProps as Omit<CheckboxFieldProps, "label" | "name">)}
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
