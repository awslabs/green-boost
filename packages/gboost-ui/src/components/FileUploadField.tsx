import {
  FieldGroupIcon,
  Icon,
  TextField,
  TextFieldProps,
} from "@aws-amplify/ui-react";
import { useId, useMergedRef } from "@mantine/hooks";
import {
  ChangeEventHandler,
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
  ReactElement,
  RefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { MdUpload } from "react-icons/md";
import { styled } from "../index.js";

const Container = styled("div", {
  cursor: "pointer",
});
const UploadIcon = styled(Icon, {
  fontSize: "$6",
});

export interface FileUploadFieldProps extends Omit<TextFieldProps, "value"> {
  accept?: string;
  capture?: "user" | "environment";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  multiple?: boolean;
  value?: FileList | null;
}

export function _FileUploadField(
  props: FileUploadFieldProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const { id: _id, onChange, value, ...textFieldProps } = props;
  const id = useId(_id);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const refs: (ForwardedRef<HTMLInputElement> | RefObject<HTMLInputElement>)[] =
    [fileInputRef];
  if (ref) refs.push(ref);
  const mergedRef = useMergedRef(...refs);
  const [uncontrolledValue, setUncontrolledValue] = useState<FileList | null>(
    null
  );
  const uncontrolledOnChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setUncontrolledValue(e.target.files);
    }, []);
  const fileNames = useMemo(() => {
    const _fileNames: string[] = [];
    if (value) {
      for (const file of value) {
        _fileNames.push(file.name);
      }
    } else if (uncontrolledValue) {
      for (const file of uncontrolledValue) {
        _fileNames.push(file.name);
      }
    }
    return _fileNames.join(", ");
  }, [uncontrolledValue, value]);
  const handleSelectFile = useCallback(() => fileInputRef.current?.click(), []);
  const handleKeyPress: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.key === "Enter") fileInputRef.current?.click();
    },
    []
  );
  return (
    <Container onClick={handleSelectFile} onKeyUp={handleKeyPress}>
      <input
        ref={mergedRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChange || uncontrolledOnChange}
      />
      <TextField
        {...textFieldProps}
        id={id}
        isReadOnly
        innerEndComponent={
          <FieldGroupIcon ariaLabel="upload">
            <UploadIcon as={MdUpload} />
          </FieldGroupIcon>
        }
        value={fileNames}
      />
    </Container>
  );
}

// https://fettblog.eu/typescript-react-generic-forward-refs/#option-1%3A-type-assertion
export const FileUploadField = forwardRef(_FileUploadField) as (
  props: FileUploadFieldProps & { ref?: ForwardedRef<HTMLInputElement> }
) => ReactElement;
