import { Grid, TableCell, TableRow } from "@aws-amplify/ui-react";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Box, FileData } from "../index.js";
import { FileName } from "./FileName.js";
import { ProgressBar } from "./ProgressBar.js";
import { RemoveFile } from "./RemoveFile.js";
import { RenameFile } from "./RenameFile.js";

interface FileViewerProps {
  fileData: FileData;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  removeFile: Function;
  changeFileName: Function;
}

export function FileViewer(props: FileViewerProps): ReactElement {
  const { fileData, setPendingFilesData, removeFile, changeFileName } = props;
  const [percent, setPercent] = useState(0);
  const [disabled, setDisabled] = useState(true);
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
          };
        } else {
          return oldFileData;
        }
      })
    );
  }, [fileData.fileName, setPendingFilesData]);

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();

      inputRef.current.setSelectionRange(
        0,
        inputRef.current.value.lastIndexOf(".")
      );
    }
  }, [disabled]);

  return (
    <TableRow>
      <TableCell style={{ maxWidth: "100px" }}>
        <FileName
          inputRef={inputRef}
          fileName={fileData.fileName}
          isDisabled={disabled}
          changeFileName={changeFileName}
          setDisabled={setDisabled}
        />
      </TableCell>
      <TableCell style={{ maxWidth: "50px" }}>{fileData.file.size}</TableCell>
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
          maxWidth: "150px",
          textAlign: "right",
          height: "100%",
        }}
      >
        <Grid
          style={{
            gridTemplateColumns: "fit-content(100px) fit-content(50px)",
          }}
        >
          <Box
            css={{
              gridColumnStart: "1",
              gridColumnEnd: "1",
            }}
          >
            <RenameFile
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                event.stopPropagation();
                setDisabled(false);
              }}
              percent={percent}
            />
          </Box>
          <Box
            css={{
              gridColumnStart: "2",
              gridColumnEnd: "-1",
            }}
          >
            <RemoveFile
              onClick={(
                fileName: string,
                event: React.MouseEvent<HTMLElement>
              ) => {
                event.preventDefault();
                event.stopPropagation();
                if (percent === 0 || percent === 100) {
                  removeFile(fileName, event);
                }
              }}
              fileName={fileData.fileName}
            />
          </Box>
        </Grid>
      </TableCell>
    </TableRow>
  );
}
