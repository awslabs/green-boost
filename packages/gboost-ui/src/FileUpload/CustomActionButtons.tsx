import React from "react";

export interface CustomActionButtonProps {
  handleUpload: (event: React.MouseEvent) => void;
  handleClear: (event: React.MouseEvent) => void;
  isUploadDisabled: boolean;
  isClearDisabled: boolean;
}
