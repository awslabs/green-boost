import { ReactElement } from "react";
import {
  Placeholder,
  Flex,
  Radio,
  RadioGroupField,
  RadioGroupFieldProps,
} from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Tooltip } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelContainer, TooltipIcon } from "./common.js";

interface Option {
  label: string;
  value: string;
}

export interface SmartRadioGroupFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<RadioGroupFieldProps, "name" | "children"> {
  options: Option[];
}

export function SmartRadioGroupField<T extends FieldValues>(
  props: SmartRadioGroupFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    options,
    name,
    tooltip,
    tooltipAlign,
    tooltipMaxWidth,
    tooltipSide = "right",
    ...radioGroupFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  let Label: ReactElement | undefined;
  if (loading || tooltip) {
    Label = (
      <LabelContainer>
        <label className="amplify-label">{label}</label>
        {tooltip && (
          <Tooltip
            content={tooltip}
            align={tooltipAlign}
            maxWidth={tooltipMaxWidth}
            side={tooltipSide}
          >
            <span>
              <TooltipIcon />
            </span>
          </Tooltip>
        )}
      </LabelContainer>
    );
  }

  let Value: ReactElement | undefined;
  if (loading) {
    Value = <Placeholder height={32 * options.length} />;
  } else {
    Value = (
      <RadioGroupField
        {...(radioGroupFieldProps as Omit<
          RadioGroupFieldProps,
          "label" | "name"
        >)}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        label={label}
        labelHidden={Boolean(tooltip)}
        onChange={onChange}
        value={value}
      >
        {options.map((o) => (
          <Radio key={o.value} value={o.value}>
            {o.label}
          </Radio>
        ))}
      </RadioGroupField>
    );
  }

  return (
    <Flex className="amplify-field amplify-radiogroupfield">
      {Label}
      {Value}
    </Flex>
  );
}
