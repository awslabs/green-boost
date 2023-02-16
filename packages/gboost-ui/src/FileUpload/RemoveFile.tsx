import { MouseEvent, ReactElement } from "react";
import { Box } from "../index.js";

interface RemoveFileProps {
  onClick: (fileName: string, event: MouseEvent) => void;
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
        position: "absolute",
        right: "0",
        bottom: "0",
      }}
      onClick={(event: MouseEvent) => {
        onClick(fileName, event);
      }}
    >
      X
    </Box>
  );
}
