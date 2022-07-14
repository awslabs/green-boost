import { Box, gQuery, styled, useNotifications } from "../index.js";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { theme } from "../stitches.config.js";
import React from "react";
import { Grid, ScrollView, VisuallyHidden } from "@aws-amplify/ui-react";
import {
  abortUpload,
  completeUpload,
  getUploadId,
  getUploadPartURL,
  getUploadURL,
} from "./gql.js";
import { GraphQLError } from "graphql";
import { CompletedPart } from "@aws-sdk/client-s3";
import { StyledButton } from "../components/index.js";
import { FileList } from "./FileList.js";

const DropOutline = styled("div", {
  width: "100%",
  borderRadius: "25px",
  borderStyle: "dashed",
  borderWidth: "3px",
  alignItems: "center",
  display: "flex",
  borderColor: theme.colors.gray8,
  color: theme.colors.gray8,
});

interface FileUploadProps {
  fileType: string[] | string; //Represented as lowercase file extensions eg 'pdf'
  deactivated?: boolean;
  maxFileSize?: Number;
  maxFiles?: Number;
  text?: string;
  bucket: string;
  region: string;
  fileKey?: string;
  buttonRef?: React.MutableRefObject<{ handleClick: Function }>;
}

export interface FileData {
  file: File;
  setPercent: React.Dispatch<React.SetStateAction<number>> | undefined;
  isUploaded: boolean;
}

interface GetUploadURLResponse {
  getUploadURL: {
    url: string;
  };
}

interface GetUploadIdResponse {
  getUploadId: {
    uploadId: string;
  };
}

interface GetUploadPartURLResponse {
  getUploadPartURL: {
    urls: string;
  };
}

interface completeUploadResponse {
  completeUpload: {
    statusCode: number;
  };
}

interface abortUploadResponse {
  abortUpload: {
    statusCode: number;
  };
}

interface FileProps {
  fileName: string;
  fileType: string;
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
    buttonRef = undefined,
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

  const getURL = useCallback(
    async (fileProps: FileProps): Promise<{ url: string } | undefined> => {
      try {
        const {
          getUploadURL: { url },
        } = await gQuery<GetUploadURLResponse>({
          query: getUploadURL,
          vars: {
            input: {
              bucket: bucket,
              fileName: fileKey + fileProps.fileName,
              region: region,
            },
          },
        });
        return { url };
      } catch (err) {
        const errors = err as GraphQLError[];
        console.log("Error: " + JSON.stringify(errors[0]));
        notify({
          body: `Error uploading file ${fileProps.fileName}`,
          variation: "error",
        });
        return undefined;
      }
    },
    [bucket, fileKey, notify, region]
  );

  const uploadFile = useCallback(
    async (
      file: File,
      setPercent: React.Dispatch<React.SetStateAction<number>>
    ) => {
      setPercent(0.1);
      const response = await getURL({
        fileName: file.name,
        fileType: file.type,
      });
      if (response !== undefined) {
        const { url } = response;
        try {
          const result = await fetch(url, {
            method: "PUT",
            body: file,
            mode: "cors",
          });
          if (result.status === 200) {
            setPercent(100);
            notify({
              body: `Successfully uploaded ${file.name}`,
              variation: "success",
            });
            setPendingFilesData((existingData) => {
              return existingData.map((existingFileData) => {
                if (existingFileData.file.name === file.name) {
                  return {
                    file: existingFileData.file,
                    setPercent: existingFileData.setPercent,
                    isUploaded: true,
                  };
                } else {
                  return existingFileData;
                }
              });
            });
          } else {
            notify({
              body: `Error uploading file ${file.name}`,
              variation: "error",
            });
          }
        } catch (err) {
          const errors = err as GraphQLError[];
          console.log("Error: " + JSON.stringify(errors[0]));
          notify({
            body: `Error uploading file ${file.name}`,
            variation: "error",
          });
        }
      }
    },
    [getURL, notify]
  );

  const handleMultipartUpload = useCallback(
    async (
      file: File,
      setPercent: React.Dispatch<React.SetStateAction<number>>
    ) => {
      setPercent(0.1);
      notify({
        body: `${file.name} will be uploaded in multiple parts.`,
        variation: `info`,
      });

      const {
        getUploadId: { uploadId },
      } = await gQuery<GetUploadIdResponse>({
        query: getUploadId,
        vars: {
          input: {
            bucket: bucket,
            region: region,
            fileName: fileKey + file.name,
          },
        },
      });

      let multipartUpload: CompletedPart[] = [];
      let numberOfParts =
        Math.ceil(file.size / 5242880) > 1000
          ? 1000
          : Math.ceil(file.size / 5242880);
      let partsUploaded = 0;
      const filePartSize = Math.ceil(file.size / numberOfParts);
      const {
        getUploadPartURL: { urls },
      } = await gQuery<GetUploadPartURLResponse>({
        query: getUploadPartURL,
        vars: {
          input: {
            region: region,
            bucket: bucket,
            fileName: fileKey + file.name,
            numberOfParts: numberOfParts,
            uploadId: uploadId,
          },
        },
      });
      for (let i = 0; i < numberOfParts; i++) {
        const start = i * filePartSize;
        const end = (i + 1) * filePartSize;
        const filePart =
          i < numberOfParts - 1 ? file.slice(start, end) : file.slice(start);
        const result = await fetch(urls[i], {
          method: "PUT",
          body: filePart,
          mode: "cors",
        });

        let etag = result.headers.get("ETag");
        if (etag != null) {
          multipartUpload[i] = {
            ETag: etag,
            PartNumber: i + 1,
          };
        }

        if (result.status !== 200) {
          await gQuery<abortUploadResponse>({
            query: abortUpload,
            vars: {
              input: {
                region: region,
                bucket: bucket,
                fileName: fileKey + file.name,
                uploadId: uploadId,
              },
            },
          });
          notify({
            body: `Error uploading ${file.name}`,
            variation: `error`,
          });
          partsUploaded = 0;
          setPercent((partsUploaded / numberOfParts) * 100);
          return;
        } else {
          partsUploaded += 1;
          setPercent((partsUploaded / numberOfParts) * 100);
        }
      }

      const {
        completeUpload: { statusCode },
      } = await gQuery<completeUploadResponse>({
        query: completeUpload,
        vars: {
          input: {
            region: region,
            bucket: bucket,
            fileName: fileKey + file.name,
            uploadId: uploadId,
            multipartUpload: multipartUpload,
          },
        },
      });
      if (statusCode === 200) {
        notify({
          body: `File ${file.name} successfully uploaded`,
          variation: `success`,
        });
        setPercent((partsUploaded / numberOfParts) * 100);
        setPendingFilesData((existingData) => {
          return existingData.map((existingFileData) => {
            if (existingFileData.file.name === file.name) {
              return {
                file: existingFileData.file,
                setPercent: existingFileData.setPercent,
                isUploaded: true,
              };
            } else {
              return existingFileData;
            }
          });
        });
      }
    },
    [bucket, fileKey, notify, region]
  );

  const handleUpload = useCallback(
    (file: File, setPercent: React.Dispatch<React.SetStateAction<number>>) => {
      if (file.size <= maxFileSize) {
        let isSupported = false;

        const parts = file.name.split(".");
        const extension = parts[parts.length - 1].toLowerCase();
        if (Array.isArray(fileType)) {
          if (fileType.includes(extension)) {
            isSupported = true;
          }
        } else if (fileType === extension) {
          isSupported = true;
        }

        if (isSupported) {
          setUploading(true);
          if (file.size < 100000000) {
            uploadFile(file, setPercent);
          } else {
            updateCursor(`wait`);
            handleMultipartUpload(file, setPercent);
          }
        } else {
          notify({
            body: `Files of type ${extension} are not accepted.`,
            variation: "error",
          });
        }
      } else {
        notify({
          body: `File ${file.name} is over the maximum ${maxFileSize} bytes.`,
          variation: "error",
        });
      }
    },
    [fileType, handleMultipartUpload, maxFileSize, notify, uploadFile]
  );

  function addFileToPending(file: File) {
    let fileExists = false;
    pendingFilesData.forEach((currentFilesData) => {
      if (currentFilesData.file.name === file.name) {
        fileExists = true;
        setPendingFilesData((formerFilesData) => {
          return formerFilesData.map((fileData) => {
            if (fileData.file.name !== file.name) {
              return fileData;
            } else {
              return {
                file: file,
                setPercent: undefined,
                isUploaded: false,
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

  const handleClick = useCallback(() => {
    // maxFiles<=0 is treated as no file limit
    if (maxFiles <= 0 || pendingFilesData.length <= maxFiles) {
      pendingFilesData.forEach((fileData) => {
        if (fileData.setPercent) {
          handleUpload(fileData.file, fileData.setPercent);
        }
      });
    } else {
      notify({
        body: `Too many files selected. Max files is ${maxFiles}`,
        variation: `error`,
      });
    }
  }, [handleUpload, maxFiles, notify, pendingFilesData]);

  useEffect(() => {
    if (buttonRef) {
      buttonRef.current.handleClick = handleClick;
    }
  }, [buttonRef, handleClick]);

  return (
    <Box css={{ height: "100%" }}>
      <DropOutline
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onDragEnter={handleDragIn}
        onDragExit={handleDragOut}
        onClick={handleBoxClick}
        style={{
          cursor:
            pendingFilesData.length > 0
              ? uploading
                ? `wait`
                : `pointer`
              : `pointer`,
          justifyContent: "center",
          height: "100%",
        }}
      >
        <VisuallyHidden>
          <input
            multiple
            ref={inputFile}
            onChange={handleClickUpload}
            type="file"
          />
        </VisuallyHidden>
        {pendingFilesData.length === 0 && (
          <Box css={{ width: "100%", textAlign: "center" }}>{text}</Box>
        )}
        {pendingFilesData.length > 0 && (
          <Grid
            style={{
              gridTemplateRows: "80% 20%",
              width: "100%",
              height: "100%",
            }}
          >
            <ScrollView
              style={{
                height: "100%",
                width: "100%",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
              rowStart={1}
              rowEnd={1}
            >
              <FileList
                filesData={pendingFilesData}
                setPendingFilesData={setPendingFilesData}
              />
            </ScrollView>
            <Box
              css={{
                height: "100%",
                padding: "1%",
                width: "100%",
                textAlign: "left",
                gridRowStart: "2",
                gridRowEnd: "-1",
              }}
            >
              {!buttonRef && (
                <StyledButton
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClick();
                  }}
                  css={{
                    height: "100%",
                    float: "left",
                    margin: "5px",
                  }}
                  columnStart={"2"}
                  columnEnd={"-1"}
                  isDisabled={
                    pendingFilesData.length > 0
                      ? !uploading
                        ? allFilesComplete()
                          ? true
                          : false
                        : true
                      : true
                  }
                >
                  Upload
                </StyledButton>
              )}
              <StyledButton
                onClick={(event) => {
                  event.stopPropagation();
                  setPendingFilesData([]);
                }}
                css={{
                  height: "100%",
                  float: "left",
                  margin: "5px",
                }}
                isDisabled={
                  pendingFilesData.length > 0
                    ? uploading
                      ? allFilesComplete()
                        ? false
                        : true
                      : false
                    : true
                }
              >
                Clear
              </StyledButton>
            </Box>
          </Grid>
        )}
      </DropOutline>
    </Box>
  );
}
