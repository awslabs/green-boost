import { createContext, ReactNode, ReactElement, useContext } from "react";
import { useMediaQuery } from "@mantine/hooks";

type Breakpoints = "bp1" | "bp2" | "bp3" | "bp4";
const BreakpointsContext = createContext<
  Record<Breakpoints, boolean> | undefined
>(undefined);
export type Media = Record<Breakpoints, string>;

interface BreakpointProviderProps {
  children: ReactNode;
  media: Media;
}

export function BreakpointsProvider(
  props: BreakpointProviderProps
): ReactElement {
  const { media } = props;
  const bp1 = useMediaQuery(media.bp1);
  const bp2 = useMediaQuery(media.bp2);
  const bp3 = useMediaQuery(media.bp3);
  const bp4 = useMediaQuery(media.bp4);
  const bps = { bp1, bp2, bp3, bp4 };

  return <BreakpointsContext.Provider value={bps} {...props} />;
}

export function useBps() {
  const context = useContext(BreakpointsContext);
  if (context === undefined) {
    throw new Error("useBreakpoints must be used within a BreakpointsProvider");
  }
  return context;
}
