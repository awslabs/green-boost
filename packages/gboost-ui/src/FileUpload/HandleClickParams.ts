import { ContextNotification } from "../index.js";
import { HandleUploadProps, UploadProps } from "./FileUploadFunctions.js";
import { FileData } from "./index.js";

export interface HandleClickParams {
  maxFiles: Number;
  pendingFilesData: FileData[];
  uploadProps: UploadProps;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  updateCursor: React.Dispatch<React.SetStateAction<string>>;
  notify: (notification: ContextNotification) => void;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  handleUpload: (props: HandleUploadProps) => void;
}
