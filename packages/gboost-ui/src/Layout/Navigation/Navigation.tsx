import { Dispatch, ReactElement, SetStateAction } from "react";
import { Drawer, Page, useBps } from "../../index.js";
import { NavAside } from "./NavAside.js";
import { NavList as DefaultNavigationList } from "./NavList.js";
import type { NavLink } from "./NavLink.js";

interface NavigationProps {
  bottomPages?: (NavLink | Page)[];
  open: boolean;
  pages: Page[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  NavigationList?: typeof DefaultNavigationList;
}

export function Navigation(props: NavigationProps): ReactElement {
  const { bottomPages, open, pages, setOpen, NavigationList } = props;
  const bps = useBps();
  let navList = NavigationList ? (
    <NavigationList bottomPages={bottomPages} open={open} pages={pages} />
  ) : (
    <DefaultNavigationList
      bottomPages={bottomPages}
      open={open}
      pages={pages}
    />
  );

  return bps.bp3 ? (
    <NavAside css={{ width: open ? 250 : 70 }}>{navList}</NavAside>
  ) : (
    <Drawer open={open} onClose={() => setOpen(false)}>
      {navList}
    </Drawer>
  );
}
