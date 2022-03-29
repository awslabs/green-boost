import { ReactElement } from "react";
import {
  Authenticator as AmplifyAuthenticator,
  Heading,
  Image,
  View,
} from "@aws-amplify/ui-react";
import { mergeDeep } from "gboost-common";
import { Box } from "./Box.js";
import { styled } from "./stitches.config.js";
import { ArgumentTypes } from "./utils/ArgumentTypes.js";
type AuthenticatorProps = ArgumentTypes<typeof AmplifyAuthenticator>[0] & {
  title: string;
};

const StyledAuthenticator = styled(AmplifyAuthenticator, {
  height: "95vh",
});
const StyledView = styled(View, { p: "$3", ta: "center" });
// TODO remove important after Amplify UI team fixes
const StyledHeading = styled(Heading, { fontSize: "$8 !important" });

/**
 * Wrapper around @aws-amplify/ui-react Authenticator that adds header
 * @link https://ui.docs.amplify.aws/components/authenticator?platform=react
 */
export function Authenticator(props: AuthenticatorProps): ReactElement {
  const {
    children,
    formFields: passedFormFields,
    signUpAttributes,
    components = {},
    title,
    ...rest
  } = props;
  const initFormFields = { setupTOTP: { QR: { totpIssuer: title } } };
  const formFields = passedFormFields
    ? mergeDeep(passedFormFields, initFormFields)
    : initFormFields;
  const newComponents = {
    Header() {
      return (
        <StyledView>
          <Box css={{ display: "flex", gap: "$3", justifyContent: "center" }}>
            <StyledHeading>{title}</StyledHeading>
            <Image alt="Logo" alignSelf="center" src="/favicon-32x32.png" />
          </Box>
        </StyledView>
      );
    },
    ...components,
  };
  return (
    <StyledAuthenticator
      components={newComponents}
      signUpAttributes={signUpAttributes}
      formFields={formFields}
      {...rest}
    >
      {children}
    </StyledAuthenticator>
  );
}
