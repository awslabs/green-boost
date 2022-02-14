import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { BreakpointsProvider, Media } from "./BreakpointsContext.jsx";
import { SnackbarProvider } from "./SnackbarProvider.jsx";

interface AppProvidersProps {
  children: ReactNode;
  media: Media;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers?: ((props: PropsWithChildren<any>) => ReactElement)[];
}

export function AppProviders(props: AppProvidersProps) {
  const { children, media } = props;
  return (
    <BreakpointsProvider media={media}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </BreakpointsProvider>
  );
}
