// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import {
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
import { configs } from "../config/configs.js";
import { StageName } from "../config/stage-name.js";

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    const repo = Repository.fromRepositoryName(this, "CodeCommitRepo", "{{GB_APP_ID}}");
    const pipeline = new CodePipeline(this, "CdkPipeline", {
      // crossAccountKeys: true,
      selfMutation: true,
      synth: new ShellStep("ShellStep", {
        input: CodePipelineSource.codeCommit(repo, "main"),
        installCommands: [
          "curl -fsSL https://get.pnpm.io/install.sh | SHELL=`which bash` bash -",
          ". /root/.bashrc",
          "pnpm env use --global 18",
          "pnpm i -g aws-cdk",
          "HUSKY=0 pnpm i --frozen-lockfile",
        ],
        commands: [
          "pnpm lint",
          "pnpm typecheck",
          "pnpm test",
          "cd infra",
          'cdk --app "./node_modules/.bin/vite-node src/pipeline-app.ts" synth',
        ],
        primaryOutputDirectory: "./infra/cdk.out",
      }),
      codeBuildDefaults: {
        buildEnvironment: {
          buildImage: LinuxBuildImage.STANDARD_6_0,
          computeType: ComputeType.MEDIUM,
        },
      },
    });

    const devConfig = configs[StageName.Dev];
    const devStage = new AppStage(this, devConfig.stageId, devConfig);
    pipeline.addStage(devStage);

    const testConfig = configs[StageName.Test];
    const testStage = new AppStage(this, testConfig.stageId, testConfig);
    pipeline.addStage(testStage);

    const prodConfig = configs[StageName.Prod];
    const prodStage = new AppStage(this, prodConfig.stageId, prodConfig);
    const prodDeployment = pipeline.addStage(prodStage);
    prodDeployment.addPre(new ManualApprovalStep("ProductionApproval"));
  }
}
