import { ReactElement, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import type { useAuthenticator } from "@aws-amplify/ui-react";
import { Page } from "../page.js";
import { useBps } from "../context/BreakpointsContext.js";
import { Header } from "./Header/Header.js";
import { Content } from "./Content.js";
import { NavSidebar } from "./NavSidebar.js";
import { Footer } from "./Footer.js";
import { Box } from "../Box.js";
import { Drawer } from "./Drawer.js";
import { NavList } from "./NavList.js";

export type CognitoUser = ReturnType<typeof useAuthenticator>["user"];

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
   * Logs off user
   * @default Auth.signOut
   */
  signOut?: () => unknown;
  /**
   * string for header title
   */
  title: string;
  /**
   * Explicitly defined user for Account Menu instead of using `user` returned
   * from `useAuthenticator`
   */
  user: CognitoUser;
  /**
   * Custom account menu shown on right side of header. Should consider desktop
   * and mobile view. See default account menu for guidance.
   */
  AccountMenu?: ReactElement;
  /**
   * Custom account sidebar that shows in drawer when mobile screen and user
   * clicks on account menu button.
   */
  AccountSidebar?: ReactElement;
  /**
   * Custom footer component. When used, `footer` prop is ignored.
   */
  Footer?: ReactElement;
  /**
   * Custom header title shown to right of hamburger menu. When used, `title`
   * prop is ignored.
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
    signOut = Auth.signOut,
    title,
    user,
    AccountMenu,
    AccountSidebar,
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
    nav = <NavSidebar pages={pages} open={open} />;
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
        signOut={signOut}
        title={title}
        user={user}
        AccountMenu={AccountMenu}
        AccountSidebar={AccountSidebar}
        HeaderTitle={HeaderTitle}
      />
      {nav}
      <Content defaultPath={defaultPath} logoSrc={logoSrc} pages={pages} />
      <Footer footer={footer} Footer={UserFooter} />
    </Box>
  );
}
