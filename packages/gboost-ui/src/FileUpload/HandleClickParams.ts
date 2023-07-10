import { type ContextNotification } from "../index.js";
import {
  type HandleUploadProps,
  type UploadProps,
} from "./FileUploadFunctions.js";
import { type FileData } from "./index.js";

export interface HandleClickParams {
  maxFiles: number;
  pendingFilesData: FileData[];
  uploadProps: UploadProps;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  updateCursor: React.Dispatch<React.SetStateAction<string>>;
  notify: (notification: ContextNotification) => void;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  handleUpload: (props: HandleUploadProps) => void;
}
