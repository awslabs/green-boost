import { Button } from "@aws-amplify/ui-react";
import React, { ReactElement } from "react";
import { Box, styled } from "../index.js";

export interface ActionButtonProps {
  handleClick: (event: React.MouseEvent) => void;
  handleClear: (event: React.MouseEvent) => void;
  isClearDisabled: boolean;
  isUploadDisabled: boolean;
}

const StyledButton = styled(Button);

export function ActionButtons(props: ActionButtonProps): ReactElement {
  const { handleClick, handleClear, isClearDisabled, isUploadDisabled } = props;

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
        isDisabled={isUploadDisabled}
      >
        Upload
      </StyledButton>
      <StyledButton
        onClick={handleClear}
        css={{
          float: "left",
          margin: "5px",
        }}
        isDisabled={isClearDisabled}
      >
        Clear
      </StyledButton>
    </Box>
  );
}
