// @ts-nocheck
import { View } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { WidgetsTable } from "./WidgetsTable.js";

export function Widgets(): ReactElement {
  return (
    <View margin="xs">
      <WidgetsTable />
    </View>
  );
}
