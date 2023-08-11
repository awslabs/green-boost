import { type ReactElement } from "react";
import { MultiCheckboxField, type MultiCheckboxFieldProps } from "../index.js";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { type ControlProps, normalizeProps } from "./common.js";
import {
  BaseSmartField,
  type ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";
/**
 * @deprecated
 */
export type SmartMultiCheckboxFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<MultiCheckboxFieldProps, "name" | "children">;
/**
 * @deprecated
 */
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={onChange as any}
        value={value}
      />
    </BaseSmartField>
  );
}
