import { z } from "zod";
import {
  createComponentSchema,
  UpdateComponentSchema,
  updateComponentSchema,
} from "@myapp/core/schemas";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useNotifications } from "gboost-ui";
import { trpc } from "src/trpc.js";
import { Button, ButtonGroup } from "@aws-amplify/ui-react";
import { ComponentsForm } from "../ComponentsForm.js";
import { getLocalDateTimeInputValue } from "../../../utils/date.js";
import { ConfirmRemoveComponentDialog } from "../../components/$id/ConfirmRemoveComponentDialog.js";

const schema = updateComponentSchema.required().extend({
  expirationDate: z
    .string()
    .transform((v) => new Date(v).toISOString())
    .refine((v) => new Date(v) > new Date(), {
      message: "Must be future date",
    }),
  description: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

export function EditComponent(): ReactElement {
  const { id } = useParams() as { id: string };
  const get = trpc.component.get.useQuery({ id });
  const oldComponent = useMemo(() => {
    if (get.data) {
      return {
        ...get.data,
        expirationDate: getLocalDateTimeInputValue(get.data.expirationDate),
      };
    }
  }, [get.data]);
  console.log(oldComponent);
  const { control, formState, handleSubmit, getValues } = useForm<Schema>({
    defaultValues: {
      name: "",
      description: "",
      expirationDate: "2023-04-13T20:00",
      price: 0,
      rating: 3,
      inStock: 10,
    },
    values: oldComponent,
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const updateMutation = trpc.component.update.useMutation({
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
      updateMutation.mutate(dirtyPayload as UpdateComponentSchema);
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
      <ComponentsForm
        action={"Edit"}
        actionElement={actionElement}
        control={control}
        isLoading={get.isLoading}
      />
      {oldComponent && (
        <ConfirmRemoveComponentDialog
          open={open}
          onClose={() => setOpen(false)}
          onOpenChange={(o: boolean) => setOpen(o)}
          component={oldComponent}
        />
      )}
    </>
  );
}
