import { Grid, ScrollView, VisuallyHidden } from "@aws-amplify/ui-react";
import {
  ChangeEventHandler,
  DragEventHandler,
  MouseEventHandler,
  ReactElement,
} from "react";
import { Box, FileData, StyledButton, theme, styled } from "../index.js";
import { FileList } from "./FileList.js";

interface DropOutlineProps {
  inputFile: React.RefObject<HTMLInputElement>;
  handleClickUpload: ChangeEventHandler<HTMLInputElement>;
  pendingFilesData: FileData[];
  text: string;
  setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>;
  removeFile: Function;
  changeFileName: Function;
  buttonRef?: { current: { handleClick: Function } };
  handleClick: Function;
  uploading: boolean;
  allFilesComplete: Function;
  handleDrop: DragEventHandler<HTMLDivElement>;
  handleDrag: DragEventHandler<HTMLDivElement>;
  handleDragIn: DragEventHandler<HTMLDivElement>;
  handleDragOut: DragEventHandler<HTMLDivElement>;
  handleBoxClick: MouseEventHandler<HTMLDivElement>;
}

const DropOutlineBox = styled("div", {
  width: "100%",
  borderRadius: "25px",
  borderStyle: "dashed",
  borderWidth: "3px",
  alignItems: "center",
  display: "flex",
  borderColor: theme.colors.gray8,
  color: theme.colors.gray8,
});

export function DropOutline(props: DropOutlineProps): ReactElement {
  return (
    <DropOutlineBox
      onDrop={props.handleDrop}
      onDragOver={props.handleDrag}
      onDragEnter={props.handleDragIn}
      onDragExit={props.handleDragOut}
      onClick={props.handleBoxClick}
      style={{
        cursor:
          props.pendingFilesData.length > 0
            ? props.uploading
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
          ref={props.inputFile}
          onChange={props.handleClickUpload}
          type="file"
        />
      </VisuallyHidden>
      {props.pendingFilesData.length === 0 && (
        <Box css={{ width: "100%", textAlign: "center" }}>{props.text}</Box>
      )}
      {props.pendingFilesData.length > 0 && (
        <Grid
          style={{
            gridTemplateRows: "80% 20%",
            width: "100%",
            height: "100%",
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
              filesData={props.pendingFilesData}
              setPendingFilesData={props.setPendingFilesData}
              removeFile={props.removeFile}
              changeFileName={props.changeFileName}
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
            }}
          >
            {!props.buttonRef && (
              <StyledButton
                onClick={(event) => {
                  event.stopPropagation();
                  props.handleClick();
                }}
                css={{
                  height: "100%",
                  float: "left",
                  margin: "5px",
                }}
                columnStart={"2"}
                columnEnd={"-1"}
                isDisabled={
                  props.pendingFilesData.length > 0
                    ? !props.uploading
                      ? props.allFilesComplete()
                        ? true
                        : false
                      : true
                    : true
                }
              >
                Upload
              </StyledButton>
            )}
            <StyledButton
              onClick={(event) => {
                event.stopPropagation();
                props.setPendingFilesData([]);
              }}
              css={{
                height: "100%",
                float: "left",
                margin: "5px",
              }}
              isDisabled={
                props.pendingFilesData.length > 0
                  ? props.uploading
                    ? props.allFilesComplete()
                      ? false
                      : true
                    : false
                  : true
              }
            >
              Clear
            </StyledButton>
          </Box>
        </Grid>
      )}
    </DropOutlineBox>
  );
}
