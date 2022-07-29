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

  let isUploadButtonDisabled = false;
  if (pendingFilesData.length > 0) {
    if (!uploading) {
      isUploadButtonDisabled = allFilesComplete();
    } else {
      isUploadButtonDisabled = true;
    }
  } else {
    isUploadButtonDisabled = true;
  }

  let isClearButtonDisabled = false;
  if (pendingFilesData.length > 0) {
    if (uploading) {
      isClearButtonDisabled = !allFilesComplete();
    }
  } else {
    isClearButtonDisabled = true;
  }

  return (
    <Box>
      <StyledButton
        onClick={handleClick}
        css={{
          float: "left",
          margin: "5px",
        }}
        columnStart={"2"}
        columnEnd={"-1"}
        isDisabled={isUploadButtonDisabled}
      >
        Upload
      </StyledButton>
      <StyledButton
        onClick={handleClear}
        css={{
          float: "left",
          margin: "5px",
        }}
        isDisabled={isClearButtonDisabled}
      >
        Clear
      </StyledButton>
    </Box>
  );
}
