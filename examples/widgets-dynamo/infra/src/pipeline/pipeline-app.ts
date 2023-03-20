import { App } from "aws-cdk-lib";
import { configs } from "../config/configs.js";
import { StageName } from "@myapp/core";
import { PipelineStack } from "./pipeline-stack.js";

const app = new App();
new PipelineStack(app, "myapp-pipeline", { env: configs[StageName.Dev] });
