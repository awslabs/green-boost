import { Grid, Text } from "@aws-amplify/ui-react";
import { ReactElement, useEffect, useState } from "react";
import { Box, FileData, theme } from "../index.js";
import { ProgressBar } from "./ProgressBar.js";

interface FileViewerProps {
  fileData: FileData;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
}

export function FileViewer(props: FileViewerProps): ReactElement {
  const { fileData, setPendingFilesData } = props;
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
    <Box
      css={{
        height: "5%",
        width: "100%",
      }}
    >
      <Grid
        style={{
          borderBottom: `1px solid ${theme.colors.gray8}`,
          gridTemplateColumns: "2fr 3fr",
        }}
      >
        <Text columnStart={1} columnEnd={2} isTruncated={true}>
          {fileData.file.name}
        </Text>
        <Box
          css={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            css={{
              height: "85%",
              width: "100%",
              visibility: percent > 0 ? `visible` : `hidden`,
            }}
          >
            <ProgressBar
              columnStart={3}
              columnEnd={-1}
              progress={percent}
            ></ProgressBar>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
