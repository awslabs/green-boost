import { ReactElement } from "react";
import { Box } from "../Box.js";
import { styled } from "../stitches.config.js";

const StyledFooter = styled("footer", {
  bc: "$primary3",
  ta: "center",
  fontSize: "$2",
});
const thisYear = new Date().getFullYear();

interface FooterProps {
  footer?: string;
  Footer?: ReactElement;
}

export function Footer(props: FooterProps): ReactElement {
  const {
    footer = `© ${thisYear}, My Company, All rights reserved.`,
    Footer: UserFooter,
  } = props;
  return (
    <Box css={{ gridArea: "footer" }}>
      {UserFooter ? UserFooter : <StyledFooter>{footer}</StyledFooter>}
    </Box>
  );
}
