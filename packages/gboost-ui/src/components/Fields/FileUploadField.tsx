import {
  FieldGroupIcon,
  Icon,
  TextField,
  type TextFieldProps,
} from "@aws-amplify/ui-react";
import { useId, useMergedRef } from "@mantine/hooks";
import {
  type ChangeEventHandler,
  type ForwardedRef,
  forwardRef,
  type InputHTMLAttributes,
  type KeyboardEventHandler,
  type ReactElement,
  type RefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { MdUpload } from "react-icons/md";
import { styled } from "../../index.js";

const Container = styled("div", {
  cursor: "pointer",
});
const UploadIcon = styled(Icon, {
  fontSize: "$6",
});

/**
 * @deprecated
 */
export type FileUploadFieldProps = Omit<TextFieldProps, "value"> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "value"> & {
    value?: FileList | null;
  };

/**
 * @deprecated
 */
export function IFileUploadField(
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
        /* 
        The browser natively does not trigger an onchange event
        when the same file name is uploaded multiple times, so
        this workaround forces the onchange event to always trigger.
        https://stackoverflow.com/questions/4109276/how-to-detect-input-type-file-change-for-the-same-file
        */
        onClick={(e) => (e.currentTarget.value = "")}
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
/**
 * @deprecated
 */
export const FileUploadField = forwardRef(IFileUploadField) as (
  props: FileUploadFieldProps & { ref?: ForwardedRef<HTMLInputElement> }
) => ReactElement;
