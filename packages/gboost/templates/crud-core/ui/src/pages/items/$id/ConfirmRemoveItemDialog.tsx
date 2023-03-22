// @ts-nocheck
import { ReactElement } from "react";
import { Dialog, useNotifications } from "gboost-ui";
import { Button, ButtonGroup, Flex, Text } from "@aws-amplify/ui-react";
import { trpc } from "src/trpc.js";
import { Item } from "@{{GB_APP_ID}}/core/models";
import { useNavigate } from "react-router-dom";

interface ConfirmRemoveItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  item: Item;
}

export function ConfirmRemoveItemDialog(
  props: ConfirmRemoveItemDialogProps
): ReactElement {
  const { open, onClose, onOpenChange, item } = props;
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const remove = trpc.item.remove.useMutation({
    onSuccess: () => {
      notify({
        variation: "success",
        body: `Successfully removed ${item.name}`,
      });
      navigate("..");
    },
    onError: (err) => {
      notify({
        variation: "error",
        body: `Error removing ${item.name}`,
      });
    },
  });
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Remove Item Confirmation"
      maxWidth="500px"
    >
      <Flex direction="column" gap="medium">
        <Text>{`Are you sure you want to remove ${item.name} ?`}</Text>
        <ButtonGroup justifyContent="end">
          <Button backgroundColor="background.success" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variation="destructive"
            backgroundColor="background.error"
            onClick={() => remove.mutate({ id: item.id })}
            isLoading={remove.isLoading}
          >
            Confirm
          </Button>
        </ButtonGroup>
      </Flex>
    </Dialog>
  );
}
