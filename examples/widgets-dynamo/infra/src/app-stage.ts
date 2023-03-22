import { Aspects, Stage, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import type { Construct } from "constructs";
import {
  setConstructDefaultProps,
  SuppressNags,
  Suppression,
} from "gboost-infra";
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
      config,
      env: config.env,
    });
    const apiStack = new Api(this, "api", {
      config,
      env: config.env,
      table: dataStack.table,
    });
    const uiStack = new Ui(this, "ui", {
      env: config.env,
      api: apiStack.api,
    });
    new Monitor(this, "monitor", {
      env: config.env,
      config,
      stacks: [dataStack, apiStack, uiStack],
    });

    Tags.of(this).add("appId", config.appId);
    Aspects.of(this).add(new SuppressNags(Object.values(Suppression)));
    Aspects.of(this).add(new AwsSolutionsChecks());
  }
}
