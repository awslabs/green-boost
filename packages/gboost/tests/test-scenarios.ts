import parse from "minimist";
import { render } from "../src/create/render.js";
import { Answers, Authn, Feature } from "../src/create/ask.js";
import { exec, execSync } from "node:child_process";

const scenarios: Answers[] = [
  {
    authn: Authn.userPool,
    features: [Feature.demoDashboard, Feature.userMgmt],
    repoName: "test-1",
  },
];

const argv = parse(process.argv.slice(2));
const scenario = Number(argv.scenario);
if (!isNaN(scenario)) {
  console.log(`Testing Scenario ${scenario}`);
  await testScenario(scenario);
} else {
  throw new Error(
    "No scenario provided. Usage: ts-node-esm tests/test-scenario --scenario 1"
  );
}
async function testScenario(scenario: number) {
  const answer = scenarios[scenario];
  await render(answer);
  const execSyncOptions = {
    // must run outside green-boost folder b/c husky errors if initialized
    // in folder with parent .git folder
    cwd: `../../../../${answer.repoName}`,
    stdio: "inherit",
  } as const;
  execSync("pnpm i", execSyncOptions);
  execSync("gboost deploy-dev", execSyncOptions);
  console.log("gboost deploy-dev succeeded ✅");
  execSync("gboost destroy-dev --front-end-only", execSyncOptions);
  // Do async to take less time
  exec("gboost destroy-dev --back-end-only", execSyncOptions);
}
