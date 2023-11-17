import { type ReactElement } from "react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { MultiSelectField, type MultiSelectFieldProps } from "../index.js";
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
export type SmartMultiSelectFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<MultiSelectFieldProps, "name">;
/**
 * @deprecated
 */
export function SmartMultiSelectField<T extends FieldValues>(
  props: SmartMultiSelectFieldProps<T>,
): ReactElement {
  const { control, errorMessage, hasError, name, ...multiSelectFieldProps } =
    props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-selectfield"
      loadingHeight={40}
    >
      <MultiSelectField
        {...normalizeProps(multiSelectFieldProps)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        labelHidden
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={onChange as any}
        value={value}
      />
    </BaseSmartField>
  );
}
