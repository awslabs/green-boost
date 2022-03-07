import { ReactElement } from "react";
import { MdTableRows } from "react-icons/md";
import { Button, Icon } from "@aws-amplify/ui-react";
import { Dialog } from "../../Dialog.jsx";

export function DensityAction(): ReactElement {
  return (
    <Dialog
      title="Density"
      trigger={
        <Button size="large">
          <Icon ariaLabel="columns" as={MdTableRows} />
        </Button>
      }
    >
      <>TODO</>
    </Dialog>
  );
}
