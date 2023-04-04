import { StageName } from "./stage-name.js";
import { StageConfig } from "./stage-config.js";

export const config = new StageConfig(
  process.env["STAGE_NAME"] || StageName.Local
);
