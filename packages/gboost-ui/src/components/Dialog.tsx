import { type ReactElement } from "react";
import { Heading, Icon } from "@aws-amplify/ui-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";
import { keyframes, styled, Box, type CSS } from "../index.js";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  bc: "$blackA9",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});
const StyledIcon = styled(Icon, { cursor: "pointer" });

interface BaseDialogProps {
  children: ReactElement;
  /**
   * Optional accessible description
   */
  description?: string;
  /**
   * Title of dialog
   */
  title?: string;
  maxWidth?: string;
  css?: CSS;
}
interface UncontrolledDialogProps extends BaseDialogProps {
  trigger: ReactElement;
}
interface ControlledDialogProps extends BaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
type DialogProps = UncontrolledDialogProps | ControlledDialogProps;

/**
 * Dialog for showing auxiliary content. Try to limit use of dialogs. Prefer
 * nested pages where possible
 * @deprecated
 */
export function Dialog(props: DialogProps): ReactElement {
  const { children, css, description, title, maxWidth } = props;
  let trigger: ReactElement | undefined = undefined;
  let open: boolean | undefined = undefined;
  let onOpenChange: ((open: boolean) => void) | undefined = undefined;
  if ("trigger" in props) {
    trigger = props.trigger;
  } else {
    open = props.open as boolean;
    onOpenChange = props.onOpenChange as (open: boolean) => void;
  }
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      )}
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent
          aria-describedby={description}
          css={{ ...css, maxWidth }}
        >
          <>
            {title && (
              <Box
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: "$3",
                }}
              >
                <div />
                <Heading level={4}>{title}</Heading>
                <DialogPrimitive.Close asChild>
                  <span>
                    <StyledIcon aria-label="close" as={MdClose} />
                  </span>
                </DialogPrimitive.Close>
              </Box>
            )}
            {children}
          </>
        </StyledContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
