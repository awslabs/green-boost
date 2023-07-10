import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { copy, OperationType } from "./operations";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

describe("copy", () => {
  const testSourceDirPath = resolve(thisFilePath, "../test-copy-source");
  const testDestDirPath = resolve(thisFilePath, "../test-copy-dest");
  beforeEach(() => {
    mkdirSync(testSourceDirPath);
    mkdirSync(testDestDirPath);
  });
  afterEach(() => {
    rmSync(testSourceDirPath, { recursive: true });
    rmSync(testDestDirPath, { recursive: true });
  });

  test("copies a file", () => {
    const testFileName = "test.ts";
    const testFileContents = "console.log('Hello world');";
    const testSourceFilePath = resolve(testSourceDirPath, testFileName);
    writeFileSync(testSourceFilePath, testFileContents);
    copy({
      destinationPath: testDestDirPath,
      name: "TestCopy",
      sourcePath: testSourceFilePath,
      type: OperationType.Copy,
    });
    const testDestFilePath = resolve(testDestDirPath, testFileName);
    const contents = readFileSync(testDestFilePath, { encoding: "utf-8" });
    expect(contents).toBe(testFileContents);
  });

  test("copies a directory recursively", () => {
    const testFileName = "test.ts";
    const testFileContents = "console.log('Hello world');";
    const testSourceFilePath = resolve(testSourceDirPath, testFileName);
    const nestedFileContents = "console.log('Hello nested world');";
    const nestedSourceDirPath = resolve(
      testSourceDirPath,
      "path",
      "to",
      "nested"
    );
    const nestedSourceFilePath = resolve(nestedSourceDirPath, testFileName);
    writeFileSync(testSourceFilePath, testFileContents);
    mkdirSync(nestedSourceDirPath, { recursive: true });
    writeFileSync(nestedSourceFilePath, nestedFileContents);
    copy({
      destinationPath: testDestDirPath,
      name: "TestCopy",
      sourcePath: testSourceDirPath,
      type: OperationType.Copy,
    });
    const testDestFilePath = resolve(testDestDirPath, testFileName);
    const nestedDestFilePath = resolve(nestedSourceDirPath, "test.ts");
    const contents = readFileSync(testDestFilePath, { encoding: "utf-8" });
    const nestedContents = readFileSync(nestedDestFilePath, {
      encoding: "utf-8",
    });
    expect(contents).toBe(testFileContents);
    expect(nestedContents).toBe(nestedFileContents);
  });
});
