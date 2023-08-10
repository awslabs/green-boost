import { type ReactElement } from "react";
import { type CSS, styled } from "../index.js";

const Container = styled("div", {
  gridArea: "rightDrawer",
  backgroundColor: "$gray1",
  borderLeft: "1px solid $gray6",
  transition: "$sidebar",
  maxWidth: "fit-content",
  height: "100%",
});

interface RightAsideProps {
  children: ReactElement;
  css?: CSS;
}
/**
 * @deprecated
 */
export function RightAside(props: RightAsideProps): ReactElement {
  const { css, children } = props;
  return <Container css={css}>{children}</Container>;
}
