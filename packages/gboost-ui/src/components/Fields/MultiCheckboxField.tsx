import { ReactElement, useState } from "react";
import { CheckboxField, CheckboxFieldProps, Text } from "@aws-amplify/ui-react";
import type { CSS } from "../../index.js";
import { ErrorMessage, styled } from "../../index.js";

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

export interface MultiCheckboxFieldProps
  extends Omit<CheckboxFieldProps, "value"> {
  css?: CSS;
  options: CheckboxOption[];
  value?: string[];
  onChange?: () => void;
}

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
              {...checkboxFields}
              label={o.label}
              name={o.value}
              value={o.value}
              checked={value.includes(o.value)}
              onChange={(e) => setValue([...value, e.target.value])}
            />
            {o.labelEnd}
          </CheckboxContainer>
        ))}
      </div>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
