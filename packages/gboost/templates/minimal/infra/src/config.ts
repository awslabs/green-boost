export const config = {
  appId: "gb",
  /**
   * Can either be pipeline stage such as dev, test, or prod or a developer's
   * alias for local development
   */
  get stage(): string {
    const stage = process.env["STAGE"];
    if (!stage) {
      throw new Error(
        "process.env.STAGE is undefined. Stage is required for deployments"
      );
    } else {
      return stage;
    }
  },
  region: "us-east-1", // stage agnostic
  get account(): string {
    // stage specific
    const accounts: Record<string, string> = {
      [PipelineStage.dev]: "1234567890",
      [PipelineStage.test]: "2234567890",
      [PipelineStage.prod]: "3234567890",
    };
    return accounts[this.stage];
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
