import { ReactElement } from "react";
import { Box } from "../Box.js";
import { styled } from "../stitches.config.js";

const StyledFooter = styled("footer", {
  bc: "$primary3",
  ta: "center",
  fontSize: "$2",
});

interface FooterProps {
  companyName?: string;
  Footer?: ReactElement;
}

const thisYear = new Date().getFullYear();

export function Footer(props: FooterProps): ReactElement {
  const { companyName = "Your Company", Footer: UserFooter } = props;
  return (
    <Box css={{ gridArea: "footer" }}>
      {UserFooter ? (
        UserFooter
      ) : (
        <StyledFooter>
          &copy; {thisYear}, {companyName}, All rights reserved.
        </StyledFooter>
      )}
    </Box>
  );
}
