import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { StaticSite } from "gboost-infra";

export class Ui extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    this.getStaticSite();
  }

  getStaticSite() {
    return new StaticSite(this, "StaticSite", {
      webAssetsPath: "../../ui",
      // TODO: update StaticSite to accept these
      // buildCommand: "pnpm build",
      // buildOutput: "dist",
      // buildEnvVars: { VITE_API_URL: api.apiEndpoint },
    });
  }
}
