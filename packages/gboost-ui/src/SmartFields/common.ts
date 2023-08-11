/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Control, FieldValues, FieldPath } from "react-hook-form";

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
  "Tooltip",
] as const;
/**
 * Prevents custom props from being passed to Amplify UI fields which are then
 * passed to HTML input elements which result in JS console errors about improper
 * attribute names
 */
export function normalizeProps<T extends Record<string, any>>(
  props: T
): Omit<T, (typeof customProps)[number]> {
  const _props: Record<string, any> = {};
  for (const p of Object.keys(props)) {
    if (!customProps.includes(p as (typeof customProps)[number])) {
      _props[p] = props[p];
    }
  }
  return _props as T;
}
