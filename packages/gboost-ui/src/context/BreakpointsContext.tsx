import { createContext, ReactNode, ReactElement, useContext } from "react";
import { useMediaQuery } from "@mantine/hooks";

type Breakpoint = "bp1" | "bp2" | "bp3" | "bp4";
export type Breakpoints = Record<Breakpoint, boolean>;
const BreakpointsContext = createContext<Breakpoints | undefined>(undefined);

/**
 * @internal
 */
export type Media = Record<Breakpoint, string>;

interface BreakpointProviderProps {
  children: ReactNode;
  media: Media;
}

/**
 * Provider to enable use of useBps hook
 * @deprecated
 */
export function BreakpointsProvider(
  props: BreakpointProviderProps
): ReactElement {
  const { media } = props;
  const bp1 = useMediaQuery(media.bp1);
  const bp2 = useMediaQuery(media.bp2);
  const bp3 = useMediaQuery(media.bp3);
  const bp4 = useMediaQuery(media.bp4);
  const bps: Breakpoints = { bp1, bp2, bp3, bp4 };

  return <BreakpointsContext.Provider value={bps} {...props} />;
}

/**
 * Hook to access breakpoints
 * @deprecated
 */
export function useBps() {
  const context = useContext(BreakpointsContext);
  if (context === undefined) {
    throw new Error("useBreakpoints must be used within a BreakpointsProvider");
  }
  return context;
}
