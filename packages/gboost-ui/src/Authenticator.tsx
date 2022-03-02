import { ReactElement } from "react";
import {
  Authenticator as AmplifyAuthenticator,
  Heading,
  Image,
  View,
} from "@aws-amplify/ui-react";
import { Box } from "./Box.jsx";
import { styled } from "./stitches.config.js";
import { ArgumentTypes } from "./utils/ArgumentTypes.js";
type AuthenticatorProps = ArgumentTypes<typeof AmplifyAuthenticator>[0];

const StyledAuthenticator = styled(AmplifyAuthenticator, {
  height: "95vh",
});
const StyledView = styled(View, { p: "$3", ta: "center" });
// TODO remove important after Amplify UI team fixes
const StyledHeading = styled(Heading, { fontSize: "$8 !important" });

function Header() {
  return (
    <StyledView>
      <Box css={{ display: "flex", gap: "$3", justifyContent: "center" }}>
        <StyledHeading>{import.meta.env.VITE_APP_TITLE}</StyledHeading>
        <Image alt="Logo" alignSelf="center" src="/favicon-32x32.png" />
      </Box>
    </StyledView>
  );
}

/**
 * Wrapper around @aws-amplify/ui-react Authenticator that adds header
 * @link https://ui.docs.amplify.aws/components/authenticator?platform=react
 */
export function Authenticator(props: AuthenticatorProps): ReactElement {
  const { children, signUpAttributes, components = {}, ...rest } = props;
  if (!components.Header) components.Header = Header;
  return (
    <StyledAuthenticator
      components={components}
      signUpAttributes={signUpAttributes}
      {...rest}
    >
      {children}
    </StyledAuthenticator>
  );
}
