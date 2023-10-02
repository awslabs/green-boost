import {
  type ReactElement,
  useState,
  useCallback,
  type ChangeEventHandler,
} from "react";
import {
  CheckboxField,
  type CheckboxFieldProps,
  Text,
} from "@aws-amplify/ui-react";
import type { CSS } from "../..";
import { ErrorMessage, styled } from "../..";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "var(--amplify-components-field-gap)",
});
const CheckboxContainer = styled("div", {
  display: "flex",
  gap: "$1",
});

interface CheckboxOption {
  label: string;
  value: string;
  labelEnd?: ReactElement;
}
/**
 * @deprecated
 */
export interface MultiCheckboxFieldProps
  extends Omit<CheckboxFieldProps, "value"> {
  css?: CSS;
  options: CheckboxOption[];
  value?: string[];
  onChange?: () => void;
}
/**
 * @deprecated
 */
export function MultiCheckboxField(
  props: MultiCheckboxFieldProps
): ReactElement {
  const {
    css,
    descriptiveText,
    errorMessage,
    hasError,
    label,
    labelHidden,
    options,
    onChange,
    value: controlledValue,
    ...checkboxFields
  } = props;
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>([]);
  const value = controlledValue || uncontrolledValue;
  const setValue = onChange || setUncontrolledValue;
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.target.checked) {
        setValue([...value, e.target.value]);
      } else {
        setValue(value.filter((el) => el !== e.target.value));
      }
    },
    [setValue, value]
  );
  return (
    <Container aria-invalid={hasError} css={css}>
      <label
        className={`amplify-label ${
          labelHidden ? "amplify-visually-hidden" : ""
        }`}
      >
        {label}
      </label>
      {descriptiveText && (
        <Text className="amplify-field__description">{descriptiveText}</Text>
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {options.map((o) => (
          <CheckboxContainer key={o.value}>
            <CheckboxField
              crossOrigin
              {...checkboxFields}
              label={o.label}
              name={o.value}
              value={o.value}
              checked={value.includes(o.value)}
              onChange={handleChange}
            />
            {o.labelEnd}
          </CheckboxContainer>
        ))}
      </div>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
