import { ContextNotification } from "../context/NotificationsContext.js";
import { FileData } from "./FileUpload.js";
import { HandleUploadProps, UploadProps } from "./FileUploadFunctions.js";

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

export function handleClick(params: HandleClickParams) {
  const {
    maxFiles,
    pendingFilesData,
    uploadProps,
    setUploading,
    updateCursor,
    notify,
    setPendingFilesData,
    handleUpload,
  } = params;
  // maxFiles<=0 is treated as no file limit
  if (maxFiles <= 0 || pendingFilesData.length <= maxFiles) {
    pendingFilesData.forEach((fileData) => {
      if (fileData.setPercent) {
        handleUpload({
          file: fileData.file,
          setPercent: fileData.setPercent,
          fileName: fileData.fileName,
          uploadProps: uploadProps,
          setUploading: setUploading,
          updateCursor: updateCursor,
          notify: notify,
          setPendingFilesData: setPendingFilesData,
        });
      }
    });
  } else {
    notify({
      body: `Too many files selected. Max files is ${maxFiles}`,
      variation: `error`,
    });
  }
}
