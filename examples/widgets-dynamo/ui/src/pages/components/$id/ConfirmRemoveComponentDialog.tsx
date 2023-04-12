import { ReactElement } from "react";
import { Dialog, useNotifications } from "gboost-ui";
import { Button, ButtonGroup, Flex, Text } from "@aws-amplify/ui-react";
import { trpc } from "src/trpc.js";
import { Component } from "@myapp/core/models";
import { useNavigate } from "react-router-dom";

interface ConfirmRemoveMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  component: Component;
}

export function ConfirmRemoveComponentDialog(
  props: ConfirmRemoveMemberDialogProps
): ReactElement {
  const { open, onClose, onOpenChange, component } = props;
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const remove = trpc.component.remove.useMutation({
    onSuccess: () => {
      notify({
        variation: "success",
        body: `Successfully removed ${component.name}`,
      });
      navigate("..");
    },
    onError: (err) => {
      notify({
        variation: "error",
        body: `Error removing ${component.name}`,
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
        <Text>{`Are you sure you want to remove ${component.name} ?`}</Text>
        <ButtonGroup justifyContent="end">
          <Button backgroundColor="background.success" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variation="destructive"
            backgroundColor="background.error"
            onClick={() => remove.mutate({ id: component.id })}
            isLoading={remove.isLoading}
          >
            Confirm
          </Button>
        </ButtonGroup>
      </Flex>
    </Dialog>
  );
}
