// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { StaticSite, WebDeployment } from "gboost-infra";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const thisFilePath = fileURLToPath(import.meta.url);

export class Ui extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    const staticSite = new StaticSite(this, "StaticSite", {
      retainAccessLogs: false,
    });
    const workingDirectory = resolve(thisFilePath, "../../../../../ui");
    new WebDeployment(this, "WebDeployment", {
      buildConfig: {
        command: "pnpm build",
        workingDirectory,
      },
      destinationBucket: staticSite.bucket,
      distribution: staticSite.distribution,
      sourcePath: resolve(workingDirectory, "dist"),
    });
  }
}
