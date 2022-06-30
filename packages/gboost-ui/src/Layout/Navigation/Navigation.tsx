import { Dispatch, ReactElement, SetStateAction } from "react";
import { Drawer, Page, styled, useBps } from "../../index.js";
import { NavList as DefaultNavigationList } from "./NavList.js";
import type { NavLink } from "./NavLink.js";

const Nav = styled("nav", {
  display: "none",
  backgroundColor: "$gray1",
  borderRight: "1px solid $gray6",
  gridArea: "nav",
  transition: "$sidebar",
  "@bp3": {
    display: "block",
  },
  variants: {
    open: {
      true: {
        width: 250,
      },
      false: {
        width: 70,
      },
    },
  },
});

interface BaseNavigationProps {
  bottomPages?: (NavLink | Page)[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface PagesNavigationProps extends BaseNavigationProps {
  pages: Page[];
}

interface ChildrenNavigationProps extends BaseNavigationProps {
  NavigationList: typeof DefaultNavigationList;
}

type NavigationProps = PagesNavigationProps | ChildrenNavigationProps;

export function Navigation(props: NavigationProps): ReactElement {
  const { bottomPages, open, setOpen } = props;
  const bps = useBps();
  let navList: ReactElement | undefined;
  if ("NavigationList" in props) {
    const { NavigationList } = props;
    navList = <NavigationList open={open} />;
  } else {
    navList = (
      <DefaultNavigationList
        bottomPages={bottomPages}
        open={open}
        pages={props.pages}
      />
    );
  }

  return bps.bp3 ? (
    <Nav open={open}>{navList}</Nav>
  ) : (
    <Drawer open={open} onClose={() => setOpen(false)}>
      {navList}
    </Drawer>
  );
}
