/**
 * Transform records with potential `null` values to `undefined`. This is
 * helpful for converting DB row types to types compliant with zod's
 * `.optional()`. Use the 2nd argument to specify any keys to be recursively
 * transformed (i.e. nested objects from relations)
 *
 * Why not use null? See: [here](https://github.com/sindresorhus/meta/discussions/7)
 */
export function transformNullToUndefined<T extends Record<string, unknown>>(
  record: T,
  recursiveKeys = [] as string[],
): ReplaceNullWithUndefined<T> {
  return Object.entries(record).reduce((prev, [k, v]) => {
    if (recursiveKeys.includes(k)) {
      return {
        ...prev,
        [k]: transformNullToUndefined(v as Record<string, unknown>),
      };
    } else if (v === null) {
      return { ...prev, [k]: undefined };
    } else {
      return { ...prev, [k]: v };
    }
  }, {} as ReplaceNullWithUndefined<T>);
}

/**
 * Replace `Record` type with potential `null` values to `undefined`.
 */
export type ReplaceNullWithUndefined<T> = {
  [K in keyof T]: null extends T[K] ? NonNullable<T[K]> | undefined : T[K];
};
