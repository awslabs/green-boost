// @ts-nocheck
import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { StaticSite, WebDeployment } from "gboost-infra";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StageConfig } from "../../config/stage-config.js";

interface UiProps extends StackProps {
  config: StageConfig;
}

const thisFilePath = fileURLToPath(import.meta.url);

export class Ui extends Stack {
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id, props);
    const { config } = props;
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
          },
        },
      },
    });
    new CfnOutput(this, "CloudFrontDistributionDomain", {
      value: staticSite.distribution.distributionDomainName,
    });
    const workingDirectory = resolve(thisFilePath, "../../../../../ui");
    new WebDeployment(this, "WebDeployment", {
      buildConfig: {
        command: "pnpm build",
        environment: {
          VITE_STAGE_NAME: config.stageName,
        },
        workingDirectory,
      },
      destinationBucket: staticSite.bucket,
      distribution: staticSite.distribution,
      sourcePath: resolve(workingDirectory, "dist"),
    });
  }
}
