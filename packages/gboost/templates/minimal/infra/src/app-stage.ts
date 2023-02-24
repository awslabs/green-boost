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
    new Ui(this, "ui", {
      env: config.env,
      stackName: config.getStackName("ui"),
    });

    Tags.of(this).add("appId", config.appId);
    Aspects.of(this).add(new SuppressOkNags());
    Aspects.of(this).add(new AwsSolutionsChecks());
  }
}
