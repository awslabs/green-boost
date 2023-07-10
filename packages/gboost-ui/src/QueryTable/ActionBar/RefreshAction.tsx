import { type ReactElement } from "react";
import { MdRefresh } from "react-icons/md";
import { Icon, Button } from "@aws-amplify/ui-react";
import { Tooltip } from "../../index.js";

interface RefreshActionProps {
  refreshFn: () => unknown;
}

export function RefreshAction(props: RefreshActionProps): ReactElement {
  const { refreshFn } = props;
  return (
    <Tooltip content="Refresh">
      <span>
        <Button onClick={() => refreshFn()} size="large">
          {/* TODO: animate rotate onClick */}
          <Icon ariaLabel="refresh" as={MdRefresh} />
        </Button>
      </span>
    </Tooltip>
  );
}
