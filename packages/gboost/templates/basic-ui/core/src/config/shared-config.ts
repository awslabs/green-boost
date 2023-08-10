import { StageName } from "./stage-name";

/**
 * Config shared between client and server
 */
export class SharedConfig {
  static appId = "{{GB_APP_ID}}";
  constructor(stageName?: string) {
    this.stageName = stageName || StageName.Local;
  }
  /**
   * `enumStageName` is always of type `StageName` whereas `stageName` is a
   * string allowing for alternative stage names when developing locally. This
   * is helpful so you don't have developers deploying CloudFormation Stacks on
   * top of each other.
   */
  get enumStageName(): StageName {
    return Object.values(StageName).includes(this.stageName as StageName)
      ? (this.stageName as StageName)
      : StageName.Local;
  }
  get isLocal() {
    return this.enumStageName === StageName.Local;
  }
  /**
   * `StageName` or string if developing locally
   */
  stageName: string;
}

export const sharedConfig = new SharedConfig(process.env["STAGE_NAME"]);
