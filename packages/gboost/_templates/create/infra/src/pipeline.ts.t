import { App, Environment } from "aws-cdk-lib";
import { PipelineStack } from "./pipeline-stack.js";

const app = new App();
const env: Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};
new PipelineStack(app, "pipeline", { env });
