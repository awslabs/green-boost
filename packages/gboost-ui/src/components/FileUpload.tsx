import { styled } from "../index.js";
import { ReactElement, useRef } from "react";
import { theme } from "../stitches.config.js";
import React from "react";
import { VisuallyHidden } from "@aws-amplify/ui-react";

const DropOutline = styled("div", {
  padding: "25%",
  width: "100%",
  aspectRatio: "5/3",
  borderRadius: "25px",
  borderStyle: "dashed",
  borderWidth: "3px",
  textAlign: "center",
  justifyContent: "center",
  borderColor: theme.colors.gray8,
  color: theme.colors.gray7,
  cursor: "pointer",
});

interface FileUploadProps {
  fileType: String[] | String; //Represented as lowercase file extensions eg 'pdf'
  deactivated?: boolean;
  maxFileSize?: Number;
  maxFiles?: Number;
}

export function FileUpload(props: FileUploadProps): ReactElement {
  const {
    fileType,
    maxFileSize = 5497558138880,
    deactivated = false,
    maxFiles = 0,
  } = props;
  const inputFile = useRef<HTMLInputElement>(null);

  function handleUpload(files: FileList) {
    if (!deactivated) {
      // maxFiles<=0 is treated as no file limit
      if (maxFiles <= 0 || files.length <= maxFiles) {
        for (var i = 0; i < files.length; i++) {
          if (files[i].size <= maxFileSize) {
            //TODO: handle upload
            let isSupported = false;
            const parts = files[i].name.split(".");
            const extension = parts[parts.length - 1].toLowerCase();
            if (Array.isArray(fileType)) {
              if (fileType.includes(extension)) {
                isSupported = true;
              }
            } else if (fileType === extension) {
              isSupported = true;
            }

            if (isSupported) {
              console.log(files[i].name + "\n");
            } else {
              console.log("Type " + extension + " is not accepted.");
            }
          } else {
            //TODO: add error notification for file being too large
            console.log("Too big: " + files[i].size + ">" + maxFileSize);
          }
        }
      } else {
        //TODO: add error notification for too many files
        console.log("Too may files");
      }
    } else {
      console.log("Deactivated");
    }
  }

  function handleClickUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (files && files.length > 0) {
      handleUpload(files);
    }
  }

  function handleClick() {
    if (inputFile.current) {
      inputFile.current.click();
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files);
    }
  }

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragIn(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragOut(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <DropOutline
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDragIn}
      onDragExit={handleDragOut}
      onClick={handleClick}
      draggable
    >
      <VisuallyHidden>
        <input
          multiple
          ref={inputFile}
          onChange={handleClickUpload}
          type="file"
        />
      </VisuallyHidden>
      Drop {Array.isArray(fileType) ? fileType.join(", ") : fileType} files here
    </DropOutline>
  );
}
