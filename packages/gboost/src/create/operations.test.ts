import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import {
  updatePackageJson,
  copy,
  OperationType,
  replace,
} from "./operations.js";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

describe("operations.ts", () => {
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
        values: [
          { find: new RegExp(replaceToken, "g"), replace: replaceValue },
        ],
      });
      const replacedFileContents = readFileSync(testFilePath, {
        encoding: "utf-8",
      });
      expect(replacedFileContents).toBe(getFileContents(replaceValue));
    });
  });

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
        sourcePath: testFilePath,
        type: OperationType.AddDependencies,
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
});
