import { ScrollView } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { Box } from "../index.js";

interface FileViewerProps {
  files: File[];
}

export function FileViewer(props: FileViewerProps): ReactElement {
  const { files } = props;
  return (
    <ScrollView
      style={{
        width: "80%",
        height: "100%",
        float: "left",
        margin: "5px",
        borderWidth: "1px",
      }}
    >
      {files.map((file) => (
        <Box key={file.name}>{file.name}</Box>
      ))}
    </ScrollView>
  );
}
