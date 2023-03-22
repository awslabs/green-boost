// @ts-nocheck
import { ReactElement } from "react";
import { View } from "@aws-amplify/ui-react";
import { config } from "src/config.js";

export function Footer(): ReactElement {
  return (
    <View as="footer" textAlign="center">
      {config.appTitle}
    </View>
  );
}
