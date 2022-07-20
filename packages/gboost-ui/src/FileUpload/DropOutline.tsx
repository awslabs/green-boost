import { Grid, ScrollView, VisuallyHidden } from "@aws-amplify/ui-react";
import {
  ChangeEventHandler,
  DragEventHandler,
  MouseEventHandler,
  ReactElement,
  useCallback,
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
  color: theme.colors.blackA9,
  backgroundColor: "$gray3",
});

export function DropOutline(props: DropOutlineProps): ReactElement {
  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      // If all currently displayed files are finished uploading, clear them then add new files
      if (props.pendingFilesData.length > 0) {
        if (props.allFilesComplete()) {
          props.setPendingFilesData([]);
        }
      }
    },
    [props]
  );

  const handleDragOut = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  return (
    <DropOutlineBox
      onDrop={props.handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDragIn}
      onDragExit={handleDragOut}
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
              position: "relative",
            }}
          >
            <Box
              css={{
                position: "absolute",
                bottom: "5px",
                left: "5px",
              }}
            >
              {!props.buttonRef && (
                <StyledButton
                  onClick={(event) => {
                    event.stopPropagation();
                    props.handleClick();
                  }}
                  css={{
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
          </Box>
        </Grid>
      )}
    </DropOutlineBox>
  );
}
