// @ts-nocheck
import { App } from "aws-cdk-lib";
import { AppStage } from "./app-stage.js";
import { configs } from "./config/configs.js";
import { StageName } from "@{{GB_APP_ID}}/core";

const app = new App();
const localConfig = configs[StageName.Local];
new AppStage(app, localConfig.stageId, localConfig);
