import { useAuthToken, UseAuthTokenParams } from "./use-auth-token.js";

/**
 * Retrieves parsed auth token payload from JWT.
 */
export function useAuthTokenPayload(params?: UseAuthTokenParams) {
  const authToken = useAuthToken(params);
  if (authToken) {
    return JSON.parse(window.atob(authToken.split(".")[1]));
  } else {
    return {};
  }
}
