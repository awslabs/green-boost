type RestFetchParams = Omit<_RestFetchParams, "apiUrl">;

export function restFetch<T>(params: RestFetchParams) {
  return _restFetch<T>({ ...params, apiUrl: "/" });
}

export const createRestFetch = (params: _RestFetchParams) => {
  const createdRestFetch = _restFetch.bind(this, params);
  return createdRestFetch;
};

interface _RestFetchParams extends RequestInit {
  /**
   * Base URL of REST API
   * @example "https://{restApiId}.execute-api.{region}.amazonaws.com/{stageName}"
   */
  apiUrl: string;
  /**
   * Indicates which method is called on body to resolve data (i.e. body.json())
   * @default "json";
   */
  bodyDataType: "arrayBuffer" | "blob" | "formData" | "json" | "text";
  /**
   * @example "/user/1"
   * @default "/"
   */
  path?: string;
  /**
   * Object that's transformed to query string
   */
  query: Record<string, string>;
}

/**
 * Internal restFetch function
 */
async function _restFetch<T>(
  boundParams: _RestFetchParams,
  params?: _RestFetchParams,
): Promise<T> {
  const combinedParams = {
    ...boundParams,
    ...params,
  };
  const {
    apiUrl,
    bodyDataType = "json",
    path = "/",
    query,
    ...restParams
  } = combinedParams;
  const queryString = Object.entries(query).reduce(
    (prev, [k, v], i) => prev + (i === 0 ? "" : "&") + k + "=" + v,
    "",
  );
  const fullPath = apiUrl + path + "?" + queryString;
  const res = await fetch(fullPath, restParams);
  if (!res.ok) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
    throw new Error("Network response was not OK");
  }
  return res[bodyDataType]();
}
