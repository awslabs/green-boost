import {
  type ForwardedRef,
  forwardRef,
  type KeyboardEventHandler,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Badge,
  FieldGroupIcon,
  Icon,
  Menu,
  MenuItem,
  Text,
  View,
} from "@aws-amplify/ui-react";
import { useClickOutside, useId } from "@mantine/hooks";
import { styled } from "../..";
import { MdArrowDropDown, MdArrowDropUp, MdClose } from "react-icons/md";
import { Box } from "../Box";

const StyledInput = styled("input", {
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
  "&:focus-within": {
    borderColor: "var(--amplify-components-fieldcontrol-focus-border-color)",
    boxShadow: "var(--amplify-components-fieldcontrol-focus-box-shadow)",
  },
  height: "42px",
});
const StyledBadge = styled(Badge, { my: "$1", mr: "$1" });
const StyledClose = styled(Icon, {
  ml: "$1",
  br: "$round",
  bc: "$gray7",
  "&:hover": { bc: "$gray8" },
});
const StyledDropdown = styled(Icon, {
  alignSelf: "center",
  fontSize: "$5",
  mr: "$2",
});

interface MultiSelectFieldOption {
  value: string;
  label: string;
}

interface DefaultMenuItemProps {
  handleClick: () => void;
  label: string;
}

function DefaultMenuItem(props: DefaultMenuItemProps): ReactElement {
  const { label, handleClick } = props;
  return (
    <MenuItem key={label} onClick={handleClick}>
      {label}
    </MenuItem>
  );
}

interface DefaultValueProps {
  value: string;
  handleRemove: (e: MouseEvent) => void;
}

function DefaultValue(props: DefaultValueProps): ReactElement {
  const { value, handleRemove } = props;
  return (
    <StyledBadge key={value}>
      {value}
      <StyledClose aria-label="close" as={MdClose} onClick={handleRemove} />
    </StyledBadge>
  );
}
/**
 * @deprecated
 */
export interface MultiSelectFieldProps {
  descriptiveText?: ReactNode;
  errorMessage?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  id?: string;
  label: ReactNode;
  labelHidden?: boolean;
  name?: string;
  options: MultiSelectFieldOption[];
  placeholder?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
  MenuItemComponent?: typeof DefaultMenuItem;
  ValueComponent?: typeof DefaultValue;
}
/**
 * @deprecated
 */
export function IMultiSelectField(
  props: MultiSelectFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const {
    descriptiveText,
    errorMessage,
    hasError,
    id: _id,
    isDisabled,
    label,
    labelHidden,
    name,
    onChange,
    options,
    placeholder,
    value: controlledValue,
    MenuItemComponent = DefaultMenuItem,
    ValueComponent = DefaultValue,
    ...rest
  } = props;
  const id = useId(_id);
  const [value, setValue] = useState<string[]>([]);
  const unselectedOptions = options.filter((o) => !value.includes(o.value));
  const [open, setOpen] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpen(false));
  const handleSelectValue = useCallback(
    (newValue: string) => {
      if (controlledValue) {
        if (onChange) {
          const newValues = [...controlledValue, newValue];
          onChange(newValues);
          if (newValues.length === options.length) {
            setOpen(false);
          }
        }
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
    [controlledValue, options.length, onChange],
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
            (oldValue) => oldValue !== removeValue,
          );
          return newValues;
        });
      }
    },
    [controlledValue, onChange],
  );
  useEffect(() => {
    if (controlledValue) setValue(controlledValue);
  }, [controlledValue]);
  let inputClassName = "amplify-input amplify-field-group__control";
  if (hasError) inputClassName += " amplify-input--error";
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setOpen(true);
      }
    },
    [],
  );
  return (
    <View
      aria-invalid={hasError}
      className="amplify-flex amplify-field amplify-textfield"
      isDisabled={isDisabled}
    >
      <label
        className={`amplify-label ${
          labelHidden ? "amplify-visually-hidden" : ""
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      {descriptiveText && (
        <Text className="amplify-field__description">{descriptiveText}</Text>
      )}
      <div
        className="amplify-flex amplify-field-group amplify-field-group--has-inner-end amplify-field-group--horizontal"
        data-orientation="horizontal"
      >
        <Menu
          ref={clickOutsideRef}
          isOpen={open}
          trigger={
            <div className="amplify-field-group__field-wrapper amplify-field-group__field-wrapper--horizontal">
              <StyledInput
                ref={ref}
                className={inputClassName}
                id={id}
                name={name}
                onClick={() => setOpen(true)}
                placeholder={placeholder}
                type={value.length ? "hidden" : "text"}
                readOnly
                value={value}
                onKeyDown={handleKeyDown}
                {...rest}
              />
              {value.length !== 0 && (
                <>
                  <MultiSelectInput
                    onClick={handleClickMultiSelectInput}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                  >
                    <Box css={{ flexGrow: 1 }}>
                      {value.map((v) => (
                        <ValueComponent
                          key={v}
                          value={v}
                          handleRemove={(e: MouseEvent) =>
                            handleRemoveValue(e, v)
                          }
                        />
                      ))}
                    </Box>
                  </MultiSelectInput>
                  {errorMessage && (
                    <Text className="amplify-field__error-message">
                      {errorMessage}
                    </Text>
                  )}
                </>
              )}
              <div className="amplify-field-group__inner-end">
                <FieldGroupIcon>
                  <StyledDropdown
                    as={open ? MdArrowDropUp : MdArrowDropDown}
                    aria-label="dropdown"
                  />
                </FieldGroupIcon>
              </div>
            </div>
          }
        >
          {unselectedOptions.map((o) => (
            <MenuItemComponent
              key={o.value}
              label={o.label}
              handleClick={() => handleSelectValue(o.value)}
            />
          ))}
        </Menu>
      </div>
    </View>
  );
}

// https://fettblog.eu/typescript-react-generic-forward-refs/#option-1%3A-type-assertion
/**
 * @deprecated
 */
export const MultiSelectField = forwardRef(IMultiSelectField) as (
  props: MultiSelectFieldProps & { ref?: ForwardedRef<HTMLDivElement> },
) => ReactElement;
