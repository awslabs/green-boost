import { CognitoUserAmplify } from "@aws-amplify/ui";
import { ReactElement, useEffect, useState } from "react";
import { Page } from "../page.js";
import { useBps } from "../context/BreakpointsContext.jsx";
import { Header } from "./Header.jsx";
import { Content } from "./Content.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Footer } from "./Footer.jsx";
import { Box } from "../Box.jsx";
import { Drawer } from "./Drawer.jsx";
import { NavList } from "./NavList.jsx";

interface LayoutProps {
  className?: string;
  defaultPath?: string;
  logoSrc: string;
  pages: Page[];
  signOut: (data?: Record<string, string>) => void;
  user: CognitoUserAmplify;
}

export function Layout(props: LayoutProps) {
  const { className, defaultPath, logoSrc, pages, signOut, user } = props;
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
      <Header setOpen={setOpen} open={open} signOut={signOut} user={user} />
      {nav}
      <Content defaultPath={defaultPath} logoSrc={logoSrc} pages={pages} />
      <Footer />
    </Box>
  );
}
