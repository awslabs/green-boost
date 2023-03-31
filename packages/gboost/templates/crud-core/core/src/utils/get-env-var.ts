/**
 * Gets environment variable from `process.env[key]`. Throws error if undefined.
 */
export function getEnvVar(key: string): string {
  const value = process.env[key];
  if (value) {
    return value;
  } else {
    if (!process.env["VITEST"]) {
      throw new Error(`Environment Variable Undefined: ${key}`);
    } else {
      return "test";
    }
  }
}
