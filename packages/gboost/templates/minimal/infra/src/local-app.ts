// @ts-nocheck
import { App } from "aws-cdk-lib";
import { AppStage } from "./app-stage.js";
import { StageName } from "./config/stage-name.js";

const app = new App();
new AppStage(app, StageName.Local);
