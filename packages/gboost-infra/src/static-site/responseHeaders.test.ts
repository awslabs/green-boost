import { describe, test, expect } from "vitest";
import { getCsp, getCspSource } from "./responseHeaders.js";

describe("getCspSource", () => {
  test("CSP sources are properly quoted and spaced", () => {
    expect(getCspSource(["none", "self", "https://google.com"])).toBe(
      "'none' 'self' https://google.com"
    );
  });
});

describe("getCsp", () => {
  test("default csp", () => {
    const result = getCsp({});
    expect(result).toBe(
      "default-src 'self'; form-action 'none'; navigate-to 'none'; object-src 'none';"
    );
  });
});

// TODO add tests for other functions
