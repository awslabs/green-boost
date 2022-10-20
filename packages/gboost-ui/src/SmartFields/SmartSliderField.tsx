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
import { ControlProps, normalizeProps } from "./common.js";
import {
  ExternalBaseSmartFieldProps,
  LabelContainer,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export type SmartSliderFieldProps<T extends FieldValues> =
  ExternalBaseSmartFieldProps &
    ControlProps<T> &
    Omit<SliderFieldProps, "name"> & {
      renderValue?: (v: number) => string;
    };

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
        {...normalizeProps(sliderFieldProps)}
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
  let tooltip: ReactElement | undefined = undefined;
  if ("Tooltip" in props && props.Tooltip) {
    tooltip = props.Tooltip;
  } else if ("tooltip" in props && props.tooltip) {
    tooltip = (
      <Tooltip
        content={props.tooltip}
        align={props.tooltipAlign}
        maxWidth={props.tooltipMaxWidth}
        side={props.tooltipSide || "right"}
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
          {tooltip}
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
