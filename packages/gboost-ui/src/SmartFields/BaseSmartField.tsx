import { ReactElement } from "react";
import { Flex, Placeholder, Icon, Text } from "@aws-amplify/ui-react";
import type { ReactNode } from "react";
import { styled, Tooltip } from "../index.js";
import { MdInfoOutline } from "react-icons/md";
import { TooltipProps } from "./common.js";

export const LabelContainer = styled("div", {
  display: "flex",
  gap: "$2",
});

export function TooltipIcon() {
  return <Icon ariaLabel="info" fontSize={20} as={MdInfoOutline} />;
}

export interface ExternalBaseSmartFieldProps extends TooltipProps {
  descriptiveText?: ReactNode;
  label: ReactNode;
  labelHidden?: boolean;
  loading?: boolean;
}

const externalBaseSmartFieldKeys: (keyof ExternalBaseSmartFieldProps)[] = [
  "descriptiveText",
  "label",
  "labelHidden",
  "loading",
  "tooltip",
  "tooltipAlign",
  "tooltipMaxWidth",
  "tooltipSide",
];

export interface BaseSmartFieldProps extends ExternalBaseSmartFieldProps {
  children: ReactElement;
  className?: string;
  id: string;
  loadingHeight?: number | string;
}

export function getBaseSmartFieldProps(
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
    tooltip,
    tooltipAlign,
    tooltipMaxWidth,
    tooltipSide = "right",
  } = props;

  let Label: ReactElement | undefined;
  if (!labelHidden) {
    Label = (
      <LabelContainer>
        <label className="amplify-label" htmlFor={id}>
          {label}
        </label>
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
