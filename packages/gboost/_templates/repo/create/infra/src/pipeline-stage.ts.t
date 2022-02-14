---
to: infra/src/pipeline-stage.ts
---

import { CfnOutput, Stage, StageProps as _StageProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { BackEndStack } from "./back-end-stack.js";
import { FrontEndStack } from "./front-end-stack.js";
import { Stage as StageEnv } from "gboost-infra/stages";

interface StageProps extends _StageProps {
  stage: StageEnv;
}

export class PipelineStage extends Stage {
  backEndStack!: BackEndStack;
  frontEndStack!: FrontEndStack;
  awsRegion!: CfnOutput;
  gqlUrl!: CfnOutput;
  userPoolId!: CfnOutput;
  userPoolClientId!: CfnOutput;

  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);
    const { stage, env } = props;
    const pascalCaseStage = getPascalCase(stage);
    // optionally add logic to add multiple backend regions depending on stage
    // i.e. 1 region in dev, several in test and many in prod
    this.backEndStack = new BackEndStack(this, `BackEnd${pascalCaseStage}`, {
      stage,
      env,
    });
    this.awsRegion = this.backEndStack.awsRegion;
    this.gqlUrl = this.backEndStack.gqlUrl;
    this.userPoolId = this.backEndStack.userPoolId;
    this.userPoolClientId = this.backEndStack.userPoolClientId;
    this.frontEndStack = new FrontEndStack(this, `FrontEnd${pascalCaseStage}`, {
      stage,
      env,
      gqlUrl: this.backEndStack.gqlUrl.value,
    });
  }
}

function getPascalCase(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}
