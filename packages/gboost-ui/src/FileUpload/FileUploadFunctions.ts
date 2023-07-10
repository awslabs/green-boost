import {
  abortUpload,
  completeUpload,
  getUploadId,
  getUploadPartURL,
  getUploadURL,
} from "./gql.js";
import { GraphQLError } from "graphql";
import { type CompletedPart } from "@aws-sdk/client-s3";
import { type ContextNotification, gQuery } from "../index.js";
import { type FileData } from "./index.js";

export interface HandleUploadProps {
  file: File;
  setPercent: React.Dispatch<React.SetStateAction<number>>;
  fileName: string;
  uploadProps: UploadProps;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  updateCursor: React.Dispatch<React.SetStateAction<string>>;
  notify: (notification: ContextNotification) => void;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
}

export interface UploadProps {
  fileType: string[] | string; //Represented as lowercase file extensions eg 'pdf'
  maxFileSize: Number;
  bucket: string;
  fileKey: string;
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
  fileType: string | string[];
}

export function handleUpload(props: HandleUploadProps) {
  const {
    file,
    uploadProps,
    fileName,
    setUploading,
    setPercent,
    notify,
    setPendingFilesData,
    updateCursor,
  } = props;
  if (file.size <= Number(uploadProps.maxFileSize)) {
    let isSupported = false;

    const parts = fileName.split(".");
    const extension = parts[parts.length - 1]?.toLowerCase() || "";
    if (Array.isArray(uploadProps.fileType)) {
      if (uploadProps.fileType.includes(extension)) {
        isSupported = true;
      }
    } else if (uploadProps.fileType === extension) {
      isSupported = true;
    }

    if (isSupported) {
      setUploading(true);
      if (file.size < 100000000) {
        uploadFile(
          { fileName: fileName, fileType: uploadProps.fileType },
          setPercent,
          notify,
          uploadProps,
          file,
          setPendingFilesData
        );
      } else {
        updateCursor(`wait`);
        handleMultipartUpload(
          file,
          setPercent,
          fileName,
          uploadProps,
          setPendingFilesData,
          notify
        );
      }
    } else {
      notify({
        body: `Files of type ${extension} are not accepted.`,
        variation: "error",
      });
      // The file is not a valid file so remove it from the pending list
      setPendingFilesData((prev) => {
        let newPendingFilesData: FileData[] = [];
        prev.forEach((oldFileData) => {
          if (fileName !== oldFileData.fileName) {
            newPendingFilesData.push(oldFileData);
          }
        });
        return newPendingFilesData;
      });
    }
  } else {
    notify({
      body: `File ${fileName} is over the maximum ${uploadProps.maxFileSize} bytes.`,
      variation: "error",
    });
    // The file is not a valid file so remove it from the pending list
    setPendingFilesData((prev) => {
      let newPendingFilesData: FileData[] = [];
      prev.forEach((oldFileData) => {
        if (fileName !== oldFileData.fileName) {
          newPendingFilesData.push(oldFileData);
        }
      });
      return newPendingFilesData;
    });
  }
}

export async function getURL(
  fileProps: FileProps,
  notify: (notification: ContextNotification) => void,
  uploadProps: UploadProps
): Promise<{ url: string } | undefined> {
  try {
    const {
      getUploadURL: { url },
    } = await gQuery<GetUploadURLResponse>({
      query: getUploadURL,
      vars: {
        input: {
          bucket: uploadProps.bucket,
          fileName: uploadProps.fileKey + fileProps.fileName,
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
}

export async function uploadFile(
  fileProps: FileProps,
  setPercent: React.Dispatch<React.SetStateAction<number>>,
  notify: (notification: ContextNotification) => void,
  uploadProps: UploadProps,
  file: File,
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>
) {
  setPercent(0.1);
  const response = await getURL(fileProps, notify, uploadProps);
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
        setPendingFilesData((existingData) => {
          return existingData.map((existingFileData) => {
            if (existingFileData.fileName === fileProps.fileName) {
              return {
                file: existingFileData.file,
                setPercent: existingFileData.setPercent,
                isUploaded: true,
                fileName: existingFileData.fileName,
                hasFailed: existingFileData.hasFailed,
              };
            } else {
              return existingFileData;
            }
          });
        });
      } else {
        notify({
          body: `Error uploading file ${fileProps.fileName}`,
          variation: "error",
        });
      }
    } catch (err) {
      const errors = err as GraphQLError[];
      console.log("Error: " + JSON.stringify(errors[0]));
      notify({
        body: `Error uploading file ${fileProps.fileName}`,
        variation: "error",
      });
    }
  } else {
    // Update the files hasFailed
    setPendingFilesData((prev) => {
      let newPendingFilesData: FileData[] = [];
      prev.forEach((oldFileData) => {
        if (uploadProps.fileKey !== oldFileData.fileName) {
          newPendingFilesData.push(oldFileData);
        } else {
          newPendingFilesData.push({
            file: oldFileData.file,
            fileName: oldFileData.fileName,
            isUploaded: oldFileData.isUploaded,
            setPercent: oldFileData.setPercent,
            hasFailed: true,
          });
        }
      });
      return newPendingFilesData;
    });
  }
}

export async function handleMultipartUpload(
  file: File,
  setPercent: React.Dispatch<React.SetStateAction<number>>,
  fileName: string,
  uploadProps: UploadProps,
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>,
  notify: (notification: ContextNotification) => void
) {
  setPercent(0.1);
  const {
    getUploadId: { uploadId },
  } = await gQuery<GetUploadIdResponse>({
    query: getUploadId,
    vars: {
      input: {
        bucket: uploadProps.bucket,
        fileName: uploadProps.fileKey + fileName,
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
        bucket: uploadProps.bucket,
        fileName: uploadProps.fileKey + fileName,
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
    const url = urls[i];
    if (url) {
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
              bucket: uploadProps.bucket,
              fileName: uploadProps.fileKey + fileName,
              uploadId: uploadId,
            },
          },
        });
        notify({
          body: `Error uploading ${fileName}`,
          variation: `error`,
        });
        partsUploaded = 0;
        setPercent(0);
        // Update the files hasFailed
        setPendingFilesData((prev) => {
          let newPendingFilesData: FileData[] = [];
          prev.forEach((oldFileData) => {
            if (fileName !== oldFileData.fileName) {
              newPendingFilesData.push(oldFileData);
            } else {
              newPendingFilesData.push({
                file: oldFileData.file,
                fileName: oldFileData.fileName,
                isUploaded: oldFileData.isUploaded,
                setPercent: oldFileData.setPercent,
                hasFailed: true,
              });
            }
          });
          return newPendingFilesData;
        });
        return;
      } else {
        partsUploaded += 1;
        setPercent((partsUploaded / numberOfParts) * 100);
      }
    }
  }

  const {
    completeUpload: { statusCode },
  } = await gQuery<completeUploadResponse>({
    query: completeUpload,
    vars: {
      input: {
        bucket: uploadProps.bucket,
        fileName: uploadProps.fileKey + fileName,
        uploadId: uploadId,
        multipartUpload: multipartUpload,
      },
    },
  });
  if (statusCode === 200) {
    setPercent((partsUploaded / numberOfParts) * 100);
    setPendingFilesData((existingData) => {
      return existingData.map((existingFileData) => {
        if (existingFileData.fileName === fileName) {
          return {
            file: existingFileData.file,
            setPercent: existingFileData.setPercent,
            isUploaded: true,
            fileName: existingFileData.fileName,
            hasFailed: existingFileData.hasFailed,
          };
        } else {
          return existingFileData;
        }
      });
    });
  } else {
    setPercent(0);
    // Update the files hasFailed
    setPendingFilesData((prev) => {
      let newPendingFilesData: FileData[] = [];
      prev.forEach((oldFileData) => {
        if (fileName !== oldFileData.fileName) {
          newPendingFilesData.push(oldFileData);
        } else {
          newPendingFilesData.push({
            file: oldFileData.file,
            fileName: oldFileData.fileName,
            isUploaded: oldFileData.isUploaded,
            setPercent: oldFileData.setPercent,
            hasFailed: true,
          });
        }
      });
      return newPendingFilesData;
    });
    await gQuery<abortUploadResponse>({
      query: abortUpload,
      vars: {
        input: {
          bucket: uploadProps.bucket,
          fileName: uploadProps.fileKey + fileName,
          uploadId: uploadId,
        },
      },
    });
    notify({
      body: `Error uploading ${fileName}`,
      variation: `error`,
    });
  }
}
