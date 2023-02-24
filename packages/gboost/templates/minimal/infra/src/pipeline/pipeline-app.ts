// @ts-nocheck
import { App } from "aws-cdk-lib";
import { configs } from "../config/config.js";
import { StageName } from "../config/stage-name.js";
import { PipelineStack } from "./pipeline-stack.js";

const app = new App();
new PipelineStack(app, "myapp-pipeline", { env: configs[StageName.Dev] });
