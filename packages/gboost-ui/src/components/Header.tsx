import { Button, Flex, Icon } from "@aws-amplify/ui-react";
import {
  type Dispatch,
  forwardRef,
  type ReactNode,
  type SetStateAction,
} from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";

interface HeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header(
  props,
  ref
) {
  const { leftSide, open, rightSide, setOpen } = props;
  return (
    <Flex
      as="header"
      alignItems="center"
      gap="xxs"
      height="100%"
      padding="small"
      ref={ref}
    >
      <Button gap="xxs" variation="link" onClick={() => setOpen(!open)}>
        <Icon
          as={open ? MdMenuOpen : MdMenu}
          ariaLabel={open ? "open menu" : "menu"}
          fontSize="x-large"
        />
      </Button>
      <Flex justifyContent="space-between">
        {leftSide}
        {rightSide}
      </Flex>
    </Flex>
  );
});
