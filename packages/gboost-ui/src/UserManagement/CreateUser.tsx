import { ReactElement, useCallback, useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { CreateCognitoUser } from "gboost-common";
import { ButtonGroup, Link } from "@aws-amplify/ui-react";
import { MdArrowBack } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CognitoUser } from "gboost-common";
import { GraphQLError } from "graphql";
import { createUser } from "./gql.js";
import {
  Box,
  gQuery,
  SmartMultiSelectField,
  SmartTextField,
  StyledButton,
  useNotifications,
} from "../index.js";
import {
  Container,
  BackIcon,
  Title,
  baseUserSchema,
  useFormGridCols,
  useTitleSize,
} from "./common.js";

const schema = baseUserSchema.extend({
  userAlreadyExists: z.boolean().refine((b) => !b, "Username already exists"),
});

interface CreateUserResponse {
  createUser: CognitoUser;
}

type Schema = z.infer<typeof schema>;

interface CreateUserProps {
  groupNameOptions: { value: string; label: string }[];
}

export function CreateUser(props: CreateUserProps): ReactElement {
  const { groupNameOptions } = props;
  const formGridCols = useFormGridCols();
  const titleSize = useTitleSize();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<Schema>({
    defaultValues: new CreateCognitoUser(),
    resolver: zodResolver(schema),
  });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const handleCreate: SubmitHandler<Schema> = useCallback(
    async ({ userAlreadyExists, ...newUser }) => {
      setSubmitting(true);
      try {
        const { createUser: createdUser } = await gQuery<CreateUserResponse>({
          query: createUser,
          vars: { input: newUser },
        });
        notify({
          body: `Successfully created ${createdUser.username}`,
          variation: "success",
        });
        navigate("../");
      } catch (err) {
        console.error(err);
        const errors = err as GraphQLError[];
        if (errors[0]?.message === "User account already exists") {
          // cannot set error on username field b/c it won't persist as zod
          // resolver for username will pass on subsequent call
          setValue("userAlreadyExists", true);
        } else {
          notify({
            body: `Error creating ${newUser.username}`,
            variation: "error",
          });
        }
        setSubmitting(false);
      }
    },
    [navigate, notify, setValue]
  );
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "username") {
        setValue("userAlreadyExists", false, { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [setValue, watch]);
  return (
    <Container>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box css={{ flex: 1 }}>
          <Link as={RouterLink} to="../users">
            <BackIcon aria-label="back" as={MdArrowBack} />
            Users
          </Link>
        </Box>
        <Box css={{ alignItems: "center", flex: 4 }}>
          <Title level={2} css={{ fontSize: titleSize }}>
            Create User
          </Title>
        </Box>
        <Box css={{ flex: 1 }}></Box>
      </Box>
      <Container css={{ gridTemplateColumns: `repeat(${formGridCols}, 1fr)` }}>
        <SmartTextField
          control={control}
          data-test="email"
          label="Email"
          name="email"
        />
        <SmartTextField
          control={control}
          data-test="username"
          label="Username"
          name="username"
          hasError={Boolean(errors.userAlreadyExists?.message)}
          errorMessage={errors.userAlreadyExists?.message}
        />
        <SmartTextField
          control={control}
          data-test="given_name"
          label="Given Name"
          name="given_name"
        />
        <SmartTextField
          control={control}
          data-test="family_name"
          label="Family Name"
          name="family_name"
        />
        <SmartMultiSelectField
          control={control}
          data-test="groups"
          label="Groups"
          name="groups"
          options={groupNameOptions}
        />
      </Container>
      <ButtonGroup justifyContent="end" variation="primary">
        <StyledButton color="error">Cancel</StyledButton>
        <StyledButton
          color="success"
          data-test="create"
          isLoading={submitting}
          loadingText="Creating..."
          onClick={handleSubmit(handleCreate)}
        >
          Create
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}
