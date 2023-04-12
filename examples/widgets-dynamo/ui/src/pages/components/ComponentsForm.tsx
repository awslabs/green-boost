import {
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  FieldGroupIcon,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { MdArrowBack, MdAttachMoney } from "react-icons/md";
import {
  SmartSliderField,
  SmartTextAreaField,
  SmartTextField,
  SmartDateTimeField,
} from "gboost-ui";

const fieldWidth = 400;

interface ComponentFormProps {
  action: "Create" | "Edit";
  actionElement: ReactElement;
  control: any;
  isLoading?: boolean;
}

export function ComponentsForm(props: ComponentFormProps): ReactElement {
  const { action, actionElement, control, isLoading } = props;
  return (
    <Grid as="form" rowGap="15px" columnGap="15px" padding="20px">
      <Grid templateColumns="repeat(3, 1fr)" justifyContent="center">
        <Flex justifyContent="left">
          <Link to="..">
            <Button variation="link">
              <Icon as={MdArrowBack} /> Back
            </Button>
          </Link>
        </Flex>
        <Heading level={3} textAlign="center">
          Create Component
        </Heading>
      </Grid>
      <Flex gap="large" wrap="wrap" alignItems="center" direction="column">
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
        <SmartTextField
          type="number"
          control={control}
          name="inStock"
          label="Numbers in stock"
          width={fieldWidth}
        ></SmartTextField>
        <SmartDateTimeField
          label="Expiration date"
          type="datetime-local"
          width={fieldWidth}
          name="expirationDate"
          control={control}
          loading={isLoading}
          min={new Date().toISOString().slice(0, 16)}
        ></SmartDateTimeField>
        {/*<Flex justifyContent="space-between">*/}
        {/*  <Button children="Clear" type="reset"></Button>*/}
        {/*  <Flex gap="15px">*/}
        {/*    <Button children="Submit" type="submit" variation="primary"></Button>*/}
        {/*  </Flex>*/}
        {/*</Flex>*/}
      </Flex>
      {actionElement}
    </Grid>
  );
}
