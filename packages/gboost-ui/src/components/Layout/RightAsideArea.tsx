import { View, type ViewProps } from "@aws-amplify/ui-react";
import { clsx } from "clsx";
import { forwardRef, type ReactNode } from "react";
import * as styles from "./RightAsideArea.css.js";

interface RightAsideAreaProps extends ViewProps {
  children?: ReactNode;
}

export const RightAsideArea = forwardRef<HTMLDivElement, RightAsideAreaProps>(
  function RightAsideArea(props, ref) {
    return (
      <View
        display={{ base: "none", large: "block" }}
        {...props}
        className={clsx([styles.rightAsideArea, props.className])}
        ref={ref}
      />
    );
  }
);
