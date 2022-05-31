import {
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Badge, Icon, Menu, MenuItem, Text, View } from "@aws-amplify/ui-react";
import { useClickOutside, useId } from "@mantine/hooks";
import { styled } from "./stitches.config.js";
import { MdClose } from "react-icons/md";

const Input = styled("input", {
  cursor: "pointer",
});
const MultiSelectInput = styled("div", {
  border:
    "var(--amplify-components-fieldcontrol-border-width) var(--amplify-components-fieldcontrol-border-style) var(--amplify-components-fieldcontrol-border-color)",
  borderRadius: "var(--amplify-components-fieldcontrol-border-radius)",
  cursor: "pointer",
  display: "flex",
  outline:
    "var(--amplify-components-fieldcontrol-outline-color) var(--amplify-components-fieldcontrol-outline-style) var(--amplify-components-fieldcontrol-outline-width)",
  outlineOffset: "var(--amplify-components-fieldcontrol-outline-offset)",
  pa: "$1",
  "&:focus": {
    borderColor: "var(--amplify-components-fieldcontrol-focus-border-color)",
    boxShadow: "var(--amplify-components-fieldcontrol-focus-box-shadow)",
  },
  height: "42px",
});
const StyledBadge = styled(Badge, { my: "$1", mr: "$1" });
const StyledClose = styled(Icon, {
  ml: "$1",
  br: "$round",
  "&:hover": { bc: "$gray7" },
});

interface MultiSelectFieldOption {
  value: string;
  label: string;
}

export interface MultiSelectFieldProps {
  errorMessage?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  label: ReactNode;
  name?: string;
  options: MultiSelectFieldOption[];
  placeholder?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function _MultiSelectField(
  props: MultiSelectFieldProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const {
    errorMessage,
    hasError,
    isDisabled,
    label,
    name,
    onChange,
    options,
    placeholder,
    value: controlledValue,
    ...rest
  } = props;
  const id = useId();
  const [value, setValue] = useState<string[]>([]);
  const unselectedOptions = options.filter((o) => !value.includes(o.value));
  const [open, setOpen] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpen(false));
  const handleSelectValue = useCallback(
    (newValue: string) => {
      if (controlledValue) {
        if (onChange) onChange([...controlledValue, newValue]);
      } else {
        setValue((v) => {
          const newValues = [...v, newValue];
          if (newValues.length === options.length) {
            setOpen(false);
          }
          return newValues;
        });
      }
    },
    [controlledValue, options.length, onChange]
  );
  const handleClickMultiSelectInput = useCallback(() => {
    setOpen((o) => {
      if (o) {
        return false;
      } else {
        // only open menu if not all options have been selected
        return value.length !== options.length;
      }
    });
  }, [options.length, value.length]);
  const handleRemoveValue = useCallback(
    (e: MouseEvent, removeValue: string) => {
      e.stopPropagation();
      if (controlledValue) {
        if (onChange) {
          onChange(controlledValue.filter((v) => v !== removeValue));
        }
      } else {
        setValue((oldValues) => {
          const newValues = oldValues.filter(
            (oldValue) => oldValue !== removeValue
          );
          return newValues;
        });
      }
    },
    [controlledValue, onChange]
  );
  useEffect(() => {
    if (controlledValue) setValue(controlledValue);
  }, [controlledValue]);
  let inputClassName = "amplify-input amplify-field-group__control";
  if (hasError) inputClassName += " amplify-input--error";
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        setOpen(true);
      }
    },
    []
  );
  return (
    <View
      aria-invalid={hasError}
      className="amplify-flex amplify-field amplify-textfield"
      isDisabled={isDisabled}
    >
      <label className="amplify-label" htmlFor={id}>
        {label}
      </label>
      <div
        className="amplify-field-group__field-wrapper amplify-field-group__field-wrapper--horizontal"
        data-orientation="horizontal"
      >
        <Menu
          ref={clickOutsideRef}
          isOpen={open}
          trigger={
            <div>
              <Input
                ref={ref}
                className={inputClassName}
                id={id}
                name={name}
                onClick={() => setOpen(true)}
                placeholder={placeholder}
                style={{ display: value.length ? "none" : undefined }}
                type="text"
                readOnly
                value={value}
                onKeyDown={handleKeyDown}
                {...rest}
              />
              <MultiSelectInput
                onClick={handleClickMultiSelectInput}
                style={{ display: !value.length ? "none" : undefined }}
              >
                {value.map((v) => (
                  <StyledBadge key={v}>
                    {v}
                    <StyledClose
                      aria-label="close"
                      as={MdClose}
                      onClick={(e: MouseEvent) => handleRemoveValue(e, v)}
                    />
                  </StyledBadge>
                ))}
              </MultiSelectInput>
              {errorMessage && (
                <Text className="amplify-field__error-message">
                  {errorMessage}
                </Text>
              )}
            </div>
          }
        >
          {unselectedOptions.map((o) => (
            <MenuItem key={o.label} onClick={() => handleSelectValue(o.value)}>
              {o.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </View>
  );
}

// https://fettblog.eu/typescript-react-generic-forward-refs/#option-1%3A-type-assertion
export const MultiSelectField = forwardRef(_MultiSelectField) as (
  props: MultiSelectFieldProps & { ref?: ForwardedRef<HTMLDivElement> }
) => ReactElement;
