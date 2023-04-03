// @ts-nocheck
import "./App.css.js";
import {
  FooterArea,
  HeaderArea,
  LayoutGrid,
  LeftAsideArea,
  MainArea,
  NavAside,
} from "gboost-ui";
import { AmplifyProvider, Heading, View } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { theme } from "./theme.js";

export function App() {
  const [open, setOpen] = useState(true);
  return (
    <AmplifyProvider theme={theme}>
      <LayoutGrid
        footerArea={
          <FooterArea>
            <Footer />
          </FooterArea>
        }
        headerArea={
          <HeaderArea>
            <Header open={open} setOpen={setOpen} />
          </HeaderArea>
        }
        mainArea={
          <MainArea>
            <View height="100%" margin="xs">
              <Heading level={1} textAlign="center">
                Hello, World!
              </Heading>
            </View>
          </MainArea>
        }
        leftAsideArea={
          <LeftAsideArea display={{ base: "none", small: "block" }}>
            <NavAside open={open} />
          </LeftAsideArea>
        }
      />
    </AmplifyProvider>
  );
}
