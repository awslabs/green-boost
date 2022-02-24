import { ReactElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const portalId = "gb-portal";
function createPortalRoot() {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", portalId);
  return portalRoot;
}

interface PortalProps {
  children: ReactElement;
}

export function Portal(props: PortalProps): ReactElement {
  const portalRootRef = useRef(
    document.getElementById(portalId) || createPortalRoot()
  );
  useEffect(() => {
    document.body.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove();
    };
  }, []);
  return createPortal(<>{props.children}</>, portalRootRef.current);
}
