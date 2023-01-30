import type { HttpApi } from "@aws-cdk/aws-apigatewayv2-alpha";
import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { StaticSite } from "gboost-infra";

interface UiProps extends StackProps {
  api: HttpApi;
}

interface GetStaticSiteProps {
  api: HttpApi;
}

export class Ui extends Stack {
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id);
    const { api } = props;
    this.getStaticSite({ api });
  }

  getStaticSite({ api }: GetStaticSiteProps) {
    api.apiEndpoint;
    return new StaticSite(this, "StaticSite", {
      webAssetsPath: "../../ui-student",
      // TODO: update StaticSite to accept these
      // buildCommand: "pnpm build",
      // buildOutput: "dist",
      // buildEnvVars: { VITE_API_URL: api.apiEndpoint },
    });
  }
}
