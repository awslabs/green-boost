import { Dispatch, ReactElement, SetStateAction } from "react";
import { Drawer, Page, useBps } from "../../index.js";
import { NavAside } from "./NavAside.js";
import { NavList as DefaultNavigationList } from "./NavList.js";
import type { NavLink } from "./NavLink.js";

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
    <NavAside css={{ width: open ? 250 : 70 }}>{navList}</NavAside>
  ) : (
    <Drawer open={open} onClose={() => setOpen(false)}>
      {navList}
    </Drawer>
  );
}
