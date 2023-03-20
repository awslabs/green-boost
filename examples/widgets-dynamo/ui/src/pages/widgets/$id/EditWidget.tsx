import { ReactElement, useCallback, useMemo, useState } from "react";
import { useNotifications } from "gboost-ui";
import { Link, useNavigate, useParams } from "react-router-dom";
import { trpc } from "src/trpc.js";
import { WidgetForm } from "../WidgetForm.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WidgetStep } from "@myapp/core/models";
import { z } from "zod";
import { UpdateWidgetSchema, updateWidgetSchema } from "@myapp/core/schemas";
import { Button, ButtonGroup } from "@aws-amplify/ui-react";
import { getLocalDateTimeInputValue } from "src/utils/date.js";
import { ConfirmRemoveWidgetDialog } from "./ConfirmRemoveWidgetDialog.js";

const schema = updateWidgetSchema.required().extend({
  expirationDate: z
    .string()
    .transform((v) => new Date(v).toISOString())
    .refine((v) => new Date(v) > new Date(), {
      message: "Must be future date",
    }),
  description: z.string().optional(),
});
type Schema = z.infer<typeof schema>;

export function EditWidget(): ReactElement {
  const { id } = useParams() as { id: string };
  const get = trpc.widget.get.useQuery({ id });
  const oldWidget = useMemo(() => {
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
      step: WidgetStep.Step1,
    },
    values: oldWidget,
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const updateMutation = trpc.widget.update.useMutation({
    onError(err) {
      console.error(err);
      notify({
        body: "Error updating widget",
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
      updateMutation.mutate(dirtyPayload as UpdateWidgetSchema);
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
        isLoading={updateMutation.isLoading}
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
      <WidgetForm
        action={"Edit"}
        actionElement={actionElement}
        control={control}
        isLoading={get.isLoading}
      />
      {oldWidget && (
        <ConfirmRemoveWidgetDialog
          open={open}
          onClose={() => setOpen(false)}
          onOpenChange={(o) => setOpen(o)}
          widget={oldWidget}
        />
      )}
    </>
  );
}
