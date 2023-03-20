// @ts-nocheck
import {
  Button,
  Flex,
  Heading,
  Grid,
  Icon,
  FieldGroupIcon,
} from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import {
  SmartDateTimeField,
  SmartSelectField,
  SmartSliderField,
  SmartTextAreaField,
  SmartTextField,
} from "gboost-ui";
import { Link } from "react-router-dom";
import { ItemStep } from "@{{GB_APP_ID}}/core/models";
import { MdArrowBack, MdAttachMoney } from "react-icons/md";

const fieldWidth = 400;

interface ItemFormProps {
  action: "Create" | "Edit";
  actionElement: ReactElement;
  control: any;
  isLoading?: boolean;
}

export function ItemForm(props: ItemFormProps): ReactElement {
  const { action, actionElement, control, isLoading } = props;
  return (
    <Flex direction="column" gap="large">
      <Grid templateColumns="repeat(3, 1fr)" justifyContent="center">
        <Flex justifyContent="left">
          <Link to="..">
            <Button variation="link">
              <Icon as={MdArrowBack} /> Back
            </Button>
          </Link>
        </Flex>
        <Heading level={2} textAlign="center">
          {action} Item
        </Heading>
        <div />
      </Grid>
      <Flex gap="large" wrap="wrap">
        <SmartTextField
          control={control}
          name="name"
          label="Name"
          loading={isLoading}
          width={fieldWidth}
        />
        <SmartTextAreaField
          control={control}
          name="description"
          label="Description"
          loading={isLoading}
          width={fieldWidth}
        />
        {/* <SmartSwitchField control={control} name="active" label="Active" /> */}
        <SmartDateTimeField
          type="datetime-local"
          control={control}
          label="Expiration Date"
          loading={isLoading}
          min={new Date().toISOString().slice(0, 16)}
          name="expirationDate"
          width={fieldWidth}
        />
        <SmartTextField
          type="number"
          control={control}
          innerStartComponent={
            <FieldGroupIcon>
              <Icon as={MdAttachMoney} />
            </FieldGroupIcon>
          }
          name="price"
          label="Price"
          loading={isLoading}
          width={fieldWidth}
        />
        <SmartSliderField
          control={control}
          name="rating"
          label="Rating"
          loading={isLoading}
          max={5}
          min={1}
          width={fieldWidth}
        />
        <SmartSelectField
          control={control}
          loading={isLoading}
          name="step"
          label="Step"
          width={fieldWidth}
        >
          {Object.values(ItemStep).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </SmartSelectField>
      </Flex>
      {actionElement}
    </Flex>
  );
}
