import parse from "minimist";
import { exec, execSync, ExecSyncOptions } from "node:child_process";
import { render } from "../src/create/render.js";
import { Answers, Authn, Feature } from "../src/create/ask.js";
import { platform } from "node:os";

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
  const isWindows = platform() === "win32";
  if (isWindows) {
    // windows tests run in parallel so without this, windows tests would
    // conflict with linux
    answer.repoName += "-win";
  }
  await render(answer);
  const execSyncOptions = {
    cwd: answer.repoName,
    stdio: "inherit",
  } as ExecSyncOptions;
  // https://github.com/typicode/husky/issues/851
  execSync("git init", execSyncOptions);
  execSync("pnpm add -g aws-cdk", execSyncOptions);
  execSync("pnpm i", execSyncOptions);
  const gboostCmd = "ts-node-esm ../src/index.ts";
  execSync(`${gboostCmd} deploy-dev`, execSyncOptions);
  console.log("gboost deploy-dev succeeded ✅");
  execSync(`${gboostCmd} destroy-dev --front-end-only`, execSyncOptions);
  // Do async to take less time
  exec(`${gboostCmd} destroy-dev --back-end-only`, execSyncOptions);
}
