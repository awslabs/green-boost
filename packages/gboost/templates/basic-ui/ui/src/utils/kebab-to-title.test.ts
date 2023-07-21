import { describe, expect, test } from "vitest";
import { kebabToTitle } from "./kebab-to-title";

describe("kebab-to-title", () => {
  test("one word case", () => {
    expect(kebabToTitle("world")).toBe("World");
  });
  test("two words case", () => {
    expect(kebabToTitle("john-smith")).toBe("John Smith");
  });
});
