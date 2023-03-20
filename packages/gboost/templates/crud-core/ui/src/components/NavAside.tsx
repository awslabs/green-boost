// @ts-nocheck
import { ReactElement } from "react";
import { NavAside as GbNavAside, NavAsideItem } from "gboost-ui";
import { MdTipsAndUpdates } from "react-icons/md";
import { Icon, Text } from "@aws-amplify/ui-react";
import { NavAsideLink } from "./NavAsideLink.js";

interface NavAsideProps {
  open: boolean;
}

export function NavAside(props: NavAsideProps): ReactElement {
  const { open } = props;
  return (
    <GbNavAside open={open}>
      <NavAsideLink to="/items">
        <NavAsideItem
          icon={
            <Icon
              as={MdTipsAndUpdates}
              color="brand.primary.60"
              fontSize="x-large"
            />
          }
          label={<Text>Items</Text>}
        />
      </NavAsideLink>
    </GbNavAside>
  );
}
