// @ts-nocheck
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Grid,
  Icon,
  FieldGroupIcon,
} from "@aws-amplify/ui-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { createWidgetSchema } from "@{{GB_APP_ID}}/core/schemas";
import {
  SmartDateTimeField,
  SmartSelectField,
  SmartSliderField,
  SmartTextAreaField,
  SmartTextField,
  useNotifications,
} from "gboost-ui";
import { Link, useNavigate } from "react-router-dom";
import { WidgetStep } from "@{{GB_APP_ID}}/core/models";
import { trpc } from "src/trpc.js";
import { MdArrowBack, MdAttachMoney } from "react-icons/md";
import { z } from "zod";

const schema = createWidgetSchema.extend({
  expirationDate: z.string().transform((v) => new Date(v).toISOString()),
});
type Schema = z.infer<typeof schema>;

const fieldWidth = 350;

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
  return (
    <Flex direction="column" gap="large">
      <Grid templateColumns="repeat(3, 1fr)" justifyContent="center">
        <Flex justifyContent="left">
          <Button variation="link">
            <Icon as={MdArrowBack} /> Back
          </Button>
        </Flex>
        <Heading level={2} textAlign="center">
          Create Widget
        </Heading>
        <div />
      </Grid>
      <Flex gap="large" wrap="wrap">
        <SmartTextField
          control={control}
          width={fieldWidth}
          name="name"
          label="Name"
        />
        <SmartTextAreaField
          control={control}
          width={fieldWidth}
          name="description"
          label="Description"
        />
        {/* <SmartSwitchField control={control} name="active" label="Active" /> */}
        <SmartDateTimeField
          type="datetime-local"
          control={control}
          width={fieldWidth}
          name="expirationDate"
          label="Expiration Date"
        />
        <SmartTextField
          type="number"
          control={control}
          width={fieldWidth}
          name="price"
          innerStartComponent={
            <FieldGroupIcon>
              <Icon as={MdAttachMoney} />
            </FieldGroupIcon>
          }
          label="Price"
        />
        <SmartSliderField
          control={control}
          width={fieldWidth}
          name="rating"
          label="Rating"
          max={5}
          min={1}
        />
        <SmartSelectField
          control={control}
          width={fieldWidth}
          name="step"
          label="Step"
        >
          {Object.values(WidgetStep).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </SmartSelectField>
      </Flex>
      <ButtonGroup justifyContent="center">
        <Link to="..">
          <Button backgroundColor="background.error">Cancel</Button>
        </Link>
        <Button
          backgroundColor="background.success"
          isLoading={create.isLoading}
          onClick={handleSubmit((d) => create.mutate(d))}
        >
          Create
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
