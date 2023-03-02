/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: object | undefined): boolean | undefined {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge objects immutably.
 *
 * Adapted from: https://stackoverflow.com/a/34749873/9658768
 *
 * `target` is overwritten by additional `sources` where each new source takes
 * higher priority
 */
export function mergeDeep(
  target: object,
  ...sources: (object | undefined)[]
): object {
  const newTarget = structuredClone(target);
  if (!sources.length) return newTarget;
  const source = sources.shift();

  if (isObject(newTarget) && isObject(source)) {
    for (const key in source) {
      const typedKey = key as keyof typeof source;
      if (isObject(source[typedKey])) {
        if (!newTarget[typedKey]) Object.assign(newTarget, { [typedKey]: {} });
        mergeDeep(newTarget[typedKey], source[typedKey]);
      } else {
        Object.assign(newTarget, { [key]: source[typedKey] });
      }
    }
  }

  return mergeDeep(newTarget, ...sources);
}
