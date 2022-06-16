import { ReactElement, ReactNode } from "react";
import { Icon } from "@aws-amplify/ui-react";
import { MdInfoOutline } from "react-icons/md";
import { styled, Tooltip } from "../index.js";
import { TooltipProps } from "./baseProps.js";

export function TooltipIcon() {
  return <Icon ariaLabel="info" fontSize={20} as={MdInfoOutline} />;
}

export const LabelContainer = styled("div", { display: "flex", gap: "$2" });

interface LabelWithTooltipProps extends TooltipProps {
  label: ReactNode;
}

export function LabelWithTooltip(props: LabelWithTooltipProps): ReactElement {
  const { tooltip, label, tooltipAlign, tooltipMaxWidth, tooltipSide } = props;
  return (
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
