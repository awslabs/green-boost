import { ReactElement } from "react";
import {
  Flex,
  Placeholder,
  TextAreaField,
  TextAreaFieldProps,
} from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelWithTooltip } from "./LabelWithTooltip.js";

export interface SmartTextAreaFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<TextAreaFieldProps, "name"> {}

export function SmartTextAreaField<T extends FieldValues>(
  props: SmartTextAreaFieldProps<T>
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
    ...textFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController<T>({ name, control });

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
    Value = <Placeholder height={106} />;
  } else {
    Value = (
      <TextAreaField
        {...(textFieldProps as Omit<TextAreaFieldProps, "label" | "name">)}
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
    <Flex className="amplify-field amplify-textareafield">
      {Label}
      {Value}
    </Flex>
  );
}
