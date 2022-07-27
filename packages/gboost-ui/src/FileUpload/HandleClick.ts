import { FileData } from "./FileUpload.js";
import { HandleClickParams } from "./HandleClickParams.js";

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
    pendingFilesData.forEach((fileData: FileData) => {
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
