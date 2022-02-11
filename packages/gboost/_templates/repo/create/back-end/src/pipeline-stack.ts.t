---
to: back-end/src/pipeline-stack.ts
---

import { Stack, StackProps } from "aws-cdk-lib";
import { Repository } from "aws-cdk-lib/aws-codecommit";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import type { Construct } from "constructs";
import { Stage } from "gb-lib/back/stages";
import { PipelineStage } from "./pipeline-stage.js";

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const repo = Repository.fromRepositoryName(
      this,
      "CodeCommitRepo",
      "my-gb-app"
    );
    // GitHub and BitBucket are supported through .connection() method
    const input = CodePipelineSource.codeCommit(repo, "main");

    const pipeline = new CodePipeline(this, "CodePipeline", {
      crossAccountKeys: true,
      synth: new ShellStep("Synth", {
        input,
        commands: [
          "pnpm i",
          "cd front-end",
          "pnpm build",
          "cd ../back-end",
          "pnpm dlx cdk synth",
        ],
        installCommands: [
          "curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm",
          "pnpm env use --global 16",
        ],
        primaryOutputDirectory: "back-end/cdk.out",
      }),
    });

    const dev = new PipelineStage(this, "Dev", {
      stage: Stage.Dev,
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },
    });

    const envVars = {
      AWS_REGION: dev.awsRegion,
      GQL_URL: dev.gqlUrl,
      USER_POOL_ID: dev.userPoolId,
      USER_POOL_CLIENT_ID: dev.userPoolClientId,
    };

    pipeline.addStage(dev, {
      stackSteps: [
        { stack: dev.backEndStack },
        {
          pre: [
            new ShellStep("ExportFrontEndEnvVars", {
              envFromCfnOutputs: envVars,
              // export cfn outputs from back-end for front-end
              commands: Object.keys(envVars).map(
                (v) => `export VITE_${v}=$${v}`
              ),
            }),
          ],
          stack: dev.frontEndStack,
        },
      ],
    });

    // pipeline.addStage(
    //   new AppStage(this, "Test", {
    //     stage: Stages.Test,
    //     env: {
    //       account: "<aws-account>",
    //       region: "<aws-region>",
    //     },
    //   })
    // );

    // pipeline.addStage(
    //   new AppStage(this, "Prod", {
    //     stage: Stages.Prod,
    //     env: {
    //       account: "<aws-account>",
    //       region: "<aws-region>",
    //     },
    //   })
    // );
  }
}
