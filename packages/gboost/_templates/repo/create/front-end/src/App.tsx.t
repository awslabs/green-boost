---
to: front-end/src/App.tsx
---

import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { camelToSnake } from "gb-lib/utils/convertCase";
import { AppProviders } from "gb-lib/front/context/AppProviders";
import { Layout } from "gb-lib/front/Layout/Layout";
import { config, globalStyles } from "gb-lib/front/stitches.config";
import { Authenticator } from "gb-lib/front/Authenticator";
import { userAttributes } from "common/userAttributes";
import { pages } from "./pages/pages.jsx";
import { theme } from "./theme.js";
import { getAmplifyTheme } from "gb-lib/front/amplifyTheme";

const signUpAttributes = Object.keys(userAttributes).map(
  camelToSnake
) as "email"[]; // amplify doesn't export SignUpAttribute type

export function App() {
  globalStyles();
  return (
    <AmplifyProvider theme={getAmplifyTheme(theme)}>
      <AppProviders media={config.media}>
        <Authenticator signUpAttributes={signUpAttributes}>
          {({ user, signOut }) => (
            <Layout
              className={theme}
              logoSrc="/favicon-32x32.png"
              pages={pages}
              signOut={signOut}
              user={user}
            />
          )}
        </Authenticator>
      </AppProviders>
    </AmplifyProvider>
  );
}
