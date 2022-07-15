import { ReactElement } from "react";
import { Box } from "../index.js";

interface RemoveFileProps {
  onClick: Function;
  fileName: string;
}

export function RemoveFile(props: RemoveFileProps): ReactElement {
  const { onClick, fileName } = props;
  return (
    <Box
      css={{
        color: "red",
        height: "100%",
        width: "fit-content",
        paddingRight: "10px",
        paddingLeft: "10px",
      }}
      onClick={(event) => {
        onClick(fileName, event);
      }}
    >
      X
    </Box>
  );
}
