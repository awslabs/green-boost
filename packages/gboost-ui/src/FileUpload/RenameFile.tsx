import { Button } from "@aws-amplify/ui-react";
import { ReactElement } from "react";

interface RenameFileProps {
  onClick: Function;
  percent: Number;
}

export function RenameFile(props: RenameFileProps): ReactElement {
  const { onClick, percent } = props;
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
      disabled={percent === 0 ? false : true}
    >
      Rename
    </Button>
  );
}
