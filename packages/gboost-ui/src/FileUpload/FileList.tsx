import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { FileData } from "./FileUpload.js";
import { FileViewer } from "./FileViewer.js";

interface FileListProps {
  filesData: FileData[];
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  removeFile: Function;
  changeFileName: Function;
}

export function FileList(props: FileListProps): ReactElement {
  const { filesData, setPendingFilesData, removeFile, changeFileName } = props;
  return (
    <Table variation="striped" size="small">
      <TableHead>
        <TableRow>
          <TableCell as="th">File</TableCell>
          <TableCell as="th">Size</TableCell>
          <TableCell as="th">Progress</TableCell>
          <TableCell as="th" style={{ width: "150px" }}>
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filesData.map((fileData) => (
          <FileViewer
            key={fileData.fileName}
            fileData={fileData}
            setPendingFilesData={setPendingFilesData}
            removeFile={removeFile}
            changeFileName={changeFileName}
          ></FileViewer>
        ))}
      </TableBody>
    </Table>
  );
}
