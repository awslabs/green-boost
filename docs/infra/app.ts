#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { DocsSiteStack } from "./docs-site-stack";

const app = new App();

const name = "gb-docs";
new DocsSiteStack(app, name, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
