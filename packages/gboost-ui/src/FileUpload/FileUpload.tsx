import { gQuery, styled, useNotifications } from "../index.js";
import { ReactElement, useRef } from "react";
import { theme } from "../stitches.config.js";
import React from "react";
import { VisuallyHidden } from "@aws-amplify/ui-react";
import {
  abortUpload,
  completeUpload,
  getUploadId,
  getUploadPartURL,
  getUploadURL,
} from "./gql.js";
import { GraphQLError } from "graphql";
import { CompletedPart } from "@aws-sdk/client-s3";

const DropOutline = styled("div", {
  padding: "25%",
  width: "100%",
  height: "100%",
  borderRadius: "25px",
  borderStyle: "dashed",
  borderWidth: "3px",
  textAlign: "center",
  justifyContent: "center",
  borderColor: theme.colors.gray8,
  color: theme.colors.gray7,
  cursor: "pointer",
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
    let numberOfParts = 2;
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
    const filePartSize = Math.ceil(file.size / numberOfParts);
    for (let i = 0; i < numberOfParts; i++) {
      notify({
        body: `Uploading part ${i + 1}/${numberOfParts}`,
        variation: `info`,
      });
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
        return;
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
    }
  }

  function handleUpload(files: FileList) {
    if (!deactivated) {
      // maxFiles<=0 is treated as no file limit
      if (maxFiles <= 0 || files.length <= maxFiles) {
        for (var i = 0; i < files.length; i++) {
          if (files[i].size <= maxFileSize) {
            let isSupported = false;
            const parts = files[i].name.split(".");
            const extension = parts[parts.length - 1].toLowerCase();
            if (Array.isArray(fileType)) {
              if (fileType.includes(extension)) {
                isSupported = true;
              }
            } else if (fileType === extension) {
              isSupported = true;
            }

            if (isSupported) {
              if (files[i].size < 100000000) {
                uploadFile(files[i]);
              } else {
                handleMultipartUpload(files[i]);
              }
            } else {
              notify({
                body: `Files of type ${extension} are not accepted.`,
                variation: "error",
              });
            }
          } else {
            notify({
              body: `File ${files[i].name} is over the maximum ${maxFileSize} bytes.`,
              variation: "error",
            });
          }
        }
      } else {
        notify({
          body: `Too many files. Max is ${maxFiles}.`,
          variation: "error",
        });
      }
    } else {
      notify({
        body: "File drop target is currently deactivated.",
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
    if (inputFile.current) {
      inputFile.current.click();
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
    <DropOutline
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDragIn}
      onDragExit={handleDragOut}
      onClick={handleClick}
      draggable
    >
      <VisuallyHidden>
        <input
          multiple
          ref={inputFile}
          onChange={handleClickUpload}
          type="file"
        />
      </VisuallyHidden>
      {text}
    </DropOutline>
  );
}
