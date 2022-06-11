import { ReactElement } from "react";
import { Flex, Placeholder } from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { Tooltip, defaultListHeight, TransferList } from "../index.js";
import type { TransferListProps } from "../index.js";
import { BaseSmartInputProps } from "./baseProps.js";
import { LabelContainer, TooltipIcon } from "./common.js";

export interface SmartTransferListProps<T, U>
  extends BaseSmartInputProps<T>,
    Omit<TransferListProps<U>, "name" | "value" | "onChange"> {}

/**
 * Smart Transfer List - first generic type is react-hook-form type,
 * and second type is item of the transfer list. For example, the first type
 * generic is the type of your form input which could be input for a user and include
 * roleIds and the second type parameter could be the Role interface which user
 * will be selecting but only roleIds are returned for user form input
 */
export function SmartTransferList<T extends FieldValues, U>(
  props: SmartTransferListProps<T, U>
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
    ...transferListProps
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
    Value = (
      <Placeholder
        height={`calc(${
          transferListProps.listHeight ?? defaultListHeight
        } + 42px)`}
      />
    );
  } else {
    Value = (
      <TransferList
        {...(transferListProps as Omit<TransferListProps<U>, "label" | "name">)}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        onChange={onChange}
        label={label}
        labelHidden={Boolean(tooltip)}
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
