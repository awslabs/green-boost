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
import { ProgressBar } from "../components/index.js";

const DropOutline = styled("div", {
  /* padding: "$9", */
  width: "100%",
  height: "100%",
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
  bucketName: string;
  region: string;
  fileKey?: string;
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
    url: string;
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
    bucketName,
    region,
    text = `Drop ${
      Array.isArray(fileType) ? fileType.join(", ") : fileType
    } files here`,
    fileKey = "",
  } = props;
  const inputFile = useRef<HTMLInputElement>(null);
  const { notify } = useNotifications();
  let multipartUploads = 0; // Number of multipart uploads occuring at once to update cursor
  let partsUploaded = 0;
  let totalParts = 0;
  const [cursor, updateCursor] = useState(
    deactivated ? `not-allowed` : `pointer`
  );
  const [percent, updatePercent] = useState(0);
  const [visible, updateProgressBarVisibility] = useState(`hidden`);

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
            bucketName: bucketName,
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
          bucket: bucketName,
          region: region,
          fileName: fileKey + file.name,
        },
      },
    });

    let multipartUpload: CompletedPart[] = [];
    let numberOfPartsUnknown = true;
    let numberOfParts =
      Math.ceil(file.size / 5242880) > 1000
        ? 1000
        : Math.ceil(file.size / 5242880);
    while (numberOfPartsUnknown) {
      if (
        Math.ceil(file.size / numberOfParts) <= 100000000 ||
        numberOfParts === 1000
      ) {
        numberOfPartsUnknown = false;
      } else {
        numberOfParts++;
      }
    }
    totalParts += numberOfParts;
    updatePercent((partsUploaded / totalParts) * 100);
    updateProgressBarVisibility(`visible`);
    const filePartSize = Math.ceil(file.size / numberOfParts);
    for (let i = 0; i < numberOfParts; i++) {
      console.log(i);
      const {
        getUploadPartURL: { url },
      } = await gQuery<GetUploadPartURLResponse>({
        query: getUploadPartURL,
        vars: {
          input: {
            region: region,
            bucket: bucketName,
            fileName: fileKey + file.name,
            partNumber: i + 1,
            uploadId: uploadId,
          },
        },
      });
      const start = i * filePartSize;
      const end = (i + 1) * filePartSize;
      const filePart =
        i < numberOfParts - 1 ? file.slice(start, end) : file.slice(start);
      const result = await fetch(url, {
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
              bucket: bucketName,
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
          bucket: bucketName,
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

  function handleUpload(files: FileList) {
    if (cursor === `pointer`) {
      // maxFiles<=0 is treated as no file limit
      if (maxFiles <= 0 || files.length <= maxFiles) {
        Array.from(files).forEach((file) => {
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
      handleUpload(files);
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
      handleUpload(e.dataTransfer.files);
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
    </Box>
  );
}
