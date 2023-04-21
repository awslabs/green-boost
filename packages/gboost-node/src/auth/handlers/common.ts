import type { APIGatewayProxyEvent } from "aws-lambda";

export function getAction(path: string): "authorize" | "callback" {
  const paths = path.split("/").filter(Boolean);
  const action = paths.at(-1);
  if (action === "authorize" || action === "callback") {
    return action;
  } else {
    throw new Error(`Invalid action: ${action} from path: ${path}`);
  }
}

export function getCallbackUrl(event: APIGatewayProxyEvent): string {
  const domainName = event.requestContext.domainName;
  if (!domainName) {
    throw new Error("Missing event.headers.Host");
  }
  const paths = event.requestContext.path
    .split("/")
    .filter(Boolean)
    .slice(0, -1);
  return `https://${domainName}/${paths.join("/")}/callback`;
}
