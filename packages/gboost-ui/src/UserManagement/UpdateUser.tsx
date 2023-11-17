import { type ReactElement, useState, useEffect, useCallback } from "react";
import {
  type CognitoUser,
  type CognitoGroup,
  CreateCognitoUser,
} from "gboost-common";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import { ButtonGroup, Link } from "@aws-amplify/ui-react";
import { MdArrowBack } from "react-icons/md";
import { type SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, gQuery, StyledButton, useNotifications } from "../index.js";
import {
  SmartMultiSelectField,
  SmartTextField,
} from "../SmartFields/smart-fields.js";
import { getUser, listGroupsForUser, updateUser } from "./gql.js";
import {
  baseUserSchema,
  BackIcon,
  Container,
  Title,
  useFormGridCols,
  useTitleSize,
} from "./common.js";

interface ListGroupsForUserResponse {
  listGroupsForUser: CognitoGroup[];
}
interface GetUserResponse {
  getUser: CognitoUser;
}
type Schema = z.infer<typeof baseUserSchema>;

interface UpdateUserProps {
  groupNameOptions: { value: string; label: string }[];
  users: CognitoUser[];
}

export function UpdateUser(props: UpdateUserProps): ReactElement {
  const { groupNameOptions, users } = props;
  const formGridCols = useFormGridCols();
  const titleSize = useTitleSize();
  const { control, handleSubmit, reset, setValue } = useForm<Schema>({
    resolver: zodResolver(baseUserSchema),
    defaultValues: new CreateCognitoUser(),
  });
  const [submitting, setSubmitting] = useState(false);

  const params = useParams();
  // if user refreshes page, newUser will initially be undefined
  // but then the useEffect below will fetch the user
  const [loadingUser, setLoadingUser] = useState(false);
  useEffect(() => {
    async function query() {
      setLoadingUser(true);
      try {
        const data = await gQuery<GetUserResponse>({
          query: getUser,
          vars: { username: params["username"] },
        });
        reset(data.getUser);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingUser(false);
      }
    }
    // prevent infinite loop
    if (!users) {
      query();
    } else {
      const user = users.find((u) => u.username === params["username"]);
      if (user) {
        reset(user);
      } else {
        query();
      }
    }
  }, [params, reset, users]);
  const [loadingGroups, setLoadingGroups] = useState(false);
  useEffect(() => {
    async function query() {
      try {
        setLoadingGroups(true);
        const data = await gQuery<ListGroupsForUserResponse>({
          query: listGroupsForUser,
          vars: { username: params["username"] },
        });
        const groupNames = data.listGroupsForUser.map((g) => g.name);
        setValue("groups", groupNames);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingGroups(false);
      }
    }
    query();
  }, [params, groupNameOptions, setValue]);
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const handleUpdate: SubmitHandler<Schema> = useCallback(
    async (input) => {
      setSubmitting(true);
      try {
        await gQuery<string>({ query: updateUser, vars: { input } });
        notify({
          body: `Successfully updated ${input.username}`,
          variation: "success",
        });
        navigate("../");
      } catch (e) {
        console.error(e);
        notify({
          body: `Error updating ${input.username}`,
          variation: "error",
        });
        setSubmitting(false);
      }
    },
    [navigate, notify],
  );
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
            Update User
          </Title>
        </Box>
        <Box css={{ flex: 1 }}></Box>
      </Box>
      <Container css={{ gridTemplateColumns: `repeat(${formGridCols}, 1fr)` }}>
        <SmartTextField
          control={control}
          data-test="email"
          label="Email"
          loading={loadingUser}
          name="email"
        />
        <SmartTextField
          control={control}
          data-test="username"
          isDisabled
          label="Username"
          loading={loadingUser}
          name="username"
        />
        <SmartTextField
          control={control}
          data-test="given_name"
          label="Given Name"
          loading={loadingUser}
          name="given_name"
        />
        <SmartTextField
          control={control}
          data-test="family_name"
          label="Family Name"
          loading={loadingUser}
          name="family_name"
        />
        <SmartMultiSelectField
          control={control}
          data-test="groups"
          label="Groups"
          loading={loadingGroups}
          name="groups"
          options={groupNameOptions}
        />
      </Container>
      <ButtonGroup justifyContent="end" variation="primary">
        <StyledButton color="error" onClick={() => navigate("../")}>
          Cancel
        </StyledButton>
        <StyledButton
          color="success"
          data-test="update"
          isLoading={submitting}
          loadingText="Updating..."
          onClick={handleSubmit(handleUpdate)}
        >
          Update
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}
