import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { NotificationsProvider } from "gboost-ui";
import { DemoNotification } from "./DemoNotification.jsx";

function App() {
  return (
    <AmplifyProvider>
      <NotificationsProvider>
        <DemoNotification />
      </NotificationsProvider>
    </AmplifyProvider>
  );
}

export default App;
