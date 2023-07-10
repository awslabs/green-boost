import { Flex, type FlexProps } from "@aws-amplify/ui-react";
import { clsx } from "clsx";
import { forwardRef, type ReactNode } from "react";
import { navAside } from "./NavAside.css.js";

interface NavigationAsideProps extends FlexProps {
  open: boolean;
  children?: ReactNode;
}

export const NavAside = forwardRef<HTMLDivElement, NavigationAsideProps>(
  function NavAside(props, ref) {
    const { open, ...restProps } = props;
    return (
      <Flex
        as="nav"
        className={clsx([navAside, props.className])}
        direction="column"
        gap="0"
        ref={ref}
        width={open ? "240px" : "60px"}
        {...restProps}
      >
        {props.children}
      </Flex>
    );
  }
);
