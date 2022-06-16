import type { ReactNode } from "react";
import type { Control, FieldValues, FieldPath } from "react-hook-form";
import type { TooltipAlign, TooltipSide } from "../components/index.js";

export interface TooltipProps {
  tooltip?: string;
  tooltipAlign?: TooltipAlign;
  tooltipMaxWidth?: number;
  tooltipSide?: TooltipSide;
}

export interface BaseSmartInputProps<T extends FieldValues>
  extends TooltipProps {
  control: Control<T>;
  label: ReactNode;
  loading?: boolean;
  name: FieldPath<T>;
}
