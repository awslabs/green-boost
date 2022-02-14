import {
  createContext,
  Dispatch,
  ReactNode,
  ReactElement,
  useContext,
  useReducer,
} from "react";

interface ISnackbarContext {
  snackbarState: typeof initState;
  dispatchSnackbar: Dispatch<Action>;
}
const SnackbarContext = createContext<ISnackbarContext | undefined>(undefined);

interface SnackbarProviderProps {
  children: ReactNode;
}

type AlertColor = "info" | "success" | "warning" | "error";

const initState = {
  message: "",
  open: false,
  permanent: false,
  severity: "info" as AlertColor,
};
type Action =
  | {
      type: "show";
      message: string;
      severity?: AlertColor;
      permanent?: boolean;
    }
  | { type: "close" };
function reducer(state: typeof initState, action: Action) {
  switch (action.type) {
    case "show":
      const newState = { ...state, open: true, message: action.message };
      if (action.severity) newState.severity = action.severity;
      if (action.permanent) newState.permanent = action.permanent;
      return newState;
    case "close":
      return initState;
    default:
      throw new Error(`Unknown action: ${action}`);
  }
}

export function SnackbarProvider(props: SnackbarProviderProps): ReactElement {
  const [snackbarState, dispatchSnackbar] = useReducer(reducer, initState);
  const value = { snackbarState, dispatchSnackbar };
  return <SnackbarContext.Provider value={value} {...props} />;
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
}
