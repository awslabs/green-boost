// @ts-nocheck
import { Aspects, Stage, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import type { Construct } from "constructs";
import { setConstructDefaultProps, SuppressOkNags } from "gboost-infra";
import { Ui } from "./app/stateless/ui.js";
import { configs } from "./config/config.js";
import type { StageName } from "./config/stage-name.js";

export class AppStage extends Stage {
  constructor(scope: Construct, id: StageName) {
    super(scope, id);
    const config = configs[id];
    setConstructDefaultProps(config.constructDefaultProps);
    const dataStack = new Data(app, config.getStackId("data"), {
      env,
      stackName: config.getStackName("api"),
    });
    const apiStack = new Api(app, config.getStackId("api"), {
      env,
      stackName: config.getStackName("api"),
      table: dataStack.table,
    });
    new Ui(this, "ui", {
      env: config.env,
      stackName: config.getStackName("ui"),
      api: apiStack.api,
    });

    Tags.of(this).add("appId", config.appId);
    Aspects.of(this).add(new SuppressOkNags());
    Aspects.of(this).add(new AwsSolutionsChecks());
  }
}
