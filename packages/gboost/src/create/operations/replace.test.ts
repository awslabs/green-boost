import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { OperationType, replace } from "./operations";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

describe("replace", () => {
  const testDirPath = resolve(thisFilePath, "../test-replace");
  beforeEach(() => {
    mkdirSync(testDirPath);
  });
  afterEach(() => {
    rmSync(testDirPath, { recursive: true });
  });

  test("replaces a nested file's value", () => {
    const nestedDirPath = resolve(testDirPath, "path", "to", "nested");
    const testFilePath = resolve(nestedDirPath, "test.ts");
    const replaceToken = "{{REPLACE_ME}}";
    function getFileContents(token: string) {
      return `console.log('Hello, ${token}!');`;
    }
    mkdirSync(nestedDirPath, { recursive: true });
    writeFileSync(testFilePath, getFileContents(replaceToken));
    const replaceValue = "world";
    replace({
      name: "TestReplace",
      sourcePath: testDirPath,
      type: OperationType.Replace,
      values: [{ find: new RegExp(replaceToken, "g"), replace: replaceValue }],
    });
    const replacedFileContents = readFileSync(testFilePath, {
      encoding: "utf-8",
    });
    expect(replacedFileContents).toBe(getFileContents(replaceValue));
  });
});
