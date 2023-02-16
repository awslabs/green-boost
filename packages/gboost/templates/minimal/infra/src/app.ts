// @ts-nocheck
import { App, Aspects, Environment, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import { config } from "./config.js";
import { Ui } from "./ui.js";

const app = new App();
const env: Environment = {
  account: config.account,
  region: config.region,
};

new Ui(app, config.getStackId("ui"), { env });

Tags.of(app).add("appId", config.appId);
Aspects.of(app).add(new AwsSolutionsChecks());