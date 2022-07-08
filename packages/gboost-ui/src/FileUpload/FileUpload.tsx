import { Box, gQuery, styled, useNotifications } from "../index.js";
import { ReactElement, useRef, useState } from "react";
import { theme } from "../stitches.config.js";
import React from "react";
import { Grid, VisuallyHidden } from "@aws-amplify/ui-react";
import {
  abortUpload,
  completeUpload,
  getUploadId,
  getUploadPartURL,
  getUploadURL,
} from "./gql.js";
import { GraphQLError } from "graphql";
import { CompletedPart } from "@aws-sdk/client-s3";
import { ProgressBar, StyledButton } from "../components/index.js";
import { FileViewer } from "./FileViewer.js";

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
  instantUpload?: boolean;
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
    instantUpload = false,
  } = props;
  const inputFile = useRef<HTMLInputElement>(null);
  const { notify } = useNotifications();
  let multipartUploads = 0; // Number of multipart uploads occuring at once to update cursor
  let partsUploaded = 0;
  let totalParts = 0;
  let pendingFiles: File[] = [];
  const [cursor, updateCursor] = useState(
    deactivated ? `not-allowed` : `pointer`
  );
  const [percent, updatePercent] = useState(0);
  const [visible, updateProgressBarVisibility] = useState(
    totalParts === 0 ? `hidden` : `visible`
  );
  /* const [listedFiles, setListedFiles] = useState([<div key={1}></div>]); */
  const boxHeight = instantUpload ? `100%` : `90%`;
  const buttonVisibility = instantUpload ? `hidden` : `visible`;

  async function getURL(
    fileProps: FileProps
  ): Promise<{ url: string } | undefined> {
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
      return undefined;
    }
  }

  async function uploadFile(file: File) {
    const response = await getURL({ fileName: file.name, fileType: file.type });
    if (response !== undefined) {
      const { url } = response;
      const result = await fetch(url, {
        method: "PUT",
        body: file,
        mode: "cors",
      });

      if (result.status === 200) {
        notify({
          body: `Successfully uploaded ${file.name}`,
          variation: "success",
        });
      } else {
        notify({
          body: `Error uploading file ${file.name}`,
          variation: "error",
        });
      }
    }
  }

  async function handleMultipartUpload(file: File) {
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
    totalParts += numberOfParts;
    updatePercent((partsUploaded / totalParts) * 100);
    updateProgressBarVisibility(`visible`);
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
        totalParts -= numberOfParts;
        partsUploaded -= numberOfParts;
        updatePercent((partsUploaded / totalParts) * 100);
        if (totalParts === 0) {
          updateProgressBarVisibility(`hidden`);
          updatePercent(0);
        }
        return;
      } else {
        partsUploaded += 1;
        updatePercent((partsUploaded / totalParts) * 100);
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
      totalParts -= numberOfParts;
      partsUploaded -= numberOfParts;
      updatePercent((partsUploaded / totalParts) * 100);
      if (totalParts === 0) {
        updateProgressBarVisibility(`hidden`);
        updatePercent(0);
      }
    }
  }

  function handleUpload(files: File[]) {
    if (cursor === `pointer`) {
      // maxFiles<=0 is treated as no file limit
      if (maxFiles <= 0 || files.length <= maxFiles) {
        files.forEach((file) => {
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
              if (file.size < 100000000) {
                uploadFile(file);
              } else {
                multipartUploads++;
                updateCursor(`wait`);
                handleMultipartUpload(file).then(() => {
                  multipartUploads--;
                  if (multipartUploads === 0) {
                    updateCursor(`pointer`);
                  }
                });
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
        });
      } else {
        notify({
          body: `Too many files. Max is ${maxFiles}.`,
          variation: "error",
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

  function handleClickUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (files && files.length > 0) {
      if (instantUpload) {
        handleUpload(Array.from(files));
      } else {
        pendingFiles = pendingFiles.concat(Array.from(files));
        /*         setListedFiles(pendingFiles.map((file => <Box>{file.name}</Box>)));
         */
      }
    }
  }

  function handleClick() {
    if (cursor === `pointer`) {
      if (inputFile.current) {
        inputFile.current.click();
      }
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      if (instantUpload) {
        handleUpload(Array.from(e.dataTransfer.files));
      } else {
        pendingFiles = pendingFiles.concat(Array.from(e.dataTransfer.files));
        /*         setListedFiles(pendingFiles.map((file => <Box>{file.name}</Box>)));
         */
      }
    }
  }

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragIn(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragOut(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <Box css={{ height: "100%", flex: 2 }}>
      <DropOutline
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onDragEnter={handleDragIn}
        onDragExit={handleDragOut}
        onClick={handleClick}
        style={{
          cursor: cursor,
          justifyContent: "center",
          height: boxHeight,
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
        <Grid style={{ width: "50%", textAlign: "center" }}>
          {text}
          <Box
            css={{
              visibility: visible,
              height: "20px",
              width: "100%",
            }}
          >
            <ProgressBar progress={percent} />
          </Box>
        </Grid>
      </DropOutline>
      <Box
        css={{
          height: "10%",
          padding: "5px",
          width: "100%",
          textAlign: "left",
          visibility: buttonVisibility,
        }}
      >
        <FileViewer files={pendingFiles} />
        <StyledButton
          onClick={() => {
            if (pendingFiles.length !== 0) {
              if (
                window.confirm(
                  `Upload:\n${pendingFiles
                    .map((file) => {
                      return ">" + file.name;
                    })
                    .join("\n")}`
                )
              ) {
                handleUpload(pendingFiles);
              }
            }
            pendingFiles = [];
          }}
          css={{
            height: "100%",
            float: "left",
            margin: "5px",
          }}
          columnStart={"2"}
          columnEnd={"-1"}
        >
          Submit
        </StyledButton>
      </Box>
    </Box>
  );
}
