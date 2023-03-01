import { describe, test, expect } from "vitest";
import { camelToKebab } from "./convert-case.js";

describe("convertCase.ts", () => {
  const camelCase = "longVariableName";
  const kebabCase = "long-variable-name";
  test(`${camelCase} to kebabCase ${kebabCase}`, () => {
    expect(camelToKebab(camelCase)).toBe(kebabCase);
  });
});
