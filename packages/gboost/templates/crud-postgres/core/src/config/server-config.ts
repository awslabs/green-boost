// @ts-nocheck
import { SharedConfig } from "./shared-config";
import { StageName } from "./stage-name";

/**
 * Config used only on server
 */
export class ServerConfig extends SharedConfig {
  static get dbAdminUsername() {
    return `${ServerConfig.sqlCompatAppId}_admin`;
  }
  static get dbIamUsername() {
    return `${ServerConfig.sqlCompatAppId}_iam_user`;
  }
  static get dbName() {
    return `${ServerConfig.sqlCompatAppId}_db`;
  }
  /**
   * Environment variable names. No [magic strings](https://deviq.com/antipatterns/magic-strings)!
   */
  static envVarNames = {
    STAGE_NAME: "STAGE_NAME",
    NEXT_PUBLIC_STAGE_NAME: "NEXT_PUBLIC_STAGE_NAME",
  };
  /**
   * Replace dashes with underscores to comply with SQL Naming conventions.
   */
  static get sqlCompatAppId() {
    return SharedConfig.appId.replaceAll("-", "_");
  }

  constructor(stageName?: string) {
    super(stageName || StageName.Local);
  }
}

export const serverConfig = new ServerConfig(
  process.env[ServerConfig.envVarNames.STAGE_NAME],
);
