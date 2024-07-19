// @ts-nocheck
import { App } from "aws-cdk-lib";
import { StageName } from "@{{GB_APP_ID}}/core/shared";
import { PipelineStack } from "./pipeline-stack";
import { Config } from "../config/config";

const app = new App();
const devConfig = new Config(StageName.Dev);
new PipelineStack(app, "{{GB_APP_ID}}-pipeline", { env: devConfig.env });
