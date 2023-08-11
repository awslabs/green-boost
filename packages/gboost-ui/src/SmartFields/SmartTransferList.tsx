import { type ReactElement } from "react";
import { type FieldValues, useController } from "react-hook-form";
import { defaultListHeight, TransferList } from "../index.js";
import type { TransferListProps } from "../index.js";
import { type ControlProps, normalizeProps } from "./common.js";
import {
  BaseSmartField,
  type ExternalBaseSmartFieldProps,
  getBaseSmartFieldProps,
} from "./BaseSmartField.js";
import { useId } from "@mantine/hooks";
/**
 * @deprecated
 */
export type SmartTransferListProps<
  T extends FieldValues,
  U
> = ExternalBaseSmartFieldProps &
  ControlProps<T> &
  Omit<TransferListProps<U>, "name" | "value" | "onChange">;

/**
 * Smart Transfer List - first generic type is react-hook-form type,
 * and second type is item of the transfer list. For example, the first type
 * generic is the type of your form input which could be input for a user and include
 * roleIds and the second type parameter could be the Role interface which user
 * will be selecting but only roleIds are returned for user form input
 * @deprecate
 */
export function SmartTransferList<T extends FieldValues, U>(
  props: SmartTransferListProps<T, U>
): ReactElement {
  const {
    control,
    errorMessage,
    hasError,
    name,
    render,
    ...transferListProps
  } = props;
  const id = useId();
  const {
    field: { ref, onChange, value },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <BaseSmartField
      {...getBaseSmartFieldProps(props)}
      id={id}
      className="amplify-textfield"
      loadingHeight={`calc(${
        transferListProps.listHeight ?? defaultListHeight
      } + 42px)`}
    >
      <TransferList
        {...normalizeProps(transferListProps)}
        id={id}
        ref={ref}
        errorMessage={errorMessage || error?.message}
        hasError={hasError || invalid}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={onChange as any}
        labelHidden
        value={value}
        render={render}
      />
    </BaseSmartField>
  );
}
