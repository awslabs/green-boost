import { useEffect, useState } from "react";

export interface UseAuthTokenParams {
  /**
   * Name of key used to persist auth token.
   * @default "AuthToken"
   */
  keyName?: string;
  /**
   * Type of storage used to persist auth token.
   * Learn more about difference [here](https://www.freecodecamp.org/news/how-web-storage-works)
   * @default "local"
   */
  storageType?: "local" | "session";
}

/**
 * Retrieves auth token from local (or session) storage. Listens for changes.
 */
export function useAuthToken(params?: UseAuthTokenParams): string {
  const { keyName = "AuthToken", storageType = "local" } = params || {};
  const [authToken, setAuthToken] = useState("");
  useEffect(() => {
    function setToken() {
      let token: string | null;
      if (storageType === "local") {
        token = localStorage.getItem(keyName);
      } else {
        token = sessionStorage.getItem(keyName);
      }
      if (token) {
        setAuthToken(token);
      }
    }
    window.addEventListener("storage", setToken);
    return () => window.removeEventListener("storage", setToken);
  }, [keyName, storageType]);
  return authToken;
}
