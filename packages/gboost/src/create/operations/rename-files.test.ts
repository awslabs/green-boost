import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { OperationType, renameFiles } from "./operations.js";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

describe("rename-files", () => {
  const testDirPath = resolve(thisFilePath, "../test-update-file-name");
  beforeEach(() => {
    mkdirSync(testDirPath);
  });
  afterEach(() => {
    rmSync(testDirPath, { recursive: true });
  });

  test("rename file", () => {
    const testFilePath = resolve(testDirPath, "test.ts.t");
    writeFileSync(testFilePath, "");
    renameFiles({
      directoryPath: resolve(testFilePath, ".."),
      name: "TestRenameFile",
      filePattern: /.+\.t$/,
      type: OperationType.RenameFiles,
      update: (oldFilePath) => oldFilePath.slice(0, -2),
    });
    const file = statSync(resolve(dirname(testFilePath), "test.ts"));
    expect(file.isFile()).toBe(true);
  });
});
