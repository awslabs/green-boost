// @ts-nocheck
import { ReactElement } from "react";
import { NavAside as GbNavAside, NavAsideItem } from "gboost-ui";
import { MdSettings, MdTipsAndUpdates } from "react-icons/md";
import { Icon, Text } from "@aws-amplify/ui-react";
import { NavAsideLink } from "./NavAsideLink.js";

interface NavAsideProps {
  open: boolean;
}

export function NavAside(props: NavAsideProps): ReactElement {
  const { open } = props;
  return (
    <GbNavAside open={open}>
      <NavAsideLink to="/widgets">
        <NavAsideItem
          icon={
            <Icon
              as={MdTipsAndUpdates}
              color="brand.primary.60"
              fontSize="x-large"
            />
          }
          label={<Text>Widgets</Text>}
        />
      </NavAsideLink>
      <NavAsideLink to="/components">
        <NavAsideItem
          icon={
            <Icon as={MdSettings} color="brand.primary.60" fontSize="x-large" />
          }
          label={<Text>Components</Text>}
        />
      </NavAsideLink>
    </GbNavAside>
  );
}
