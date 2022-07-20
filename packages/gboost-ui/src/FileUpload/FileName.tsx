import { TextField } from "@aws-amplify/ui-react";
import { ReactElement, useState } from "react";
import { useNotifications } from "../index.js";

interface FileNameProps {
  fileName: string;
  isDisabled: boolean;
  changeFileName: Function;
  inputRef: React.RefObject<HTMLInputElement>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FileName(props: FileNameProps): ReactElement {
  const { fileName, isDisabled, changeFileName, setDisabled } = props;
  const [inputText, setInputText] = useState(fileName);
  const { notify } = useNotifications();
  return (
    <TextField
      isDisabled={isDisabled}
      ref={props.inputRef}
      labelHidden={true}
      label={""}
      defaultValue={fileName}
      onBlur={(event: React.FocusEvent<HTMLElement>) => {
        if (!changeFileName(fileName, inputText)) {
          notify({
            body: `${inputText} already exists.`,
            variation: `error`,
          });
        }
        setDisabled(true);
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
