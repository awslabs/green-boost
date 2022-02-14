import { ReactElement } from "react";
import {
  Authenticator as AmplifyAuthenticator,
  Heading,
  Image,
  View,
} from "@aws-amplify/ui-react";
import { Box } from "./Box.jsx";
import { styled } from "./stitches.config.js";

const StyledAuthenticator = styled(AmplifyAuthenticator, {
  height: "95vh",
});
const StyledView = styled(View, { p: "$3", ta: "center" });
// TODO remove important after Amplify UI team fixes
const StyledHeading = styled(Heading, { fontSize: "$8 !important" });

const components = {
  Header() {
    return (
      <StyledView>
        <Box css={{ display: "flex", gap: "$3", justifyContent: "center" }}>
          <StyledHeading>{import.meta.env.VITE_APP_TITLE}</StyledHeading>
          <Image alt="Logo" alignSelf="center" src="/favicon-32x32.png" />
        </Box>
      </StyledView>
    );
  },
};

interface AuthenticatorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (args: { user: any; signOut: any }) => ReactElement;
  signUpAttributes: "email"[];
}

export function Authenticator(props: AuthenticatorProps): ReactElement {
  const { children, signUpAttributes } = props;
  return (
    <StyledAuthenticator
      components={components}
      signUpAttributes={signUpAttributes}
    >
      {children}
    </StyledAuthenticator>
  );
}
