import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactElement,
} from "react";
import { TextField, type TextFieldProps } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { type ControlProps, normalizeProps } from "./common.js";
import {
  BaseSmartField,
  type ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export type SmartTextFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<TextFieldProps, "name"> &
    InputHTMLAttributes<HTMLInputElement>;

export function SmartTextField<T extends FieldValues>(
  props: SmartTextFieldProps<T>
): ReactElement {
  const { control, errorMessage, hasError, name, ...textFieldProps } = props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });
  let newOnChange = onChange as any;
  if (props.type === "number") {
    newOnChange = ((e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.valueAsNumber as any);
    }) as any;
  }

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-textfield"
    >
      <TextField
        {...normalizeProps(textFieldProps)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        labelHidden
        onChange={newOnChange}
        value={value}
      />
    </BaseSmartField>
  );
}
