export function getAction(path: string): "authorize" | "callback" {
  const paths = path.split("/").filter(Boolean);
  const action = paths.at(-1);
  if (action === "authorize" || action === "callback") {
    return action;
  } else {
    throw new Error(`Invalid action: ${action} from path: ${path}`);
  }
}

export function getCallbackUrl(path: string): string {
  const paths = path.split("/").filter(Boolean);
  paths.pop();
  return paths.join("/") + "/callback";
}
