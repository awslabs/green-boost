import { ReactElement } from "react";
import {
  Flex,
  Placeholder,
  SelectField,
  SelectFieldProps,
} from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { Tooltip } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelContainer, TooltipIcon } from "./common.js";

export interface SmartSelectFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<SelectFieldProps, "name"> {
  children: ReactElement | ReactElement[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SmartSelectField<T extends FieldValues>(
  props: SmartSelectFieldProps<T>
): ReactElement {
  const {
    children,
    errorMessage,
    hasError,
    control,
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
      <LabelContainer>
        <label className="amplify-label">{label}</label>
        {tooltip && <Tooltip content={tooltip} align={tooltipAlign} maxWidth={tooltipMaxWidth} side={tooltipSide}>
          <span>
            <TooltipIcon />
          </span>
        </Tooltip>}
      </LabelContainer>
    )
  }

  let Value: ReactElement | undefined;
  if (loading) {
    Value = <Placeholder height={50} />
  } else {
    Value = (
      <SelectField
      {...(textFieldProps as Omit<SelectFieldProps, "label" | "name">)}
      ref={ref}
      errorMessage={errorMessage || error?.message}
      hasError={hasError || invalid}
      name={name}
      label={label}
      labelHidden={Boolean(tooltip)}
      onChange={onChange}
      value={value}
    >
      {children}
    </SelectField>
    )
  }

  return (
    <Flex className="amplify-field amplify-textfield">
      {Label}
      {Value}
    </Flex>
  );
}
