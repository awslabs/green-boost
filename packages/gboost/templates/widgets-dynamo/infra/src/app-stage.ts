// @ts-nocheck
import { Aspects, Stage, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import type { Construct } from "constructs";
import { setConstructDefaultProps, SuppressOkNags } from "gboost-infra";
import { Data } from "./app/stateful/data.js";
import { Api } from "./app/stateless/api.js";
import { Monitor } from "./app/stateless/monitor.js";
import { Ui } from "./app/stateless/ui.js";
import type { StageConfig } from "./config/stage-config.js";

export class AppStage extends Stage {
  constructor(scope: Construct, id: string, config: StageConfig) {
    super(scope, id);
    setConstructDefaultProps(config.constructDefaultProps);
    const dataStack = new Data(this, "data", {
      env: config.env,
    });
    const apiStack = new Api(this, "api", {
      env: config.env,
      isLocal: config.isLocal,
      stageName: config.stageName,
      table: dataStack.table,
    });
    const uiStack = new Ui(this, "ui", {
      env: config.env,
      api: apiStack.api,
    });
    new Monitor(this, "monitor", {
      env: config.env,
      stacks: [dataStack, apiStack, uiStack],
    });

    Tags.of(this).add("appId", config.appId);
    Aspects.of(this).add(new SuppressOkNags());
    Aspects.of(this).add(new AwsSolutionsChecks());
  }
}
