import { ReactElement } from "react";
import { Flex, Placeholder } from "@aws-amplify/ui-react";
import { useController } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { BaseSmartInputProps } from "./baseProps.js";
import { MultiSelectField, MultiSelectFieldProps, Tooltip } from "../index.js";
import { LabelContainer, TooltipIcon } from "./common.js";

export interface SmartMultiSelectFieldProps<T>
  extends BaseSmartInputProps<T>,
    Omit<MultiSelectFieldProps, "name"> {}

export function SmartMultiSelectField<T extends FieldValues>(
  props: SmartMultiSelectFieldProps<T>
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
    ...multiSelectFieldProps
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
    Value = <Placeholder height={40} />
  } else {
    Value = (
      <MultiSelectField
        {...(multiSelectFieldProps as Omit<
          MultiSelectFieldProps,
          "label" | "name"
        >)}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        label={label}
        labelHidden={Boolean(Label)}
        onChange={onChange}
        value={value}
      />
    )
  }

  return (
    <Flex className="amplify-field amplify-selectfield">
      {Label}
      {Value}
    </Flex>
  );
}
