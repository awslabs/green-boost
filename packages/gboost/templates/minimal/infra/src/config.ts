import { userInfo } from "node:os";

export const config = {
  appId: "gb",
  /**
   * Can either be pipeline stage such as dev, test, or prod or a developer's
   * alias for local development
   */
  stage: process.env["STAGE"] || userInfo().username,
  // TODO: update to specific region
  region: String(process.env["CDK_DEFAULT_REGION"]),
  get account(): string {
    // TODO: update to specific aws account numbers
    const accounts: Record<PipelineStage, string> = {
      [PipelineStage.dev]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [PipelineStage.test]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [PipelineStage.prod]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
    };
    if (this.isPipelineStage) {
      return accounts[this.stage as PipelineStage];
    } else {
      return accounts[PipelineStage.dev]; // default to dev if stage is non-pipeline stage
    }
  },
  /**
   * Utility function to determine whether cdk app is being deployed in a
   * pipeline like dev, test, or prod environments or developer is manually
   * deploying. For example, if you have expensive resources you don't want
   * to spin up for each developer you can use this boolean to conditionally
   * deploy
   */
  get isPipelineStage(): boolean {
    return this.stage in PipelineStage;
  },
  /**
   * Creates consistent stackId of format: stage-appId-stackName
   * This is helpful when developing in the same AWS account, CloudFormation
   * stacks will have unique names based on stage. Additionally, developers
   * can deploy multiple cdk apps with their same prefix based on appId.
   */
  getStackId(stackName: string): string {
    return `${this.stage}-${this.appId}-${stackName}`;
  },
};

/**
 * Stage which is deployed via pipeline contrasted to a local stage which is
 * deployed manually by developer
 */
export enum PipelineStage {
  dev = "dev",
  test = "test",
  prod = "prod",
}
