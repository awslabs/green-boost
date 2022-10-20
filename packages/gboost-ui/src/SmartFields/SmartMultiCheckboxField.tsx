import { ReactElement } from "react";
import { MultiCheckboxField, MultiCheckboxFieldProps } from "../index.js";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { ControlProps, normalizeProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export type SmartMultiCheckboxFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<MultiCheckboxFieldProps, "name" | "children">;

export function SmartMultiCheckboxField<T extends FieldValues>(
  props: SmartMultiCheckboxFieldProps<T>
): ReactElement {
  const id = useId();
  const { control, errorMessage, hasError, name, ...checkboxFieldProps } =
    props;
  const {
    field: { onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-checkboxfield"
      loadingHeight={32}
    >
      <MultiCheckboxField
        {...normalizeProps(checkboxFieldProps)}
        id={id}
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
