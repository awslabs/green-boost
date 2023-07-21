// @ts-nocheck
import { Aspects, Stage, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import type { Construct } from "constructs";
import {
  setConstructDefaultProps,
  SuppressNags,
  Suppression,
} from "gboost-infra";
import { UiStack } from "./app/stateless/ui-stack";
import { Config } from "./config/config";
import { WafStack } from "./app/stateless/waf-stack";

export class AppStage extends Stage {
  constructor(scope: Construct, id: string, config: Config) {
    super(scope, id);
    setConstructDefaultProps(config.constructDefaultProps);

    const wafStack = new WafStack(this, "waf", {
      // us-east-1 required for use with CloudFront
      env: { account: config.account, region: "us-east-1" },
      crossRegionReferences: config.region !== "us-east-1",
      config,
    });
    new UiStack(this, "ui", {
      config,
      env: config.env,
      webAclArn: wafStack.webAclArn,
    });

    Tags.of(this).add("appId", Config.appId);
    Aspects.of(this).add(new SuppressNags(Object.values(Suppression)));
    Aspects.of(this).add(new AwsSolutionsChecks());
  }
}
