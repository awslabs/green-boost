// @ts-nocheck
import { Button } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function WidgetsAdditionalActions(): ReactElement {
  return (
    <Link to="create">
      <Button backgroundColor="background.success">Create</Button>
    </Link>
  );
}
