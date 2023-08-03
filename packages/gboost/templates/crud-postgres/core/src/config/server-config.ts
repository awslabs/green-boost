// @ts-nocheck
import { SharedConfig } from "./shared-config";
import { StageName } from "./stage-name";

/**
 * Config used only on server
 */
export class ServerConfig extends SharedConfig {
  static get dbAdminUsername() {
    return `${SharedConfig.appId}_admin`;
  }
  static get dbIamUsername() {
    return `${SharedConfig.appId}_iam_user`;
  }
  static get dbName() {
    return `${SharedConfig.appId}_db`;
  }
  /**
   * Environment variable names. No [magic strings](https://deviq.com/antipatterns/magic-strings)!
   */
  static envVarNames = {
    STAGE_NAME: "STAGE_NAME",
    NEXT_PUBLIC_STAGE_NAME: "NEXT_PUBLIC_STAGE_NAME",
  };

  constructor(stageName?: string) {
    super(stageName || StageName.Local);
  }
}

export const serverConfig = new ServerConfig(
  process.env[ServerConfig.envVarNames.STAGE_NAME],
);
