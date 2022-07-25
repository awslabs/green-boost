import { TextField } from "@aws-amplify/ui-react";
import * as Stitches from "@stitches/react";
import React, { ReactElement, useState } from "react";
import { styled, theme, useNotifications } from "../index.js";

interface FileNameProps {
  fileName: string;
  isDisabled: boolean;
  changeFileName: (oldFileName: string, newFileName: string) => boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const StyledTextField = styled(TextField, {});

export function FileName(props: FileNameProps): ReactElement {
  const { fileName, isDisabled, changeFileName } = props;
  const [inputText, setInputText] = useState(fileName);
  const [style, setStyle] = useState<Stitches.CSS>({
    backgroundColor: theme.colors.gray3,
    borderStyle: "none",
  });
  const { notify } = useNotifications();
  return (
    <StyledTextField
      isDisabled={isDisabled}
      ref={props.inputRef}
      labelHidden={true}
      label={""}
      defaultValue={fileName}
      css={style}
      onBlur={(event: React.FocusEvent<HTMLElement>) => {
        if (!changeFileName(fileName, inputText)) {
          notify({
            body: `${inputText} already exists.`,
            variation: `error`,
          });
        }
        setStyle({
          backgroundColor: theme.colors.gray5,
          border: "none",
        });
      }}
      onFocus={() => {
        setStyle({});
      }}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onChange={(event: React.FormEvent<HTMLInputElement>) => {
        setInputText(event.currentTarget.value);
      }}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === "Escape") {
          if (props.inputRef.current) {
            props.inputRef.current.blur();
          }
        }
      }}
    />
  );
}
