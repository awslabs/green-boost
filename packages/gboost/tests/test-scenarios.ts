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
const scenario = argv.scenario;
if (scenario) {
  console.log(`Testing Scenario ${scenario}`);
  await testScenario(scenario);
}
async function testScenario(scenario: number) {
  const answer = scenarios[scenario];
  await render(answer);
  const execSyncOptions = { cwd: answer.repoName, stdio: "inherit" } as const;
  execSync("pnpm i", execSyncOptions);
  execSync("gboost deploy-dev", execSyncOptions);
  console.log("gboost deploy-dev succeeded ✅");
  execSync("gboost destroy-dev --back-end-only", execSyncOptions);
  // Do async to take less time
  exec("gboost destroy-dev --front-end-only", execSyncOptions);
}
