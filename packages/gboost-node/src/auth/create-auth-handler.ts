import type {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import {
  getKeyFromSSM,
  setPrivateKey,
  setPublicKey,
  setRequestData,
} from "./common.js";

const [privateKey, publicKey] = await Promise.all([
  getKeyFromSSM("/gboost/auth/private-key"),
  getKeyFromSSM("/gboost/auth/public-key"),
]);
setPrivateKey(privateKey);
setPublicKey(publicKey);

export function createAuthHandler(
  getAdapter: (
    event: APIGatewayProxyEvent
  ) => APIGatewayProxyHandler | Promise<APIGatewayProxyHandler>
): APIGatewayProxyHandler {
  const handler: APIGatewayProxyHandler = async (event, context, callback) => {
    setRequestData({ event, context });
    let adapter = getAdapter(event);
    if (adapter instanceof Promise) {
      adapter = await adapter;
    }
    const res = (await adapter(
      event,
      context,
      callback
    )) as APIGatewayProxyResult;
    setRequestData(undefined);
    return res;
  };
  return handler;
}
