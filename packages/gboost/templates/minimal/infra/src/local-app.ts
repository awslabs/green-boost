// @ts-nocheck
import { App } from "aws-cdk-lib";
import { AppStage } from "./app-stage.js";
import { StageConfig } from "./config/stage-config.js";
import { userInfo } from "node:os";

const app = new App();
const localConfig = new StageConfig(
  process.env["STAGE_NAME"] || userInfo().username
);
new AppStage(app, localConfig.stageId, localConfig);
