import "./App.css.js";
import {
  FooterArea,
  HeaderArea,
  LayoutGrid,
  LeftAsideArea,
  MainArea,
  NotificationsProvider,
} from "gboost-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, View } from "@aws-amplify/ui-react";
import { ErrorBoundary } from "gboost-ui";
import { useState } from "react";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { NavAside } from "./components/NavAside.js";
import { theme } from "./theme.js";
import { trpc, trpcClient } from "./trpc.js";
import { Outlet } from "react-router-dom";
import { config } from "./config.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !config.isLocal,
    },
  },
});

export function App() {
  const [open, setOpen] = useState(true);
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <NotificationsProvider>
              <LayoutGrid
                // className={stitchesTheme}
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
                    <View margin="xs">
                      <Outlet />
                    </View>
                  </MainArea>
                }
                // rightAsideArea={
                //   <RightAsideArea display={{ base: "none", large: "block" }}>
                //     Right Aside
                //   </RightAsideArea>
                // }
                leftAsideArea={
                  <LeftAsideArea display={{ base: "none", small: "block" }}>
                    <NavAside open={open} />
                  </LeftAsideArea>
                }
              />
            </NotificationsProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
