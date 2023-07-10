import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { type ReactElement } from "react";
import { type FileData } from "./FileUpload.js";
import { FileViewer } from "./FileViewer.js";

interface FileListProps {
  filesData: FileData[];
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  removeFile: (fileName: string, event: React.MouseEvent) => void;
  changeFileName: (oldFileName: string, newFileName: string) => boolean;
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
