import { ReactElement } from "react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { MultiSelectField, MultiSelectFieldProps } from "../index.js";
import { ControlProps, normalizeProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export type SmartMultiSelectFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<MultiSelectFieldProps, "name">;

export function SmartMultiSelectField<T extends FieldValues>(
  props: SmartMultiSelectFieldProps<T>
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
        onChange={onChange as any}
        value={value}
      />
    </BaseSmartField>
  );
}
