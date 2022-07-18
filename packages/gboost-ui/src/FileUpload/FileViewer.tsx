import { Grid, TableCell, TableRow } from "@aws-amplify/ui-react";
import React, { ReactElement, useEffect, useState } from "react";
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
  return (
    <TableRow>
      <TableCell style={{ maxWidth: "100px" }}>
        <FileName
          fileName={fileData.fileName}
          isDisabled={disabled}
          changeFileName={changeFileName}
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
            />
          </Box>
          <Box
            css={{
              gridColumnStart: "2",
              gridColumnEnd: "-1",
            }}
          >
            <RemoveFile onClick={removeFile} fileName={fileData.fileName} />
          </Box>
        </Grid>
      </TableCell>
    </TableRow>
  );
}
