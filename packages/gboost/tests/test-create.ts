import { execSync } from "node:child_process";
import type { Answers } from "../src/create/ask.js";
import { Template } from "../src/create/templates.js";
import { getTemplateOperations } from "../src/create/get-template-operations/get-template-operations.js";
import { executeOperations } from "../src/create/execute-operations.js";
import { tmpdir } from "node:os";
import { mkdtempSync, rmSync } from "node:fs";
import { resolve as resolvePath } from "node:path";
import { Option, program } from "commander";

const allTemplates: Template[] = [
  Template.Minimal,
  Template.WidgetsDynamo,
  Template.WidgetsPostgres,
  Template.WebPortal,
  Template.KitchenSink,
];

const templateAppIds: Record<Template, string> = {
  [Template.Minimal]: "min",
  [Template.WidgetsDynamo]: "wddb",
  [Template.WidgetsPostgres]: "wpg",
  [Template.WebPortal]: "wp",
  [Template.KitchenSink]: "ks",
};

program
  .option("--all")
  .addOption(
    new Option("--template <template>").choices(Object.values(Template))
  );
program.parse();
const { all, template } = program.opts();

if (all) {
  await testCreate(
    allTemplates.map((t) => ({ appId: templateAppIds[t], template: t }))
  );
} else if (template in Template) {
  await testCreate([{ appId: templateAppIds[template as Template], template }]);
} else {
  throw new Error(
    `Usage: ts-node tests/test-create.ts --template ${allTemplates.join("|")}`
  );
}

function testCreate(answers: Omit<Answers, "directory">[]) {
  const promises: Promise<unknown>[] = [];
  for (const answer of answers) {
    promises.push(
      new Promise((resolve, reject) => {
        console.log(`Testing Template ${template}`);
        const tmpDir = getTmpDir();
        console.log("Using tmp directory: " + tmpDir);
        let error: unknown;
        try {
          const operations = getTemplateOperations({
            ...answer,
            directory: tmpDir,
          });
          executeOperations(operations);
          run("pnpm i", tmpDir);
          run("pnpm deploy:local", resolvePath(tmpDir, "infra"));
          run("pnpm destroy:local", resolvePath(tmpDir, "infra"));
          rmSync(tmpDir, { force: true, recursive: true });
        } catch (err) {
          error = err;
        }
        if (error) {
          reject(error);
        } else {
          resolve(null);
        }
      })
    );
  }
  return Promise.all(promises);
}

function run(command: string, cwd: string) {
  execSync(command, {
    cwd,
    stdio: "inherit",
  });
}

function getTmpDir() {
  return mkdtempSync(tmpdir());
}
