import { ReactElement } from "react";
import type { Control, FieldValues, FieldPath } from "react-hook-form";
import type { TooltipAlign, TooltipSide } from "../components/index.js";

export interface TooltipProps {
  tooltip?: string | ReactElement;
  tooltipAlign?: TooltipAlign;
  tooltipMaxWidth?: number;
  tooltipSide?: TooltipSide;
}

export interface ControlProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
}
