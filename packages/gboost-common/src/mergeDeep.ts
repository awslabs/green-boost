/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: object | undefined): boolean | undefined {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 * @link https://stackoverflow.com/a/34749873/9658768
 */
export function mergeDeep(target: object, ...sources: object[]): object {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const typedKey = key as keyof typeof source;
      if (isObject(source[typedKey])) {
        if (!target[typedKey]) Object.assign(target, { [typedKey]: {} });
        mergeDeep(target[typedKey], source[typedKey]);
      } else {
        Object.assign(target, { [key]: source[typedKey] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
