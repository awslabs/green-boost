import { type MouseEvent } from "react";

export interface CustomActionButtonProps {
  handleUpload: (event: MouseEvent) => void;
  handleClear: (event: MouseEvent) => void;
  isUploadDisabled: boolean;
  isClearDisabled: boolean;
}
