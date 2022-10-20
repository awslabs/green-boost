import { ReactElement } from "react";
import { CheckboxField, CheckboxFieldProps } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { ControlProps, normalizeProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export type SmartCheckboxFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<CheckboxFieldProps, "name" | "children">;

export function SmartCheckboxField<T extends FieldValues>(
  props: SmartCheckboxFieldProps<T>
): ReactElement {
  const id = useId();
  const { control, errorMessage, hasError, name, ...checkboxFieldProps } =
    props;
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
        {...normalizeProps(checkboxFieldProps)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        labelHidden
        name={name}
        onChange={onChange}
        value={value}
      />
    </BaseSmartField>
  );
}
