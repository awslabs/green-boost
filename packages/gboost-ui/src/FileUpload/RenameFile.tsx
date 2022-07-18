import { ReactElement } from "react";
import { Box } from "../index.js";

interface RenameFileProps {
  onClick: Function;
}

export function RenameFile(props: RenameFileProps): ReactElement {
  const { onClick } = props;
  return (
    <Box
      css={{
        color: "black",
        height: "100%",
        width: "fit-content",
        paddingRight: "10px",
      }}
      onClick={(event) => {
        onClick(event);
      }}
    >
      Rename
    </Box>
  );
}
