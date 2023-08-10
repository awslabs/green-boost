import { type MouseEvent } from "react";
/**
 * @deprecated
 */
export interface CustomActionButtonProps {
  handleUpload: (event: MouseEvent) => void;
  handleClear: (event: MouseEvent) => void;
  isUploadDisabled: boolean;
  isClearDisabled: boolean;
}
