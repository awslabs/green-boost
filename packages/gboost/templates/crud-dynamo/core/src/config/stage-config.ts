// @ts-nocheck
import { StageName } from "./stage-name.js";
import { getEnvVar } from "../utils/get-env-var.js";

/**
 * CommonStageConfig shared with ui/
 */
export class CommonStageConfig {
  constructor(stageName: string) {
    this.stageName = stageName;
  }
  appId = "{{GB_APP_ID}}";
  /**
   * `enumStageName` is always of type `StageName` whereas `stageName` is a
   * string allowing for alternative stage names when developing locally. This
   * is helpful so you don't have developers deploying CloudFormation Stacks on
   * top of each other.
   */
  get enumStageName(): StageName {
    return this.stageName in StageName
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

/**
 * StageConfig shared with infra/ and db/
 */
export class StageConfig extends CommonStageConfig {
  constructor(stageName: string) {
    super(stageName);
    this.stageName = stageName;
  }
  get itemTableName() {
    return getEnvVar("TABLE_NAME");
  }
}
