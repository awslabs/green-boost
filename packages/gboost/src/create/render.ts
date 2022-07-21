import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve as nodeResolve } from "node:path";
import { renderFile } from "ejs";
import walkSync from "walk-sync";
import log from "loglevel";
import { fileURLToPath } from "node:url";
import { Answers, Feature } from "./ask.js";

const copyExtensions = ["png", "ico"];

/**
 * Walks _templates/create getting all file names and directories and then
 * creates them in the user's cwd under `repoName` (from `answers`) root directory.
 * Uses EJS to render templates with provided values and slices .t extensions off
 * @param answers response from `await prompts(...);`
 */
export async function render(answers: Answers): Promise<void> {
  const ignore = getIgnorePaths(answers);
  // ask.ts checks if repoName folder exists
  mkdirSync(answers.repoName);
  const __dirname = fileURLToPath(new URL(".", import.meta.url));
  const templatePath = nodeResolve(__dirname, "../../_templates/create");
  const fileEntries = walkSync.entries(templatePath, { ignore });
  log.debug(`Walking file entries: ${JSON.stringify(fileEntries)}`);
  const promises: Promise<void>[] = [];
  for (const entry of fileEntries) {
    promises.push(
      new Promise(async (resolve, reject) => {
        const oldPath = entry.fullPath;
        const newPath = nodeResolve(answers.repoName, entry.relativePath);
        try {
          if (entry.isDirectory()) {
            mkdirSync(newPath);
          } else if (copyExtensions.some((e) => newPath.endsWith(e))) {
            copyFileSync(oldPath, newPath);
          } else {
            const fileContents = await renderFile(oldPath, answers, {
              async: true,
            });
            log.debug(`Rendered content for file: ${oldPath}`);
            log.debug(JSON.stringify(fileContents));
            let _newPath = newPath;
            if (_newPath.endsWith(".t")) {
              _newPath = _newPath.slice(0, -2);
            }
            log.debug(`Renaming file from ${newPath} to ${_newPath}`);
            writeFileSync(_newPath, fileContents);
          }
          resolve();
        } catch (err) {
          reject(err);
        }
      })
    );
  }
  await Promise.all(promises);
}

function getIgnorePaths(answers: Answers): string[] {
  log.debug("Getting ignore Paths");
  const ignorePaths: string[] = [];
  if (!answers.features?.includes(Feature.demoDashboard)) {
    ignorePaths.push("ui/src/pages/Dashboard/**/*");
  }
  log.debug(`Ignore paths: ${JSON.stringify(ignorePaths)}`);
  return ignorePaths;
}
