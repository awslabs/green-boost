// @ts-nocheck
import { Stack, type StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { ManagedWebAclRuleName, WebAcl } from "./web-acl";
import type { Config } from "../../config/config";

interface WafStackProps extends StackProps {
  config: Config;
}

export class WafStack extends Stack {
  webAclArn: string;
  #props: WafStackProps;

  constructor(scope: Construct, id: string, props: WafStackProps) {
    super(scope, id, props);
    this.#props = props;
    this.#props;
    const webAcl = this.#createWebAcl();
    this.webAclArn = webAcl.webAclArn;
  }

  #createWebAcl() {
    return new WebAcl(this, "WebAcl", {
      scope: "CLOUDFRONT",
      managedRuleNames: Object.values(ManagedWebAclRuleName),
    });
  }
}
