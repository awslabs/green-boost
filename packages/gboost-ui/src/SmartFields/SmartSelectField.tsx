import { ReactElement } from "react";
import { SelectField, SelectFieldProps } from "@aws-amplify/ui-react";
import { FieldValues, useController } from "react-hook-form";
import { ControlProps, normalizeProps } from "./common.js";
import {
  BaseSmartField,
  ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";

export type SmartSelectFieldProps<T> = ExternalBaseSmartFieldProps &
  ControlProps<T> &
  Omit<SelectFieldProps, "name"> & {
    children: ReactElement | ReactElement[];
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SmartSelectField<T extends FieldValues>(
  props: SmartSelectFieldProps<T>
): ReactElement {
  const { children, errorMessage, hasError, control, name, ...textFieldProps } =
    props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController<T>({ name, control });

  return (
    <BaseSmartField
      id={id}
      {...getBaseSmartFieldProps(props)}
      className="amplify-selectfield"
      loadingHeight={50}
    >
      <SelectField
        {...normalizeProps(textFieldProps)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        name={name}
        labelHidden
        onChange={onChange}
        value={value}
      >
        {children}
      </SelectField>
    </BaseSmartField>
  );
}
