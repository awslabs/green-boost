import { Box, useNotifications } from "../index.js";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { handleUpload } from "./FileUploadFunctions.js";
import { DropOutline } from "./DropOutline.js";
import { handleClick, HandleClickParams } from "./HandleClick.js";

interface FileUploadProps {
  /**
   *
   * description
   * @example ['pdf', 'txt']
   */
  fileType: string[] | string; //Represented as lowercase file extensions eg 'pdf'
  deactivated?: boolean;
  maxFileSize?: Number;
  maxFiles?: Number;
  text?: string;
  bucket: string;
  region: string;
  fileKey?: string;
  onSubmit?: (params: HandleClickParams) => void;
  onClear?: (
    setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>
  ) => void;
  Buttons?: () => ReactElement;
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
    onSubmit,
    onClear,
    Buttons,
  } = props;
  const inputFile = useRef<HTMLInputElement>(null);
  const { notify } = useNotifications();
  const [cursor, updateCursor] = useState(
    deactivated ? `not-allowed` : `pointer`
  );
  const [pendingFilesData, setPendingFilesData] = useState<FileData[]>([]);
  const [uploading, setUploading] = useState(false);

  const allFilesComplete = useCallback((): boolean => {
    let allFilesUploaded = true;
    let i = 0;
    while (allFilesUploaded && i < pendingFilesData.length) {
      if (!pendingFilesData[i].isUploaded) {
        allFilesUploaded = false;
      }
      i++;
    }
    return allFilesUploaded;
  }, [pendingFilesData]);

  useEffect(() => {
    if (allFilesComplete() && uploading) {
      setUploading(false);
    }
  }, [allFilesComplete, uploading, pendingFilesData]);

  const addFileToPending = useCallback(
    (file: File) => {
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
                  setPercent: fileData.setPercent,
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
    },
    [pendingFilesData]
  );

  const handleClickUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (files && files.length > 0) {
        Array.from(files).forEach((file) => {
          addFileToPending(file);
        });
      }
    },
    [addFileToPending]
  );

  const handleBoxClick = useCallback(() => {
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
  }, [allFilesComplete, cursor, notify, pendingFilesData.length, uploading]);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
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
    },
    [
      addFileToPending,
      allFilesComplete,
      cursor,
      notify,
      pendingFilesData.length,
      uploading,
    ]
  );

  const removeFile = useCallback(
    (fileName: string, event: React.MouseEvent) => {
      setPendingFilesData((oldData) => {
        let newData: FileData[] = [];
        for (let i = 0; i < oldData.length; i++) {
          if (oldData[i].fileName !== fileName) {
            newData.push(oldData[i]);
          }
        }
        return newData;
      });
    },
    []
  );

  const changeFileName = useCallback(
    (oldFileName: string, newFileName: string): boolean => {
      let fileNameExists = false;
      if (oldFileName !== newFileName) {
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
              newestFileName += "-Copy." + fileParts[i];
            }
          }
          changeFileName(oldFileName, newestFileName);
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
        }
      } else {
        fileNameExists = false;
      }
      return !fileNameExists;
    },
    [pendingFilesData]
  );

  return (
    <Box css={{ height: "100%" }}>
      <DropOutline
        handleDrop={handleDrop}
        handleBoxClick={handleBoxClick}
        handleClickUpload={handleClickUpload}
        inputFile={inputFile}
        pendingFilesData={pendingFilesData}
        text={text}
        setPendingFilesData={setPendingFilesData}
        removeFile={removeFile}
        changeFileName={changeFileName}
        handleClick={(event: React.MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
          handleClick({
            maxFiles: maxFiles,
            pendingFilesData: pendingFilesData,
            uploadProps: {
              fileType: fileType,
              maxFileSize: maxFileSize,
              bucket: bucket,
              region: region,
              fileKey: fileKey,
            },
            setUploading: setUploading,
            updateCursor: updateCursor,
            notify: notify,
            setPendingFilesData: setPendingFilesData,
            handleUpload: handleUpload,
          });
        }}
        uploading={uploading}
        allFilesComplete={allFilesComplete}
        Buttons={Buttons}
        {...(onSubmit
          ? {
              onSubmit: (event: React.MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
                onSubmit({
                  maxFiles: maxFiles,
                  pendingFilesData: pendingFilesData,
                  uploadProps: {
                    fileType: fileType,
                    maxFileSize: maxFileSize,
                    bucket: bucket,
                    region: region,
                    fileKey: fileKey,
                  },
                  setUploading: setUploading,
                  updateCursor: updateCursor,
                  notify: notify,
                  setPendingFilesData: setPendingFilesData,
                  handleUpload: handleUpload,
                });
              },
            }
          : {})}
        {...(onClear
          ? {
              onClear: (event: React.MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
                onClear(setPendingFilesData);
              },
            }
          : {})}
      />
    </Box>
  );
}
