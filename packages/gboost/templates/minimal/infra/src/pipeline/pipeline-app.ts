// @ts-nocheck
import { App } from "aws-cdk-lib";
import { StageName } from "@{{GB_APP_ID}}/core";
import { PipelineStack } from "./pipeline-stack.js";
import { StageConfig } from "../config/stage-config.js";

const app = new App();
const devConfig = new StageConfig(StageName.Dev);
new PipelineStack(app, "{{GB_APP_ID}}-pipeline", { env: devConfig.env });
