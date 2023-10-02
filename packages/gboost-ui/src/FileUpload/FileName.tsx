import { TextField } from "@aws-amplify/ui-react";
import {
  type ReactElement,
  useState,
  type MouseEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { styled, useNotifications } from "../index.js";

interface FileNameProps {
  fileName: string;
  isDisabled: boolean;
  changeFileName: (oldFileName: string, newFileName: string) => boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const StyledTextField = styled(TextField, {
  backgroundColor: "$gray5",
  borderStyle: "none",
  "&:focus-within": {
    backgroundColor: "$gray1",
  },
});
/**
 * @deprecated
 */
export function FileName(props: FileNameProps): ReactElement {
  const { fileName, isDisabled, changeFileName } = props;
  const [inputText, setInputText] = useState(fileName);
  const { notify } = useNotifications();
  return (
    <StyledTextField
      crossOrigin
      isDisabled={isDisabled}
      ref={props.inputRef}
      labelHidden={true}
      label={""}
      defaultValue={fileName}
      onBlur={() => {
        if (!changeFileName(fileName, inputText)) {
          notify({
            body: `${inputText} already exists.`,
            variation: `error`,
          });
        }
      }}
      onClick={(event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onChange={(event: FormEvent<HTMLInputElement>) => {
        setInputText(event.currentTarget.value);
      }}
      onKeyDown={(event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === "Escape") {
          if (props.inputRef.current) {
            props.inputRef.current.blur();
          }
        }
      }}
    />
  );
}
