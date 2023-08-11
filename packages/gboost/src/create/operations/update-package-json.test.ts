import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { OperationType, updatePackageJson } from "./operations.js";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

describe("updatePackageJson", () => {
  const testDirPath = resolve(thisFilePath, "../test-add-dependencies");
  beforeEach(() => {
    mkdirSync(testDirPath);
  });
  afterEach(() => {
    rmSync(testDirPath, { recursive: true });
  });
  test("updates dependencies", () => {
    const ogPackageJson = {
      name: "@gb/core",
      dependencies: {
        zod: "^3.20.2",
      },
    };
    const testFilePath = resolve(testDirPath, "package.json");
    writeFileSync(testFilePath, JSON.stringify(ogPackageJson));
    const newDependencies = { typescript: "^4.9.4" as const };
    updatePackageJson({
      name: "AddDependenciesTest",
      dependencies: newDependencies,
      sourcePaths: [testFilePath],
      type: OperationType.UpdatePackageJson,
    });
    const fileContents = readFileSync(testFilePath, { encoding: "utf-8" });
    const expectedPackageJson = {
      ...ogPackageJson,
      dependencies: {
        ...newDependencies,
        ...ogPackageJson.dependencies,
      },
    };
    expect(fileContents).toBe(JSON.stringify(expectedPackageJson, null, 2));
  });
});
