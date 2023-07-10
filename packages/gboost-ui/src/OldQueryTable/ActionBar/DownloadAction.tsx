import { type ReactElement } from "react";
import { Button, Icon } from "@aws-amplify/ui-react";
import { MdDownload } from "react-icons/md";

interface DownloadActionProps {
  downloadFileName: string;
  rows: Record<string, string>[];
}

function downloadCsv(rows: Record<string, string>[], fileName: string): void {
  const csvHeaders = Object.keys(rows[0] || []).join(",") + "\n";
  const csvBody = rows.map((r) => Object.values(r).join(",")).join("\n");
  const csvString = "data:text/csv;charset=utf-8," + csvHeaders + csvBody;
  const encodedUri = encodeURI(csvString);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
}

export function DownloadAction({
  downloadFileName,
  rows,
}: DownloadActionProps): ReactElement {
  return (
    <Button size="large" onClick={() => downloadCsv(rows, downloadFileName)}>
      <Icon ariaLabel="download" as={MdDownload} />
    </Button>
  );
}
