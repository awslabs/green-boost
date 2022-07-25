import { Grid, ScrollView, VisuallyHidden } from "@aws-amplify/ui-react";
import React, {
  ChangeEventHandler,
  DragEventHandler,
  MouseEventHandler,
  ReactElement,
  useCallback,
} from "react";
import { Box, FileData, theme, styled } from "../index.js";
import { ActionButtons } from "./ActionButtons.js";
import { FileList } from "./FileList.js";
import { CustomActionButtonProps } from "./CustomActionButtons.js";

interface DropOutlineProps {
  inputFile: React.RefObject<HTMLInputElement>;
  handleClickUpload: ChangeEventHandler<HTMLInputElement>;
  pendingFilesData: FileData[];
  text: string;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  removeFile: (fileName: string, event: React.MouseEvent) => void;
  changeFileName: (oldFileName: string, newFileName: string) => boolean;
  handleClick: (event: React.MouseEvent) => void;
  uploading: boolean;
  allFilesComplete: () => boolean;
  handleDrop: DragEventHandler<HTMLDivElement>;
  handleBoxClick: MouseEventHandler<HTMLDivElement>;
  onSubmit?: (event: React.MouseEvent) => void;
  onClear?: (event: React.MouseEvent) => void;
  Buttons?: (props: CustomActionButtonProps) => ReactElement;
}

const DropOutlineBox = styled("div", {
  width: "100%",
  borderRadius: "25px",
  borderStyle: "dashed",
  borderWidth: "3px",
  alignItems: "center",
  display: "flex",
  borderColor: theme.colors.gray8,
  color: theme.colors.blackA9,
  backgroundColor: theme.colors.gray3,
});

export function DropOutline(props: DropOutlineProps): ReactElement {
  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const {
    inputFile,
    handleClickUpload,
    pendingFilesData,
    text,
    setPendingFilesData,
    removeFile,
    changeFileName,
    handleClick,
    uploading,
    allFilesComplete,
    handleDrop,
    handleBoxClick,
    onSubmit,
    onClear,
    Buttons,
  } = props;

  const handleDragIn = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      // If all currently displayed files are finished uploading, clear them then add new files
      if (pendingFilesData.length > 0) {
        if (allFilesComplete()) {
          setPendingFilesData([]);
        }
      }
    },
    [allFilesComplete, pendingFilesData.length, setPendingFilesData]
  );

  const handleDragOut = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  let handleClear: (event: React.MouseEvent) => void;
  if (onClear) {
    handleClear = onClear;
  } else {
    handleClear = (event: React.MouseEvent) => {
      event.stopPropagation();
      setPendingFilesData([]);
    };
  }

  let handleUpload: (event: React.MouseEvent) => void;
  if (onSubmit) {
    handleUpload = onSubmit;
  } else {
    handleUpload = handleClick;
  }

  let buttons: ReactElement;
  if (Buttons) {
    buttons = (
      <Box
        css={{
          position: "absolute",
          bottom: "5px",
          left: "5px",
        }}
      >
        <Buttons handleUpload={handleUpload} handleClear={handleClear} />
      </Box>
    );
  } else {
    buttons = (
      <ActionButtons
        handleClick={handleUpload}
        handleClear={handleClear}
        pendingFilesData={pendingFilesData}
        allFilesComplete={allFilesComplete}
        uploading={uploading}
      />
    );
  }

  return (
    <DropOutlineBox
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDragIn}
      onDragExit={handleDragOut}
      onClick={handleBoxClick}
      style={{
        cursor:
          pendingFilesData.length > 0
            ? uploading
              ? `wait`
              : `pointer`
            : `pointer`,
        justifyContent: "center",
        height: "100%",
      }}
    >
      <VisuallyHidden>
        <input
          multiple
          ref={inputFile}
          onChange={handleClickUpload}
          type="file"
        />
      </VisuallyHidden>
      {pendingFilesData.length === 0 && (
        <Box css={{ width: "100%", textAlign: "center" }}>{text}</Box>
      )}
      {pendingFilesData.length > 0 && (
        <Grid
          style={{
            gridTemplateRows: "fit-content(80%) auto",
            width: "100%",
            height: "100%",
            paddingTop: "20px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          <ScrollView
            style={{
              height: "100%",
              width: "100%",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
            rowStart={1}
            rowEnd={1}
          >
            <FileList
              filesData={pendingFilesData}
              setPendingFilesData={setPendingFilesData}
              removeFile={removeFile}
              changeFileName={changeFileName}
            />
          </ScrollView>
          <Box
            css={{
              height: "100%",
              padding: "1%",
              width: "100%",
              textAlign: "left",
              gridRowStart: "2",
              gridRowEnd: "-1",
              position: "relative",
            }}
          >
            {buttons}
          </Box>
        </Grid>
      )}
    </DropOutlineBox>
  );
}
