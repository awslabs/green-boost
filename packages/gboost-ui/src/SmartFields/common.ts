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

const customProps = [
  "descriptiveText",
  "labelHidden",
  "loading",
  "tooltip",
  "tooltipAlign",
  "tooltipMaxWidth",
  "tooltipSide",
] as const;
/**
 * Prevents custom props from being passed to Amplify UI fields which are then
 * passed to HTML input elements which result in JS console errors about improper
 * attribute names
 */
export function normalizeProps<T extends Record<string, any>>(
  props: T
): Omit<T, typeof customProps[number]> {
  const _props: Record<string, any> = {};
  for (const p of Object.keys(props)) {
    if (!customProps.includes(p as typeof customProps[number])) {
      _props[p] = props[p];
    }
  }
  return _props as T;
}
