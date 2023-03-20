import { ReactElement } from "react";
import { Dialog, useNotifications } from "gboost-ui";
import { Button, ButtonGroup, Flex, Text } from "@aws-amplify/ui-react";
import { trpc } from "src/trpc.js";
import { Widget } from "@myapp/core/models";
import { useNavigate } from "react-router-dom";

interface ConfirmRemoveMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  widget: Widget;
}

export function ConfirmRemoveWidgetDialog(
  props: ConfirmRemoveMemberDialogProps
): ReactElement {
  const { open, onClose, onOpenChange, widget } = props;
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const remove = trpc.widget.remove.useMutation({
    onSuccess: () => {
      notify({
        variation: "success",
        body: `Successfully removed ${widget.name}`,
      });
      navigate("..");
    },
    onError: (err) => {
      notify({
        variation: "error",
        body: `Error removing ${widget.name}`,
      });
    },
  });
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Remove Widget Confirmation"
      maxWidth="500px"
    >
      <Flex direction="column" gap="medium">
        <Text>{`Are you sure you want to remove ${widget.name} ?`}</Text>
        <ButtonGroup justifyContent="end">
          <Button backgroundColor="background.success" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variation="destructive"
            backgroundColor="background.error"
            onClick={() => remove.mutate({ id: widget.id })}
            isLoading={remove.isLoading}
          >
            Confirm
          </Button>
        </ButtonGroup>
      </Flex>
    </Dialog>
  );
}
