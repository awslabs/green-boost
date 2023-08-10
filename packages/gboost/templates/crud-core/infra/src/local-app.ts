// @ts-nocheck
import { App } from "aws-cdk-lib";
import { AppStage } from "./app-stage";
import { Config } from "./config/config";
import { userInfo } from "node:os";

const app = new App();
const localConfig = new Config(
  process.env["STAGE_NAME"] || userInfo().username,
);
new AppStage(app, localConfig.stageId, localConfig);
