// @ts-nocheck
import { Aspects, Stage, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import type { Construct } from "constructs";
import {
  setConstructDefaultProps,
  SuppressNags,
  Suppression,
} from "gboost-infra";
import { DataStack } from "./app/stateful/data-stack.js";
import { MonitorStack } from "./app/stateless/monitor-stack.js";
import { UiStack } from "./app/stateless/ui-stack.js";
import { Config } from "./config/config.js";
import { WafStack } from "./app/stateless/waf-stack.js";

export class AppStage extends Stage {
  constructor(scope: Construct, id: string, config: Config) {
    super(scope, id);
    setConstructDefaultProps(config.constructDefaultProps);
    const dataStack = new DataStack(this, "data", {
      config,
      env: config.env,
    });
    const wafStack = new WafStack(this, "waf", {
      config,
      crossRegionReferences: config.region !== "us-east-1",
      // in order to integrate with CloudFront, WAF must be in us-east-1
      env: { account: config.account, region: "us-east-1" },
    });
    const uiStack = new UiStack(this, "ui", {
      cluster: dataStack.cluster,
      config,
      crossRegionReferences: config.region !== "us-east-1",
      env: config.env,
      webAclArn: wafStack.webAcl.webAclArn,
    });
    uiStack;
    new MonitorStack(this, "monitor", {
      config,
      crossRegionReferences: config.region !== "us-east-1",
      env: config.env,
      stacks: [dataStack, wafStack], // TODO: add uiStack
    });

    Tags.of(this).add("appId", Config.appId);
    Aspects.of(this).add(new SuppressNags(Object.values(Suppression)));
    Aspects.of(this).add(new AwsSolutionsChecks());
  }
}
