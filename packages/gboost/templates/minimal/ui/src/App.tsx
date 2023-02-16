import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { globalStyles, Layout, theme as stitchesTheme } from "gboost-ui";
import { AmplifyProvider, Heading, Text } from "@aws-amplify/ui-react";
import { theme } from "./theme.js";

export function App() {
  globalStyles();
  return (
    <AmplifyProvider theme={theme}>
      <Layout
        className={stitchesTheme}
        HeaderTitle={
          <Heading level={3} color="white">
            Minimal App
          </Heading>
        }
        Footer={<Text textAlign="center">Minimal App</Text>}
      >
        <Heading level={1} marginBlockStart="large" textAlign="center">
          Hello, World!
        </Heading>
      </Layout>
    </AmplifyProvider>
  );
}
