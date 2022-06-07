import { ReactElement } from "react";
import { Placeholder, SliderField, SliderFieldProps } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Box } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";

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
    ...sliderFieldProps
  } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });
  let Label: undefined | ReactElement;
  if (renderValue) {
    Label = <label data-testid="slider-label" className="amplify-label amplify-sliderfield__label">
      <span>{label}</span>
      <span>{renderValue(value)}</span>
    </label>
  }
  return loading ? (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
      <label className="amplify-label">{label}</label>
      <Placeholder height={40} />
    </Box>
  ) : (
    <div>
      {Label}
      <SliderField
        labelHidden={Boolean(Label)}
        isValueHidden={Boolean(Label)}
        {...(sliderFieldProps as Omit<SliderFieldProps, "label" | "name">)}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        label={label}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
