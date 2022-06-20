import { ChangeEventHandler, ReactElement, useCallback } from "react";
import { ControlProps } from "./common.js";
import { FileUploadField, FileUploadFieldProps } from "../index.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";
import { useController } from "react-hook-form";

export interface SmartFileUploadFieldProps<T>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<FileUploadFieldProps, "name"> {
  accept?: string;
  capture?: "user" | "environment";
  multiple?: boolean;
}

export function SmartFileUploadField<T>(
  props: SmartFileUploadFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    name,
    ...fileUploadFieldProps
  } = props;
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
    [_onChange]
  );
  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      className="amplify-textfield"
      id={id}
      loadingHeight={40}
    >
      <FileUploadField
        {...(fileUploadFieldProps as Omit<
          FileUploadFieldProps,
          "label" | "name"
        >)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        label={label}
        labelHidden
        onChange={onChange}
        value={value as FileList | null}
      />
    </BaseSmartField>
  );
}
