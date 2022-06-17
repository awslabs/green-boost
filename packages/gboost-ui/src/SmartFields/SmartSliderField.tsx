import { ReactElement } from "react";
import {
  Flex,
  Placeholder,
  SliderField,
  SliderFieldProps,
  Text,
} from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Tooltip } from "../index.js";
import { ControlProps } from "./common.js";
import {
  ExternalBaseSmartFieldProps,
  LabelContainer,
  TooltipIcon,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export interface SmartSliderFieldProps<T>
  extends ExternalBaseSmartFieldProps,
    ControlProps<T>,
    Omit<SliderFieldProps, "name"> {
  renderValue?: (v: number) => string;
}

export function SmartSliderField<T extends FieldValues>(
  props: SmartSliderFieldProps<T>
): ReactElement {
  const {
    control,
    descriptiveText,
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
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  let Value: ReactElement | undefined;
  if (loading) {
    Value = <Placeholder height={40} />;
  } else {
    Value = (
      <SliderField
        {...(sliderFieldProps as Omit<SliderFieldProps, "label" | "name">)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        isValueHidden
        name={name}
        label={label}
        labelHidden
        onChange={onChange}
        value={value}
      />
    );
  }
  return (
    <Flex className="amplify-field amplify-sliderfield">
      <label
        data-testid="slider-label"
        className="amplify-label amplify-sliderfield__label"
        htmlFor={id}
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
      {descriptiveText && (
        <Text className="amplify-field__description">{descriptiveText}</Text>
      )}
      {Value}
    </Flex>
  );
}
