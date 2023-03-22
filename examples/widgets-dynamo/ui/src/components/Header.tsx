import { Dispatch, ReactElement, SetStateAction } from "react";
import { Header as GbHeader } from "gboost-ui";
import { Heading } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header(props: HeaderProps): ReactElement {
  const { open, setOpen } = props;
  return (
    <GbHeader
      leftSide={
        <Link to="/">
          <Heading level={4}>Widgets</Heading>
        </Link>
      }
      open={open}
      setOpen={setOpen}
    />
  );
}
