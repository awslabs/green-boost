import { zodResolver } from "@hookform/resolvers/zod";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { createWidgetSchema } from "@myapp/core/schemas";
import { useNotifications } from "gboost-ui";
import { Link, useNavigate } from "react-router-dom";
import { WidgetStep } from "@myapp/core/models";
import { trpc } from "src/trpc.js";
import { z } from "zod";
import { WidgetForm } from "../WidgetForm.js";
import { Button, ButtonGroup } from "@aws-amplify/ui-react";

const schema = createWidgetSchema.extend({
  expirationDate: z
    .string()
    .transform((v) => new Date(v).toISOString())
    .refine((v) => new Date(v) > new Date(), {
      message: "Must be future date",
    }),
});
type Schema = z.infer<typeof schema>;

export function CreateWidget(): ReactElement {
  const { control, handleSubmit } = useForm<Schema>({
    defaultValues: {
      name: "",
      description: "",
      active: true,
      expirationDate: "",
      price: 0,
      rating: 3,
      step: WidgetStep.Step1,
    },
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const create = trpc.widget.create.useMutation({
    onError(err) {
      console.error(err);
      notify({
        body: "Error creating widget",
        variation: "error",
      });
    },
    onSuccess(data) {
      notify({
        body: `Successfully created: ${data.name}`,
        variation: "success",
      });
      navigate("..");
    },
  });
  const actionElement = (
    <ButtonGroup justifyContent="center">
      <Link to="..">
        <Button backgroundColor="background.info">Cancel</Button>
      </Link>
      <Button
        backgroundColor="background.success"
        isLoading={create.isLoading}
        onClick={handleSubmit((d) => create.mutate(d))}
      >
        Create
      </Button>
    </ButtonGroup>
  );
  return (
    <WidgetForm
      action="Create"
      actionElement={actionElement}
      control={control}
    />
  );
}
