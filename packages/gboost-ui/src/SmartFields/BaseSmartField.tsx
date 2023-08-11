import { type ReactElement } from "react";
import { Flex, Placeholder, Text } from "@aws-amplify/ui-react";
import type { ReactNode } from "react";
import { styled, Tooltip, TooltipIcon } from "../index.js";
import type { TooltipAlign, TooltipSide } from "../components/index.js";

interface SimpleTooltipProps {
  tooltip?: string | ReactElement;
  tooltipAlign?: TooltipAlign;
  tooltipMaxWidth?: number;
  tooltipSide?: TooltipSide;
}
interface CustomTooltipProps {
  Tooltip?: ReactElement;
}

export const LabelContainer = styled("div", {
  display: "flex",
  gap: "$2",
});

export interface _ExternalBaseSmartFieldProps {
  descriptiveText?: ReactNode;
  label: ReactNode;
  labelHidden?: boolean;
  loading?: boolean;
}
export type ExternalBaseSmartFieldProps = _ExternalBaseSmartFieldProps &
  (SimpleTooltipProps | CustomTooltipProps);

const externalBaseSmartFieldKeys = [
  "descriptiveText",
  "label",
  "labelHidden",
  "loading",
  "tooltip",
  "tooltipAlign",
  "tooltipMaxWidth",
  "tooltipSide",
  "Tooltip",
] as const;

export interface _BaseSmartFieldProps {
  children: ReactElement;
  className?: string;
  id: string;
  loadingHeight?: number | string;
}

type BaseSmartFieldProps = _BaseSmartFieldProps & ExternalBaseSmartFieldProps;

export function getBaseSmartFieldProps(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>
): ExternalBaseSmartFieldProps {
  const baseSmartFieldProps: Partial<ExternalBaseSmartFieldProps> = {};
  for (const p in props) {
    if (
      externalBaseSmartFieldKeys.includes(
        p as keyof ExternalBaseSmartFieldProps
      )
    ) {
      baseSmartFieldProps[p as keyof ExternalBaseSmartFieldProps] = props[p];
    }
  }
  return baseSmartFieldProps as ExternalBaseSmartFieldProps;
}
/**
 * @deprecated
 */
export function BaseSmartField(props: BaseSmartFieldProps): ReactElement {
  const {
    children,
    className = "amplify-textfield",
    descriptiveText,
    id,
    loadingHeight = 40,
    label,
    labelHidden,
    loading,
  } = props;

  let Label: ReactElement | undefined;
  if (!labelHidden) {
    let tooltip: ReactElement | undefined = undefined;
    if ("Tooltip" in props && props.Tooltip) {
      tooltip = props.Tooltip;
    } else if ("tooltip" in props && props.tooltip) {
      const {
        tooltip: tooltipContent,
        tooltipAlign,
        tooltipMaxWidth,
        tooltipSide = "right",
      } = props;
      tooltip = (
        <Tooltip
          content={tooltipContent}
          align={tooltipAlign}
          maxWidth={tooltipMaxWidth}
          side={tooltipSide}
        >
          <span>
            <TooltipIcon />
          </span>
        </Tooltip>
      );
    }
    Label = (
      <LabelContainer>
        <label className="amplify-label" htmlFor={id}>
          {label}
        </label>
        {tooltip}
      </LabelContainer>
    );
  }

  let Value: ReactElement | undefined;
  if (loading) {
    Value = <Placeholder height={loadingHeight} />;
  } else {
    Value = children;
  }

  return (
    <Flex className={`amplify-field ${className}`}>
      {Label}
      {descriptiveText && (
        <Text className="amplify-field__description">{descriptiveText}</Text>
      )}
      {Value}
    </Flex>
  );
}
