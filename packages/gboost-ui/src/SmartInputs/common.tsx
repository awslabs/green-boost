import { Icon } from "@aws-amplify/ui-react";
import { styled } from "../index.js";
import { MdInfoOutline } from "react-icons/md";

export function TooltipIcon() {
  return <Icon ariaLabel="info" fontSize={20} as={MdInfoOutline} />;
}

export const LabelContainer = styled("div", { display: "flex", gap: "$2" });
