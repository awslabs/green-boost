import { Box, useNotifications } from "../index.js";
import { ReactElement, useRef, useState } from "react";
import React from "react";
import { handleUpload } from "./FileUploadFunctions.js";
import { DropOutline } from "./DropOutline.js";

interface FileUploadProps {
  fileType: string[] | string; //Represented as lowercase file extensions eg 'pdf'
  deactivated?: boolean;
  maxFileSize?: Number;
  maxFiles?: Number;
  text?: string;
  bucket: string;
  region: string;
  fileKey?: string;
  buttonRef?: { current: { handleClick: Function } };
}

export interface FileData {
  file: File;
  setPercent: React.Dispatch<React.SetStateAction<number>> | undefined;
  isUploaded: boolean;
  fileName: string;
}

/**
 *
 * Component used for handling multi-file uploads to S3 buckets
 */
export function FileUpload(props: FileUploadProps): ReactElement {
  const {
    fileType,
    maxFileSize = 5000000000000,
    deactivated = false,
    maxFiles = 0,
    bucket,
    region,
    text = `Drop ${
      Array.isArray(fileType) ? fileType.join(", ") : fileType
    } files here`,
    fileKey = "",
  } = props;
  const inputFile = useRef<HTMLInputElement>(null);
  const { notify } = useNotifications();
  const [cursor, updateCursor] = useState(
    deactivated ? `not-allowed` : `pointer`
  );
  const [pendingFilesData, setPendingFilesData] = useState<FileData[]>([]);
  const [uploading, setUploading] = useState(false);

  function allFilesComplete(): boolean {
    let allFilesUploaded = true;
    let i = 0;
    while (allFilesUploaded && i < pendingFilesData.length) {
      if (!pendingFilesData[i].isUploaded) {
        allFilesUploaded = false;
      }
      i++;
    }
    if (allFilesUploaded && pendingFilesData.length > 0 && uploading) {
      setUploading(false);
    }
    return allFilesUploaded;
  }

  function addFileToPending(file: File) {
    let fileExists = false;
    pendingFilesData.forEach((currentFilesData) => {
      if (currentFilesData.fileName === file.name) {
        fileExists = true;
        setPendingFilesData((formerFilesData) => {
          return formerFilesData.map((fileData) => {
            if (fileData.fileName !== file.name) {
              return fileData;
            } else {
              return {
                file: file,
                setPercent: undefined,
                isUploaded: false,
                fileName: file.name,
              };
            }
          });
        });
      }
    });
    if (!fileExists) {
      setPendingFilesData((previousFiles) =>
        previousFiles.concat({
          file: file,
          setPercent: undefined,
          isUploaded: false,
          fileName: file.name,
        })
      );
    }
  }

  function handleClickUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        addFileToPending(file);
      });
    }
  }

  function handleBoxClick() {
    if (pendingFilesData.length > 0 ? (uploading ? false : true) : true) {
      // If all currently displayed files are finished uploading, clear them then add new files
      if (pendingFilesData.length > 0) {
        if (allFilesComplete()) {
          setPendingFilesData([]);
        }
      }
      if (inputFile.current) {
        inputFile.current.click();
      }
    } else {
      notify({
        body:
          cursor === `not-allowed`
            ? "File drop target is currently deactivated."
            : "Previous files are still being uploaded.",
        variation: "error",
      });
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (pendingFilesData.length > 0 ? (uploading ? false : true) : true) {
      // If all currently displayed files are finished uploading, clear them then add new files
      if (pendingFilesData.length > 0) {
        if (allFilesComplete()) {
          setPendingFilesData([]);
        }
      }

      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        Array.from(e.dataTransfer.files).forEach((file) => {
          addFileToPending(file);
        });
      }
    } else {
      notify({
        body:
          cursor === `not-allowed`
            ? "File drop target is currently deactivated."
            : "Previous files are still being uploaded.",
        variation: "error",
      });
    }
  }

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragIn(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    // If all currently displayed files are finished uploading, clear them then add new files
    if (pendingFilesData.length > 0) {
      if (allFilesComplete()) {
        setPendingFilesData([]);
      }
    }
  }

  function handleDragOut(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleClick() {
    // maxFiles<=0 is treated as no file limit
    if (maxFiles <= 0 || pendingFilesData.length <= maxFiles) {
      pendingFilesData.forEach((fileData) => {
        if (fileData.setPercent) {
          handleUpload(
            fileData.file,
            fileData.setPercent,
            fileData.fileName,
            {
              fileType: fileType,
              maxFileSize: maxFileSize,
              bucket: bucket,
              region: region,
              fileKey: fileKey,
            },
            setUploading,
            updateCursor,
            notify,
            setPendingFilesData
          );
        }
      });
    } else {
      notify({
        body: `Too many files selected. Max files is ${maxFiles}`,
        variation: `error`,
      });
    }
  }

  if (props.buttonRef) {
    props.buttonRef.current.handleClick = handleClick;
  }

  function removeFile(fileName: string, event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    setPendingFilesData((oldData) => {
      let newData: FileData[] = [];
      for (let i = 0; i < oldData.length; i++) {
        if (oldData[i].fileName !== fileName) {
          newData.push(oldData[i]);
        }
      }
      return newData;
    });
  }

  function changeFileName(oldFileName: string, newFileName: string): boolean {
    let fileNameExists = false;
    pendingFilesData.forEach((fileData) => {
      if (fileData.fileName === newFileName) {
        fileNameExists = true;
      }
    });
    if (fileNameExists) {
      let fileParts = newFileName.split(".");
      let newestFileName = "";
      for (let i = 0; i < fileParts.length; i++) {
        if (i < fileParts.length - 1) {
          if (i === 0) {
            newestFileName += fileParts[i];
          } else {
            newestFileName += "." + fileParts[i];
          }
        } else {
          newestFileName += "-copy." + fileParts[i];
        }
      }
      changeFileName(oldFileName, newestFileName);
      return false;
    } else {
      setPendingFilesData((oldData) => {
        return oldData.map((oldFileData) => {
          if (oldFileData.fileName === oldFileName) {
            return {
              file: oldFileData.file,
              setPercent: oldFileData.setPercent,
              isUploaded: oldFileData.isUploaded,
              fileName: newFileName,
            };
          } else {
            return oldFileData;
          }
        });
      });
      return true;
    }
  }

  return (
    <Box css={{ height: "100%" }}>
      <DropOutline
        handleDrop={handleDrop}
        handleDrag={handleDrag}
        handleDragIn={handleDragIn}
        handleDragOut={handleDragOut}
        handleBoxClick={handleBoxClick}
        handleClickUpload={handleClickUpload}
        inputFile={inputFile}
        pendingFilesData={pendingFilesData}
        text={text}
        setPendingFilesData={setPendingFilesData}
        removeFile={removeFile}
        changeFileName={changeFileName}
        buttonRef={props.buttonRef}
        handleClick={handleClick}
        uploading={uploading}
        allFilesComplete={allFilesComplete}
      />
    </Box>
  );
}
