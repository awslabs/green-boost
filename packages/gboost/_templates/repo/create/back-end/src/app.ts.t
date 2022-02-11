---
to: back-end/src/app.ts
---

import { readFileSync } from "node:fs";
import { App, Aspects, Environment } from "aws-cdk-lib";
import { Stage } from "gb-lib/back/stages";
import { BackEndStack } from "./back-end-stack.js";
import { FrontEndStack } from "./front-end-stack.js";
import { AwsSolutionsChecks } from "cdk-nag";

const cdkJson = JSON.parse(
  readFileSync(new URL("../cdk.json", import.meta.url), { encoding: "utf8" })
);
const devPrefix = cdkJson.context.devPrefix;

const app = new App();
const env: Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};
const { gqlUrl } = new BackEndStack(app, `${devPrefix}-back-end`, {
  env,
  stage: Stage.Dev,
});
new FrontEndStack(app, `${devStackPrefix}-front-end`, {
  env,
  gqlUrl: gqlUrl.value,
  stage: Stage.Dev,
});
Aspects.of(app).add(new AwsSolutionsChecks());
