import { ReactElement } from "react";
import { styled } from "../stitches.config.js";

const StyledFooter = styled("footer", {
  gridArea: "footer",
  bc: "$primary3",
  ta: "center",
  fontSize: "$2",
});

interface FooterProps {
  companyName?: string;
}

const thisYear = new Date().getFullYear();

export function Footer(props: FooterProps): ReactElement {
  const { companyName = "Your Company" } = props;
  return (
    <StyledFooter>
      &copy; {thisYear}, {companyName}, All rights reserved.
    </StyledFooter>
  );
}
