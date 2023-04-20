import { useEffect } from "react";

export interface UseStoreAuthTokenParams {
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
 * Hook that looks for "token" URL search parameter and if exists, stores it to
 * local (or session) storage and removes token from url.
 */
export function useStoreAuthToken(params?: UseStoreAuthTokenParams) {
  const { keyName = "AuthToken", storageType = "local" } = params || {};
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get("token");
    if (token) {
      if (storageType === "local") {
        localStorage.setItem(keyName, token);
      } else {
        sessionStorage.setItem(keyName, token);
      }
      const urlWithoutSearchParams = window.location.href.replace(
        window.location.search,
        ""
      );
      window.history.pushState(undefined, "", urlWithoutSearchParams);
    }
  }, [keyName, storageType]);
}
