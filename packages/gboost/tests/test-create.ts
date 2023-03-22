import { exec } from "node:child_process";
import type { Answers } from "../src/create/ask.js";
import { Template } from "../src/create/templates.js";
import { getTemplateOperations } from "../src/create/get-template-operations/get-template-operations.js";
import { executeOperations } from "../src/create/execute-operations.js";
import { tmpdir } from "node:os";
import { mkdtemp, rm } from "node:fs/promises";
import { resolve as resolvePath } from "node:path";
import { Command, Option } from "@commander-js/extra-typings";

// const allTemplates = Object.values(Template);

const templateAnswers: Record<Template, Pick<Answers, "appId" | "appTitle">> = {
  [Template.Minimal]: { appId: "min", appTitle: "Minimal" },
  [Template.CrudDynamo]: { appId: "crud-ddb", appTitle: "CRUD DynamoDB" },
  [Template.CrudPostgres]: { appId: "crud-pg", appTitle: "CRUD PostgreSQL" },
  [Template.UserAuthMgmtCognito]: {
    appId: "auth-cognito",
    appTitle: "Auth Cognito",
  },
  [Template.Dashboard]: { appId: "dash", appTitle: "Dashboard" },
};

const program = new Command();
program
  .name("test-create")
  .description("CLI to test 'gboost create' templates")
  .option("--all")
  .addOption(
    new Option("--template <template>").choices(Object.values(Template))
  )
  .action(async ({ all, template }) => {
    try {
      if (all) {
        // TODO: uncomment below after all templates are done
        // await testCreate(
        //   allTemplates.map((t) => ({ ...templateAnswers[t], template: t }))
        // );
        await testTemplates([
          { ...templateAnswers.Minimal, template: Template.Minimal },
          { ...templateAnswers.CrudDynamo, template: Template.CrudDynamo },
        ]);
      } else if (template && template in Template) {
        await testTemplates([
          { ...templateAnswers[template as Template], template },
        ]);
      } else {
        program.help();
      }
    } catch (err) {
      console.error(err);
    }
  });
program.parse();

function testTemplates(answers: Omit<Answers, "directory">[]) {
  // .allSettled() allows working templates to finish before failing
  return Promise.allSettled(
    answers.map(async (answer) => {
      const log = (d: string) => console.log(`${answer.template}: ${d}`);
      const tmpDir = await mkdtemp(tmpdir());
      try {
        log("Testing Template");
        log(`Using tmp directory: ${tmpDir}`);
        const operations = getTemplateOperations({
          ...answer,
          directory: tmpDir,
        });
        executeOperations(operations);
        await run("pnpm i", tmpDir, log);
        await run("pnpm typecheck", tmpDir, log);
        await run("pnpm lint", tmpDir, log);
        await run("pnpm test", tmpDir, log);
        const infraDir = resolvePath(tmpDir, "infra");
        try {
          await run("pnpm deploy:local", infraDir, log);
        } catch (err) {
          log("Error while deploying");
        } finally {
          await run("pnpm destroy:local", infraDir, log);
        }
      } catch (err) {
        //
      } finally {
        await rm(tmpDir, { force: true, recursive: true });
      }
    })
  );
}

function run(command: string, cwd: string, log: (d: string) => void) {
  return new Promise((resolve, reject) => {
    const process = exec(command, {
      cwd,
    });
    process.stdout?.on("data", (d) => log(d.toString()));
    process.stderr?.on("data", (d) => log(d.toString()));
    process.on("exit", (code) => (code === 0 ? resolve(null) : reject(code)));
  });
}
