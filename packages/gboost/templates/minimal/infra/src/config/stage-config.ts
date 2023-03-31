// @ts-nocheck
import { Environment } from "aws-cdk-lib";
import { BucketEncryption } from "aws-cdk-lib/aws-s3";
import { mergeDeep } from "gboost-common";
import type { ConstructDefaultProps } from "gboost-infra";
import { StageConfig as CoreStageConfig, StageName } from "@{{GB_APP_ID}}/core";

/**
 * Configuration per stage.
 */
export class StageConfig extends CoreStageConfig {
  constructor(stageName: string) {
    super(stageName);
  }
  /**
   * AWS Account ID
   */
  get account() {
    const stageAccounts: Record<StageName, string> = {
      [StageName.Local]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [StageName.Dev]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [StageName.Test]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
      [StageName.Prod]: String(process.env["CDK_DEFAULT_ACCOUNT"]),
    };
    return stageAccounts[this.enumStageName];
  }
  get constructDefaultProps(): ConstructDefaultProps {
    const stageConstructDefaultProps: Record<StageName, ConstructDefaultProps> = {};
    return mergeDeep(
      this.#baseConstructDefaultProps,
      stageConstructDefaultProps[this.enumStageName]
    );
  }
  get env(): Environment {
    return { account: this.account, region: this.region };
  }
  /**
   * AWS Region
   */
  get region() {
    const stageRegions: Record<StageName, string> = {
      [StageName.Local]: String(process.env["CDK_DEFAULT_REGION"]),
      [StageName.Dev]: String(process.env["CDK_DEFAULT_REGION"]),
      [StageName.Test]: String(process.env["CDK_DEFAULT_REGION"]),
      [StageName.Prod]: String(process.env["CDK_DEFAULT_REGION"]),
    };
    return stageRegions[this.enumStageName];
  }
  /**
   * `${appId}-${stageName}`
   */
  get stageId() {
    return this.appId + "-" + this.stageName;
  }
  #baseConstructDefaultProps: ConstructDefaultProps = {
    bucket: {
      encryption: BucketEncryption.S3_MANAGED,
    },
  };
}
