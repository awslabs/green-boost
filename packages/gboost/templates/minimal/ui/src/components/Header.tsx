// @ts-nocheck
import { Dispatch, ReactElement, SetStateAction } from "react";
import { Header as GbHeader } from "gboost-ui";
import { Heading } from "@aws-amplify/ui-react";
import { config } from "src/config/config.js";

interface HeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header(props: HeaderProps): ReactElement {
  const { open, setOpen } = props;
  return (
    <GbHeader
      leftSide={<Heading level={4}>{config.appTitle}</Heading>}
      open={open}
      setOpen={setOpen}
    />
  );
}
