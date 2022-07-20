import { Button } from "@aws-amplify/ui-react";
import { ReactElement } from "react";

interface RenameFileProps {
  onClick: Function;
}

export function RenameFile(props: RenameFileProps): ReactElement {
  const { onClick } = props;
  return (
    <Button
      style={{
        color: "black",
        height: "100%",
        width: "fit-content",
      }}
      onClick={(event) => {
        onClick(event);
      }}
      size={"small"}
    >
      Rename
    </Button>
  );
}
