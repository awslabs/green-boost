import { type ReactElement } from "react";
import { TextAreaField, type TextAreaFieldProps } from "@aws-amplify/ui-react";
import { type FieldValues, useController } from "react-hook-form";
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
export type SmartTextAreaFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<TextAreaFieldProps, "name">;
/**
 * @deprecated
 */
export function SmartTextAreaField<T extends FieldValues>(
  props: SmartTextAreaFieldProps<T>,
): ReactElement {
  const { control, errorMessage, hasError, name, ...textFieldProps } = props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController<T>({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-textareafield"
      loadingHeight={106}
    >
      <TextAreaField
        {...normalizeProps(textFieldProps)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        labelHidden
        onChange={onChange}
        value={value}
      />
    </BaseSmartField>
  );
}
