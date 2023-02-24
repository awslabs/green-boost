// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import {
  BuildSpec,
  ComputeType,
  LinuxBuildImage,
} from "aws-cdk-lib/aws-codebuild";
import { Repository } from "aws-cdk-lib/aws-codecommit";
import {
  CodePipeline,
  CodePipelineSource,
  ManualApprovalStep,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import type { Construct } from "constructs";
import { AppStage } from "../app-stage.js";
import { StageName } from "../config/stage-name.js";

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    const repo = Repository.fromRepositoryName(this, "CodeCommitRepo", "myapp");
    const pipeline = new CodePipeline(this, "CdkPipeline", {
      // crossAccountKeys: true,
      selfMutation: true,
      synth: new ShellStep("ShellStep", {
        input: CodePipelineSource.codeCommit(repo, "main"),
        installCommands: [
          "curl -fsSL https://get.pnpm.io/install.sh",
          "pnpm i -g aws-cdk",
          "HUSKY=0 pnpm ci",
        ],
        commands: [
          "pnpm lint",
          "pnpm typecheck",
          "pnpm test",
          "cd infra",
          'cdk --app "./node_modules/.bin/vite-node src/pipeline-app.ts" synth ',
        ],
        primaryOutputDirectory: "./infra/cdk.out",
      }),
      codeBuildDefaults: {
        buildEnvironment: {
          buildImage: LinuxBuildImage.AMAZON_LINUX_2_4,
          computeType: ComputeType.MEDIUM,
        },
        partialBuildSpec: BuildSpec.fromObject({
          version: "0.2",
          phases: {
            install: {
              "runtime-versions": { nodejs: "18" },
            },
          },
        }),
      },
    });

    const devStage = new AppStage(this, StageName.Dev);
    pipeline.addStage(devStage); // TODO: add health check

    const testStage = new AppStage(this, StageName.Test);
    pipeline.addStage(testStage); // TODO: add health check

    const prodStage = new AppStage(this, StageName.Prod);
    const prodDeployment = pipeline.addStage(prodStage); // TODO: add health check
    prodDeployment.addPre(new ManualApprovalStep("ProductionApproval"));
  }
}
