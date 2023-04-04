// @ts-nocheck
import { Aspects, Stage, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import type { Construct } from "constructs";
import {
  setConstructDefaultProps,
  SuppressNags,
  Suppression,
} from "gboost-infra";
import { Ui } from "./app/stateless/ui.js";
import type { StageConfig } from "./config/stage-config.js";

export class AppStage extends Stage {
  constructor(scope: Construct, id: string, config: StageConfig) {
    super(scope, id);
    setConstructDefaultProps(config.constructDefaultProps);
    new Ui(this, "ui", {
      config,
      env: config.env,
    });

    Tags.of(this).add("appId", config.appId);
    Aspects.of(this).add(new SuppressNags(Object.values(Suppression)));
    Aspects.of(this).add(new AwsSolutionsChecks());
  }
}
