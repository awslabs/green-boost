import { ReactElement } from "react";
import { MdViewColumn } from "react-icons/md";
import { Button, Icon } from "@aws-amplify/ui-react";
import { Dialog } from "../../Dialog.jsx";

export function ColumnsAction(): ReactElement {
  return (
    <Dialog
      title="Columns"
      trigger={
        <Button size="large">
          <Icon ariaLabel="columns" as={MdViewColumn} />
        </Button>
      }
    >
      <>TODO</>
    </Dialog>
  );
}
