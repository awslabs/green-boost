import { type ChangeEventHandler, type ReactElement, useCallback } from "react";
import { type ControlProps, normalizeProps } from "./common.js";
import { FileUploadField, type FileUploadFieldProps } from "../index.js";
import {
  BaseSmartField,
  type ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";
import { type FieldValues, useController } from "react-hook-form";
/**
 * @deprecated
 */
export type SmartFileUploadFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<FileUploadFieldProps, "name"> & {
      accept?: string;
      capture?: "user" | "environment";
      multiple?: boolean;
    };
/**
 * @deprecated
 */
export function SmartFileUploadField<T extends FieldValues>(
  props: SmartFileUploadFieldProps<T>,
): ReactElement {
  const { control, errorMessage, hasError, name, ...fileUploadFieldProps } =
    props;
  const id = useId();
  const {
    field: { ref, onChange: _onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: e.target.files,
        },
      };
      _onChange(newEvent);
    },
    [_onChange],
  );
  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      className="amplify-textfield"
      id={id}
      loadingHeight={40}
    >
      <FileUploadField
        {...normalizeProps(fileUploadFieldProps)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        labelHidden
        onChange={onChange}
        value={value as FileList | null}
      />
    </BaseSmartField>
  );
}
