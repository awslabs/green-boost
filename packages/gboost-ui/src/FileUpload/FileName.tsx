import { TextField } from "@aws-amplify/ui-react";
import { ReactElement, useState } from "react";
import { useNotifications } from "../index.js";

interface FileNameProps {
  fileName: string;
  isDisabled: boolean;
  changeFileName: Function;
}

export function FileName(props: FileNameProps): ReactElement {
  const { fileName, isDisabled, changeFileName } = props;
  const [inputText, setInputText] = useState(fileName);
  const { notify } = useNotifications();
  return (
    <TextField
      isDisabled={isDisabled}
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
      }}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onChange={(event: React.FormEvent<HTMLInputElement>) => {
        setInputText(event.currentTarget.value);
      }}
    />
  );
}
