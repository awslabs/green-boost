// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import type { RestApi } from "aws-cdk-lib/aws-apigateway";
import type { Construct } from "constructs";
import { StaticSite } from "gboost-infra";

interface UiProps extends StackProps {
  api: RestApi;
}

interface GetStaticSiteProps {
  api: RestApi;
}

export class Ui extends Stack {
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id);
    const { api } = props;
    this.getStaticSite({ api });
  }

  getStaticSite({ api }: GetStaticSiteProps) {
    api.url;
    return new StaticSite(this, "StaticSite", {
      webAssetsPath: "../../ui/dist",
      // TODO: update StaticSite to accept these
      // buildCommand: "pnpm build",
      // buildOutput: "dist",
      // buildEnvVars: { VITE_API_URL: api.apiEndpoint },
    });
  }
}
