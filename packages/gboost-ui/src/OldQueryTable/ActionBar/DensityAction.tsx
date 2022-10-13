import { ReactElement } from "react";
import { MdLineWeight } from "react-icons/md";
import { Icon, Menu, MenuButton, MenuItem } from "@aws-amplify/ui-react";
import { styled } from "../../stitches.config.js";

export type Density = "cozy" | "standard" | "comfy";

const StyledMenuItem = styled(MenuItem);

interface DensityActionProps {
  density: Density;
  onChangeDensity: (density: Density) => void;
}

export function DensityAction(props: DensityActionProps): ReactElement {
  const { density, onChangeDensity: handleChangeDensity } = props;
  return (
    <Menu
      trigger={
        <MenuButton size="large">
          <Icon ariaLabel="columns" as={MdLineWeight} />
        </MenuButton>
      }
    >
      <StyledMenuItem
        css={{ bc: density === "cozy" ? "$primary5 !important" : "" }}
        onClick={() => handleChangeDensity("cozy")}
      >
        Cozy
      </StyledMenuItem>
      <StyledMenuItem
        css={{ bc: density === "standard" ? "$primary5 !important" : "" }}
        onClick={() => handleChangeDensity("standard")}
      >
        Standard
      </StyledMenuItem>
      <StyledMenuItem
        css={{ bc: density === "comfy" ? "$primary5 !important" : "" }}
        onClick={() => handleChangeDensity("comfy")}
      >
        Comfy
      </StyledMenuItem>
    </Menu>
  );
}
