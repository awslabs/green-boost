// @ts-nocheck
import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import type { RestApi } from "aws-cdk-lib/aws-apigateway";
import type { Construct } from "constructs";
import { StaticSite, WebDeployment } from "gboost-infra";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StageConfig } from "../../config/stage-config.js";

interface UiProps extends StackProps {
  api: RestApi;
  config: StageConfig;
}

const thisFilePath = fileURLToPath(import.meta.url);

export class Ui extends Stack {
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id, props);
    const { api, config } = props;
    const staticSite = new StaticSite(this, "StaticSite", {
      retainAccessLogs: !config.isLocal,
      responseHeaders: {
        securityHeaders: {
          contentSecurityPolicy: {
            defaultSrc: ["self"],
            formAction: ["none"],
            navigateTo: ["none"],
            objectSrc: ["none"],
            styleSrc: ["self", "unsafe-inline"], // required for Amplify UI
            connectSrc: ["self", api.url],
          },
        },
      },
    });
    new CfnOutput(this, "CloudFrontDomainName", {
      value: staticSite.distribution.domainName,
    });
    const workingDirectory = resolve(thisFilePath, "../../../../../ui");
    new WebDeployment(this, "WebDeployment", {
      buildConfig: {
        command: "pnpm build",
        workingDirectory,
        environment: {
          VITE_API_URL: api.url,
          VITE_STAGE_NAME: config.stageName,
        },
      },
      destinationBucket: staticSite.bucket,
      distribution: staticSite.distribution,
      sourcePath: resolve(workingDirectory, "dist"),
    });
  }
}
