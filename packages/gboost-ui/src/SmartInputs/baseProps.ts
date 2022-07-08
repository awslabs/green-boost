import type { ReactNode } from "react";
import type { Control, FieldValues, FieldPath } from "react-hook-form";
import type { TooltipAlign, TooltipSide } from "../components/index.js";

export interface BaseSmartInputProps<T extends FieldValues> {
  control: Control<T>;
  label: ReactNode;
  loading?: boolean;
  name: FieldPath<T>;
  tooltip?: string;
  tooltipAlign?: TooltipAlign;
  tooltipMaxWidth?: number;
  tooltipSide?: TooltipSide;
}
