import { View, ViewProps } from "@aws-amplify/ui-react";
import { clsx } from "clsx";
import { forwardRef, ReactNode } from "react";
import * as styles from "./MainArea.css.js";

interface MainAreaProps extends ViewProps {
  children?: ReactNode;
}

export const MainArea = forwardRef<HTMLDivElement, MainAreaProps>(
  function MainArea(props, ref) {
    return (
      <View
        {...props}
        className={clsx([styles.mainArea, props.className])}
        ref={ref}
      />
    );
  }
);
