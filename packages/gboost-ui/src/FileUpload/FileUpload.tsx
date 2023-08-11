import { Box, useNotifications } from "../index.js";
import {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import React from "react";
import { handleUpload } from "./FileUploadFunctions.js";
import { DropOutline } from "./DropOutline.js";
import { handleClick } from "./HandleClick.js";
import { type HandleClickParams } from "./index.js";
import { type CustomActionButtonProps } from "./CustomActionButtons.js";

interface FileUploadProps {
  /**
   *
   * Accepted file types represented as file extensions
   * @example ['pdf', 'txt']
   */
  fileType: string[] | string;
  /**
   * If true, no files can be uploaded
   * @default false
   */
  deactivated?: boolean;
  /**
   * Represented in number of bytes
   * @default 5497558138880
   */
  maxFileSize?: number;
  /**
   * Maximum number of files to be accepted per upload
   * maxFiles <= 0 represent no file limit
   * @default 0
   */
  maxFiles?: number;
  /**
   * Text to be placed in the center of the component
   */
  text?: string;
  /**
   * Bucket key corresponding with the target bucket
   * Should be the same as the key used in the construct
   * @exaple 'example-bucket'
   */
  bucket: string;
  /**
   * Key appended to the beginning of every file
   * @example 'folder/'
   */
  fileKey?: string;
  /**
   * Overrides default upload behavior
   */
  onSubmit?: (params: HandleClickParams) => void;
  /**
   * Overrides default clear behavior
   */
  onClear?: (
    setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>
  ) => void;
  /**
   * Buttons displayed inside the component
   */
  Buttons?: (props: CustomActionButtonProps) => ReactElement;
  /**
   * Reference to trigger upload and clear from external buttons
   */
  buttonRef?: {
    current: {
      handleUpload: (event: React.MouseEvent) => void;
      handleClear: (event: React.MouseEvent) => void;
    };
  };
}
/**
 * @deprecated
 */
export interface FileData {
  file: File;
  setPercent: React.Dispatch<React.SetStateAction<number>> | undefined;
  isUploaded: boolean;
  fileName: string;
  hasFailed: boolean;
}

/**
 *
 * Component used for handling multi-file uploads to S3 buckets
 * @deprecated
 */
export function FileUpload(props: FileUploadProps): ReactElement {
  const {
    fileType,
    maxFileSize = 1073741824, // 1GB
    deactivated = false,
    maxFiles = 0,
    bucket,
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
    // Returns true if all files in the list have been uploaded or failed, if all files have failed returns false
    let allFilesUploaded = true;
    let allFilesFailed = true;
    let i = 0;
    while (allFilesUploaded && i < pendingFilesData.length) {
      if (!pendingFilesData[i]?.isUploaded) {
        if (!pendingFilesData[i]?.hasFailed) {
          allFilesUploaded = false;
          allFilesFailed = false;
        }
      } else {
        allFilesFailed = false;
      }
      i++;
    }
    if (allFilesFailed) {
      return false;
    } else {
      return allFilesUploaded;
    }
  }, [pendingFilesData]);

  const allFilesFailed = useCallback((): boolean => {
    let allFailed = true;
    let i = 0;
    while (allFailed && i < pendingFilesData.length) {
      if (!pendingFilesData[i]?.hasFailed || pendingFilesData[i]?.isUploaded) {
        allFailed = false;
      }
      i++;
    }
    return allFailed;
  }, [pendingFilesData]);

  useEffect(() => {
    if ((allFilesComplete() || allFilesFailed()) && uploading) {
      setUploading(false);
    }
  }, [allFilesComplete, uploading, pendingFilesData, allFilesFailed]);

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
                  hasFailed: false,
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
            hasFailed: false,
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
          //Don't remove files which failed to upload
          setPendingFilesData((prev) => {
            const newPendingFilesData: FileData[] = [];
            prev.forEach((oldFileData) => {
              if (oldFileData.hasFailed) {
                newPendingFilesData.push(oldFileData);
              }
            });
            return newPendingFilesData;
          });
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
            // Don't Clear files which failed to upload
            setPendingFilesData((prev) => {
              const newPendingFilesData: FileData[] = [];
              prev.forEach((oldFileData) => {
                if (oldFileData.hasFailed) {
                  newPendingFilesData.push(oldFileData);
                }
              });
              return newPendingFilesData;
            });
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

  const removeFile = useCallback((fileName: string) => {
    setPendingFilesData((oldData) => {
      const newData: FileData[] = [];
      for (let i = 0; i < oldData.length; i++) {
        const element = oldData[i];
        if (element && element.fileName !== fileName) {
          newData.push(element);
        }
      }
      return newData;
    });
  }, []);

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
          const fileParts = newFileName.split(".");
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
                  hasFailed: oldFileData.hasFailed,
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
    <Box css={{ height: "1px", minHeight: "100%" }}>
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
        allFilesFailed={allFilesFailed}
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
        buttonRef={props.buttonRef}
      />
    </Box>
  );
}
