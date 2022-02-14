import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { StaticSite } from "gboost-infra/static-site";

export class DocsSiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new StaticSite(this, "StaticSite", {
      outputDirName: "build",
      allowedIPs: [
        "72.21.196.64/29",
        "72.21.198.64/29",
        "54.240.217.0/27",
        "52.95.4.0/25",
        "204.246.162.32/28",
        "54.240.198.32/29",
        "52.46.249.224/29",
        "52.46.249.248/29",
        "205.251.233.176/29",
        "205.251.233.48/29",
      ],
    });
  }
}
