// @ts-nocheck
import { ReactElement, useCallback, useMemo, useState } from "react";
import { useNotifications } from "gboost-ui";
import { Link, useNavigate, useParams } from "react-router-dom";
import { trpc } from "src/trpc.js";
import { ItemForm } from "../ItemForm.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ItemStep } from "@{{GB_APP_ID}}/core/models";
import { z } from "zod";
import { UpdateItemSchema, updateItemSchema } from "@{{GB_APP_ID}}/core/schemas";
import { Button, ButtonGroup } from "@aws-amplify/ui-react";
import { getLocalDateTimeInputValue } from "src/utils/date.js";
import { ConfirmRemoveItemDialog } from "./ConfirmRemoveItemDialog.js";

const schema = updateItemSchema.required().extend({
  expirationDate: z
    .string()
    .transform((v) => new Date(v).toISOString())
    .refine((v) => new Date(v) > new Date(), {
      message: "Must be future date",
    }),
  description: z.string().optional(),
});
type Schema = z.infer<typeof schema>;

export function EditItem(): ReactElement {
  const { id } = useParams() as { id: string };
  const get = trpc.item.get.useQuery({ id });
  const oldItem = useMemo(() => {
    if (get.data) {
      return {
        ...get.data,
        expirationDate: getLocalDateTimeInputValue(get.data.expirationDate),
      };
    }
  }, [get.data]);
  const { control, formState, handleSubmit, getValues } = useForm<Schema>({
    defaultValues: {
      id: "",
      name: "",
      description: "",
      active: true,
      expirationDate: "",
      price: 0,
      rating: 3,
      step: ItemStep.Step1,
    },
    values: oldItem,
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const updateMutation = trpc.item.update.useMutation({
    onError(err) {
      console.error(err);
      notify({
        body: "Error updating item",
        variation: "error",
      });
    },
    onSuccess() {
      notify({
        body: `Successfully updated: ${getValues("name")}`,
        variation: "success",
      });
      navigate("..");
    },
  });
  const update = useCallback(
    (d: Schema) => {
      const dirtyPayload: Record<string, unknown> = { id };
      for (const k of Object.keys(d) as (keyof Schema)[]) {
        if (formState.dirtyFields[k]) {
          dirtyPayload[k] = d[k];
        }
      }
      updateMutation.mutate(dirtyPayload as UpdateItemSchema);
    },
    [formState.dirtyFields, id, updateMutation]
  );
  const [open, setOpen] = useState(false);
  const actionElement = (
    <ButtonGroup justifyContent="center">
      <Link to="..">
        <Button backgroundColor="background.info">Cancel</Button>
      </Link>
      <Button
        variation="destructive"
        backgroundColor="background.error"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>
      <Button
        backgroundColor="background.success"
        isLoading={updateMutation.isLoading}
        onClick={handleSubmit(update)}
      >
        Update
      </Button>
    </ButtonGroup>
  );
  return (
    <>
      <ItemForm
        action={"Edit"}
        actionElement={actionElement}
        control={control}
        isLoading={get.isLoading}
      />
      {oldItem && (
        <ConfirmRemoveItemDialog
          open={open}
          onClose={() => setOpen(false)}
          onOpenChange={(o) => setOpen(o)}
          item={oldItem}
        />
      )}
    </>
  );
}
