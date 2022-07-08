import { ReactElement } from "react";
import {
  Flex,
  Placeholder,
  SliderField,
  SliderFieldProps,
} from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Tooltip } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelContainer, TooltipIcon } from "./common.js";

export interface SmartSliderFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<SliderFieldProps, "name"> {
  renderValue?: (v: number) => string;
}

export function SmartSliderField<T extends FieldValues>(
  props: SmartSliderFieldProps<T>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    label,
    loading,
    name,
    renderValue,
    tooltip,
    tooltipAlign,
    tooltipMaxWidth,
    tooltipSide = "right",
    ...sliderFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  let Label: undefined | ReactElement;
  if (loading || renderValue || tooltip) {
    Label = (
      <label
        data-testid="slider-label"
        className="amplify-label amplify-sliderfield__label"
      >
        <LabelContainer>
          <span>{label}</span>
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
        <span>{renderValue ? renderValue(value) : value}</span>
      </label>
    );
  }

  let Value: ReactElement | undefined;
  if (loading) {
    Value = <Placeholder height={40} />;
  } else {
    Value = (
      <SliderField
        {...(sliderFieldProps as Omit<SliderFieldProps, "label" | "name">)}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        isValueHidden={Boolean(Label)}
        name={name}
        label={label}
        labelHidden={Boolean(Label)}
        onChange={onChange}
        value={value}
      />
    );
  }
  return (
    <Flex className="amplify-field amplify-sliderfield">
      {Label}
      {Value}
    </Flex>
  );
}
