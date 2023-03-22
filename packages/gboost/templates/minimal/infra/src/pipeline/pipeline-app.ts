// @ts-nocheck
import { App } from "aws-cdk-lib";
import { configs } from "../config/configs.js";
import { StageName } from "@{{GB_APP_ID}}/core";
import { PipelineStack } from "./pipeline-stack.js";

const app = new App();
new PipelineStack(app, "{{GB_APP_ID}}-pipeline", { env: configs[StageName.Dev] });
