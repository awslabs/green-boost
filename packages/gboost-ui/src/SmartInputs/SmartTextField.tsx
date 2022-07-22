import { ReactElement } from "react";
import {
  Flex,
  Placeholder,
  TextField,
  TextFieldProps,
} from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Tooltip } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelContainer, TooltipIcon } from "./common.js";

export interface SmartTextFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<TextFieldProps<false>, "name"> {}

export function SmartTextField<T extends FieldValues>(
  props: SmartTextFieldProps<T>
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
    Value = <Placeholder height={40} />;
  } else {
    Value = (
      <TextField
        {...(textFieldProps as Omit<TextFieldProps<false>, "label" | "name">)}
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
    <Flex className="amplify-field amplify-textfield">
      {Label}
      {Value}
    </Flex>
  );
}