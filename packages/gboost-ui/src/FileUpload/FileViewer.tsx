import { TableCell, TableRow, Text } from "@aws-amplify/ui-react";
import { ReactElement, useEffect, useState } from "react";
import { Box, FileData } from "../index.js";
import { ProgressBar } from "./ProgressBar.js";
import { RemoveFile } from "./RemoveFile.js";

interface FileViewerProps {
  fileData: FileData;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  removeFile: Function;
}

export function FileViewer(props: FileViewerProps): ReactElement {
  const { fileData, setPendingFilesData, removeFile } = props;
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPendingFilesData((existingData) =>
      existingData.map((oldFileData) => {
        if (oldFileData.file.name === fileData.file.name) {
          return {
            file: oldFileData.file,
            setPercent: setPercent,
            isUploaded: oldFileData.isUploaded,
          };
        } else {
          return {
            file: oldFileData.file,
            setPercent: oldFileData.setPercent,
            isUploaded: oldFileData.isUploaded,
          };
        }
      })
    );
  }, [fileData.file, setPendingFilesData]);
  return (
    <TableRow>
      <TableCell style={{ maxWidth: "100px" }}>
        <Text isTruncated={true}>{fileData.file.name}</Text>
      </TableCell>
      <TableCell style={{ maxWidth: "50px" }}>{fileData.file.size}</TableCell>
      <TableCell
        style={{
          alignItems: "center",
          display: "flex",
          alignContent: "center",
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
      <TableCell>
        <RemoveFile onClick={removeFile} fileName={fileData.file.name} />
      </TableCell>
    </TableRow>
  );
}
