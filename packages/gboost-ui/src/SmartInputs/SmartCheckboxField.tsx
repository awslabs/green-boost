import { ReactElement } from "react";
import {
  CheckboxField,
  CheckboxFieldProps,
  Flex,
  Placeholder,
} from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelWithTooltip } from "./LabelWithTooltip.js";

export interface SmartCheckboxFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<CheckboxFieldProps, "name" | "children"> {}

export function SmartCheckboxField<T extends FieldValues>(
  props: SmartCheckboxFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    name,
    tooltip,
    tooltipAlign,
    tooltipMaxWidth,
    tooltipSide = "right",
    ...checkboxFieldProps
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
    Value = <Placeholder height={32} />;
  } else {
    Value = (
      <CheckboxField
        {...(checkboxFieldProps as Omit<CheckboxFieldProps, "label" | "name">)}
        ref={ref}
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
    <Flex className="amplify-field amplify-checkboxfield">
      {Label}
      {Value}
    </Flex>
  );
}
