import { Button } from "@aws-amplify/ui-react";
import React, { ReactElement } from "react";
import { Box, FileData, styled } from "../index.js";

export interface ActionButtonProps {
  handleClick: (event: React.MouseEvent) => void;
  handleClear: (event: React.MouseEvent) => void;
  pendingFilesData: FileData[];
  allFilesComplete: () => boolean;
  uploading: boolean;
}

const StyledButton = styled(Button);

export function ActionButtons(props: ActionButtonProps): ReactElement {
  const {
    handleClick,
    handleClear,
    pendingFilesData,
    allFilesComplete,
    uploading,
  } = props;
  return (
    <Box
      css={{
        position: "absolute",
        bottom: "5px",
        left: "5px",
      }}
    >
      <StyledButton
        onClick={handleClick}
        css={{
          float: "left",
          margin: "5px",
        }}
        columnStart={"2"}
        columnEnd={"-1"}
        isDisabled={
          pendingFilesData.length > 0
            ? !uploading
              ? allFilesComplete()
                ? true
                : false
              : true
            : true
        }
      >
        Upload
      </StyledButton>
      <StyledButton
        onClick={handleClear}
        css={{
          float: "left",
          margin: "5px",
        }}
        isDisabled={
          pendingFilesData.length > 0
            ? uploading
              ? allFilesComplete()
                ? false
                : true
              : false
            : true
        }
      >
        Clear
      </StyledButton>
    </Box>
  );
}
