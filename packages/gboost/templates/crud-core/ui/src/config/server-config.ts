// @ts-nocheck
import { ServerConfig as BaseServerConfig } from "@/core-server";

export class ServerConfig extends BaseServerConfig {}

export const serverConfig = new ServerConfig(
  process.env[ServerConfig.envVarNames.STAGE_NAME],
);
