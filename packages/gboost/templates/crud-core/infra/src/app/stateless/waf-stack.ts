// @ts-nocheck
import { Stack, type StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { ManagedRuleName, WebAcl } from "./web-acl";
import type { Config } from "../../config/config";

interface WafStackProps extends StackProps {
  config: Config;
}

export class WafStack extends Stack {
  webAcl: WebAcl;

  constructor(scope: Construct, id: string, props: WafStackProps) {
    super(scope, id, props);
    this.webAcl = this.#createWebAcl();
  }

  #createWebAcl() {
    return new WebAcl(this, "WebAcl", {
      managedRuleNames: Object.values(ManagedRuleName),
      scope: "CLOUDFRONT",
    });
  }
}
