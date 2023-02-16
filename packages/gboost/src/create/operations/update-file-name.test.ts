import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { OperationType, updateFileNames } from "./operations.js";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

describe("updateFileName", () => {
  const testDirPath = resolve(thisFilePath, "../test-update-file-name");
  beforeEach(() => {
    mkdirSync(testDirPath);
  });
  afterEach(() => {
    rmSync(testDirPath, { recursive: true });
  });

  test("update a file name", () => {
    const testFilePath = resolve(testDirPath, "test.t");
    writeFileSync(testFilePath, "");
    updateFileNames({
      name: "TestUpdateFileNAme",
      updates: [{ newName: "test.ts", source: testFilePath }],
      type: OperationType.UpdateFileNames,
    });
    const file = statSync(resolve(dirname(testFilePath), "test.ts"));
    expect(file.isFile()).toBe(true);
  });
});
