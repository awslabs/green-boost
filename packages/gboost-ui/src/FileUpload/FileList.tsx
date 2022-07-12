import { Grid, Text } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { Box, theme } from "../index.js";
import { FileData } from "./FileUpload.js";
import { FileViewer } from "./FileViewer.js";

interface FileListProps {
  filesData: FileData[];
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
}

export function FileList(props: FileListProps): ReactElement {
  const { filesData, setPendingFilesData } = props;
  return (
    <Grid
      style={{
        marginLeft: "1%",
        marginRight: "1%",
        width: "98%",
      }}
    >
      <Grid
        style={{
          borderBottom: `1px solid ${theme.colors.gray8}`,
          gridTemplateColumns: "2fr 3fr",
        }}
      >
        <Text columnStart={1} columnEnd={2} style={{ textAlign: "center" }}>
          File
        </Text>
        <Box
          css={{
            height: "100%",
            width: "100%",
          }}
        >
          <Text style={{ textAlign: "center" }}>Progress</Text>
        </Box>
      </Grid>
      {filesData.map((fileData) => (
        <FileViewer
          key={fileData.file.name}
          fileData={fileData}
          setPendingFilesData={setPendingFilesData}
        />
      ))}
    </Grid>
  );
}
