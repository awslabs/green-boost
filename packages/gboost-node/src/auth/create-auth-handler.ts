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

const privateKey = await getKeyFromSSM("/gboost/private-key");
const publicKey = await getKeyFromSSM("/gboost/public-key");
setPrivateKey(privateKey);
setPublicKey(publicKey);

export function createAuthHandler(
  getAdapter: (event: APIGatewayProxyEvent) => APIGatewayProxyHandler
): APIGatewayProxyHandler {
  const handler: APIGatewayProxyHandler = async (event, context, callback) => {
    setRequestData({ event, context });
    const adapter = getAdapter(event);
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
