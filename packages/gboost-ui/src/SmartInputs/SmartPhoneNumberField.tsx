import { ReactElement } from "react";
import {
  Flex,
  Placeholder,
  PhoneNumberField,
  PhoneNumberFieldProps,
} from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelWithTooltip } from "./LabelWithTooltip.js";

export interface SmartPhoneFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<PhoneNumberFieldProps, "name" | "defaultCountryCode"> {
  defaultCountryCode?: string;
}

export function SmartPhoneNumberField<T extends FieldValues>(
  props: SmartPhoneFieldProps<T>
): ReactElement {
  const {
    control,
    defaultCountryCode = "+1",
    errorMessage,
    hasError,
    label,
    loading,
    name,
    tooltip,
    tooltipAlign,
    tooltipMaxWidth,
    tooltipSide = "right",
    ...textFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  let Label: ReactElement | undefined;
  if (loading || tooltip) {
    Label = (
      <LabelWithTooltip
        label={label}
        tooltip={tooltip}
        tooltipAlign={tooltipAlign}
        tooltipMaxWidth={tooltipMaxWidth}
        tooltipSide={tooltipSide}
      />
    );
  }

  let Value: ReactElement | undefined;
  if (loading) {
    Value = <Placeholder height={40} />;
  } else {
    Value = (
      <PhoneNumberField
        {...(textFieldProps as Omit<PhoneNumberFieldProps, "label" | "name">)}
        ref={ref}
        defaultCountryCode={defaultCountryCode}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        label={label}
        labelHidden={Boolean(tooltip)}
        onChange={onChange}
        value={value}
      />
    );
  }

  return (
    <Flex className="amplify-field amplify-textfield">
      {Label}
      {Value}
    </Flex>
  );
}
