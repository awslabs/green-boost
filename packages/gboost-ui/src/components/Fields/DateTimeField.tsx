import { TextField, type TextFieldProps } from "@aws-amplify/ui-react";
import {
  type ForwardedRef,
  forwardRef,
  type InputHTMLAttributes,
  type ReactElement,
} from "react";

/**
 * @deprecated
 */
export type DateTimeFieldProps = TextFieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    type?: "datetime-local" | "date" | "time";
  };

/**
 * DateTimeField uses the nativve input element to display datetime, date, or time
 * pickers
 * datetime format is: YYYY-MM-DDTHH:MM
 * date format is: YYYY-MM-DD
 * time format is: HH:MM in 24 hour format
 */
export function _DateTimeField(
  props: DateTimeFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const { type = "datetime-local" } = props;
  // as any b/c TextField thinks it has to support HTMLTextField but we don't need that
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <TextField crossOrigin ref={ref as any} {...props} type={type} />;
}

// https://fettblog.eu/typescript-react-generic-forward-refs/#option-1%3A-type-assertion
/**
 * @deprecated
 */
export const DateTimeField = forwardRef(_DateTimeField) as (
  props: DateTimeFieldProps & { ref?: ForwardedRef<HTMLInputElement> },
) => ReactElement;
