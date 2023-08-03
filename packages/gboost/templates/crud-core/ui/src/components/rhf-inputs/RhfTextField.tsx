// @ts-nocheck
import { TextField, type TextFieldProps } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";

type RhfTextFieldProps<T extends FieldValues> = TextFieldProps & {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
};

/**
 * MUI `TextField` with react-hook-form bindings
 */
export function RhfTextField<T extends FieldValues>(
  props: RhfTextFieldProps<T>,
) {
  const { control, name, label, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error ? error.message : null}
          label={label}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
}
