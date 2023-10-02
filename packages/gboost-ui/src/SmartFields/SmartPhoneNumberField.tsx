import { type ReactElement } from "react";
import {
  PhoneNumberField,
  type PhoneNumberFieldProps,
} from "@aws-amplify/ui-react";
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
export type SmartPhoneFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<PhoneNumberFieldProps, "name" | "defaultCountryCode"> & {
      defaultCountryCode?: string;
    };
/**
 * @deprecated
 */
export function SmartPhoneNumberField<T extends FieldValues>(
  props: SmartPhoneFieldProps<T>
): ReactElement {
  const {
    control,
    defaultCountryCode = "+1",
    errorMessage,
    hasError,
    name,
    ...phoneNumberFieldProps
  } = props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      id={id}
      {...getBaseSmartFieldProps(props)}
      className="amplify-textfield"
    >
      <PhoneNumberField
        crossOrigin
        {...normalizeProps(phoneNumberFieldProps)}
        id={id}
        ref={ref}
        defaultCountryCode={defaultCountryCode}
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
