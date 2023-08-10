import { View, type ViewProps } from "@aws-amplify/ui-react";
import { clsx } from "clsx";
import { forwardRef, type ReactNode } from "react";
import * as styles from "./LeftAsideArea.css.js";

interface LeftAsideAreaProps extends ViewProps {
  children?: ReactNode;
}

/**
 * `LeftAsideArea` is a container for left aside content. This element has
 * the `grid-area: "leftAside"`
 * @deprecated
 */
export const LeftAsideArea = forwardRef<HTMLDivElement, LeftAsideAreaProps>(
  function LeftAsideArea(props, ref) {
    return (
      <View
        // display={{ base: "none", medium: "block" }}
        {...props}
        className={clsx([styles.leftAsideArea, props.className])}
        ref={ref}
      />
    );
  }
);
