const isObject = (obj: unknown) => obj && typeof obj === "object";

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @link https://stackoverflow.com/a/48218209/9658768
 */
export function mergeDeep<T extends object>(
  ...objects: (object | undefined)[]
): T {
  const result: Record<string, unknown> = {};
  for (const obj of objects) {
    if (obj) {
      for (const key of Object.keys(obj)) {
        const pVal = result[key];
        const oVal = obj[key as keyof typeof obj];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          result[key] = pVal.concat(...(oVal as unknown[]));
        } else if (isObject(pVal) && isObject(oVal)) {
          result[key] = mergeDeep(
            pVal as Record<string, unknown>,
            oVal as Record<string, unknown>,
          );
        } else {
          result[key] = oVal;
        }
      }
    }
  }
  return result as T;
}
