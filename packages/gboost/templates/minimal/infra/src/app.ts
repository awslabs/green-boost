import { App, Aspects, Environment, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import { Api } from "./api.js";
import { config } from "./config.js";
import { Data } from "./data.js";
import { Ui } from "./ui.js";

const app = new App();
const env: Environment = {
  account: config.account,
  region: config.region,
};

const dataStack = new Data(app, config.getStackId("data"), { env });
const apiStack = new Api(app, config.getStackId("api"), {
  env,
  table: dataStack.table,
});
new Ui(app, config.getStackId("ui"), { env, api: apiStack.api });

Tags.of(app).add("appId", config.appId);
Aspects.of(app).add(new AwsSolutionsChecks());
