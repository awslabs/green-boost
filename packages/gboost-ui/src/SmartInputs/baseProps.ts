import { ReactNode } from "react";
import { Control, FieldValues, FieldPath } from "react-hook-form";

export interface BaseSmartInputProps<T extends FieldValues> {
  loading?: boolean;
  label: ReactNode;
  name: FieldPath<T>;
  control: Control<T>;
}
