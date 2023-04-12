import { z } from "zod";
import { createComponentSchema } from "@myapp/core/schemas";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useNotifications } from "gboost-ui";
import { trpc } from "../../../trpc.js";
import { Button, ButtonGroup } from "@aws-amplify/ui-react";
import { ComponentsForm } from "../ComponentsForm.js";

const schema = createComponentSchema.extend({
  expirationDate: z
    .string()
    .transform((v) => new Date(v).toISOString())
    .refine((v) => new Date(v) > new Date(), {
      message: "Must be future date",
    }),
});
type Schema = z.infer<typeof schema>;

export function CreateComponent(): ReactElement {
  const { control, handleSubmit } = useForm<Schema>({
    defaultValues: {
      name: "",
      description: "",
      expirationDate: "",
      price: 0,
      rating: 3,
      inStock: 10,
    },
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const create = trpc.component.create.useMutation({
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
    <ButtonGroup justifyContent="center" columnGap="250px">
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
    <ComponentsForm
      action="Create"
      actionElement={actionElement}
      control={control}
    />
  );
}
