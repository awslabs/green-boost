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
        color: "black",
        height: "100%",
        width: "fit-content",
        paddingRight: "10px",
        paddingLeft: "10px",
        alignItems: "center",
        display: "flex",
      }}
      onClick={(event) => {
        onClick(fileName, event);
      }}
    >
      X
    </Box>
  );
}
