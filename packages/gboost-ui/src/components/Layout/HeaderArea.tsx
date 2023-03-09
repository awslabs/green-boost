import { forwardRef, ReactNode } from "react";
import { clsx } from "clsx";
import * as styles from "./HeaderArea.css.js";
import { View, ViewProps } from "@aws-amplify/ui-react";

interface HeaderAreaProps extends ViewProps {
  children?: ReactNode;
}

export const HeaderArea = forwardRef<HTMLDivElement, HeaderAreaProps>(
  function HeaderArea(props, ref) {
    return (
      <View
        {...props}
        className={clsx([styles.headerArea, props.className])}
        ref={ref}
      />
    );
  }
);
