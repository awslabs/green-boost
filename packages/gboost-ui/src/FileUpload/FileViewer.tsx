import { TableCell, TableRow } from "@aws-amplify/ui-react";
import React, { type ReactElement, useEffect, useRef, useState } from "react";
import { Box } from "../index.js";
import { FileName } from "./FileName.js";
import { ProgressBar } from "./ProgressBar.js";
import { RemoveFile } from "./RemoveFile.js";
import { type FileData } from "./index.js";

interface FileViewerProps {
  fileData: FileData;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  removeFile: (fileName: string, event: React.MouseEvent) => void;
  changeFileName: (oldFileName: string, newFileName: string) => boolean;
}
/**
 * @deprecated
 */
export function FileViewer(props: FileViewerProps): ReactElement {
  const { fileData, setPendingFilesData, removeFile, changeFileName } = props;
  const [percent, setPercent] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setPendingFilesData((existingData) =>
      existingData.map((oldFileData) => {
        if (oldFileData.fileName === fileData.fileName) {
          return {
            file: oldFileData.file,
            setPercent: setPercent,
            isUploaded: oldFileData.isUploaded,
            fileName: oldFileData.fileName,
            hasFailed: oldFileData.hasFailed,
          };
        } else {
          return oldFileData;
        }
      }),
    );
  }, [fileData.fileName, setPendingFilesData]);

  return (
    <TableRow>
      <TableCell style={{ maxWidth: "100px" }}>
        <FileName
          inputRef={inputRef}
          fileName={fileData.fileName}
          isDisabled={percent > 0 ? true : false}
          changeFileName={changeFileName}
        />
      </TableCell>
      <TableCell style={{ maxWidth: "50px" }}>
        {toReadableString(fileData.file.size)}
      </TableCell>
      <TableCell
        style={{
          textAlign: "center",
          height: "100%",
        }}
      >
        <Box
          css={{
            visibility: percent > 0 ? `visible` : `hidden`,
            width: "100%",
          }}
        >
          <ProgressBar progress={percent} />
        </Box>
      </TableCell>
      <TableCell
        style={{
          width: "fit-content",
          position: "relative",
          height: "100%",
        }}
      >
        <RemoveFile
          onClick={(fileName: string, event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            if (percent === 0 || percent === 100) {
              removeFile(fileName, event);
            }
          }}
          fileName={fileData.fileName}
        />
      </TableCell>
    </TableRow>
  );
}
function toReadableString(size: number): string {
  const units = ["Bytes", "KB", "MB", "GB", "TB"];
  let divisions = 0;
  while (size > 1024) {
    size /= 1024;
    divisions++;
  }
  return `${Math.round(size * 100) / 100} ${units[divisions]}`;
}
