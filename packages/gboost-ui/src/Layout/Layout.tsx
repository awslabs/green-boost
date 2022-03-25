import { ReactElement, useEffect, useState } from "react";
import { Page } from "../page.js";
import { useBps } from "../context/BreakpointsContext.js";
import { Header } from "./Header.js";
import { Content } from "./Content.js";
import { Sidebar } from "./Sidebar.js";
import { Footer } from "./Footer.js";
import { Box } from "../Box.js";
import { Drawer } from "./Drawer.js";
import { NavList } from "./NavList.js";

export interface LayoutProps {
  className?: string;
  /**
   * string for footer
   */
  footer?: string;
  /**
   * Default path visited by React Router when visiting index /
   */
  defaultPath?: string;
  /**
   * Source URL of logo shown to the right of the header title and when loading
   * lazily loaded routes
   */
  logoSrc: string;
  /**
   * Pages to be display in left nav drawer
   */
  pages: Page[];
  /**
   * string for header title
   */
  title: string;
  /**
   * React component for Footer. When used, `footer` prop is ignored
   */
  Footer?: ReactElement;
  /**
   * React component for Header Title. When used, `title` prop is ignored
   */
  HeaderTitle?: ReactElement;
}

/**
 * App Layout including header, aside, main and footer
 */
export function Layout(props: LayoutProps): ReactElement {
  const {
    className,
    footer,
    defaultPath,
    logoSrc,
    pages,
    title,
    Footer: UserFooter,
    HeaderTitle,
  } = props;
  const bps = useBps();
  // initial state makes sidebar open for laptop but closed for tablet and mobile
  const [open, setOpen] = useState(bps.bp3);
  useEffect(() => {
    // if changing from laptop to tablet, close sidebar
    if (!bps.bp3) {
      setOpen(false);
    }
  }, [bps.bp3]);
  let nav: ReactElement;
  if (bps.bp3) {
    nav = <Sidebar pages={pages} open={open} />;
  } else {
    nav = (
      <>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <NavList pages={pages} onClick={() => setOpen(false)} />
        </Drawer>
      </>
    );
  }
  return (
    <Box
      className={className}
      css={{
        display: "grid",
        height: "100vh",
        gridTemplateAreas: `"header" "content" "footer"`,
        gridTemplateRows: "auto 1fr auto",
        "@bp3": {
          gridTemplateAreas: `"header header" "sidebar content" "sidebar footer"`,
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "auto 1fr auto",
        },
      }}
    >
      <Header
        logoSrc={logoSrc}
        open={open}
        setOpen={setOpen}
        title={title}
        HeaderTitle={HeaderTitle}
      />
      {nav}
      <Content defaultPath={defaultPath} logoSrc={logoSrc} pages={pages} />
      <Footer footer={footer} Footer={UserFooter} />
    </Box>
  );
}
