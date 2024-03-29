import { Stack, StackProps } from "aws-cdk-lib";
import type { RestApi } from "aws-cdk-lib/aws-apigateway";
import type { Construct } from "constructs";
import { StaticSite, WebDeployment } from "gboost-infra";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

interface UiProps extends StackProps {
  api: RestApi;
}

const thisFilePath = fileURLToPath(import.meta.url);

export class Ui extends Stack {
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id, props);
    const { api } = props;
    const staticSite = new StaticSite(this, "StaticSite", {
      retainAccessLogs: false,
      responseHeaders: {
        securityHeaders: {
          contentSecurityPolicy: {
            defaultSrc: ["self"],
            formAction: ["none"],
            navigateTo: ["none"],
            objectSrc: ["none"],
            styleSrc: ["self", "unsafe-inline"], // required for Amplify UI
          },
        },
      },
    });
    const workingDirectory = resolve(thisFilePath, "../../../../../ui");
    new WebDeployment(this, "WebDeployment", {
      buildConfig: {
        command: "pnpm build",
        workingDirectory,
        environment: {
          VITE_API_URL: api.url,
        },
      },
      destinationBucket: staticSite.bucket,
      distribution: staticSite.distribution,
      sourcePath: resolve(workingDirectory, "dist"),
    });
  }
}
