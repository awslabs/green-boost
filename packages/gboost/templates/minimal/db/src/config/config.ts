// @ts-nocheck
import { StageName } from "@{{GB_APP_ID}}/core";
import { StageConfig } from "./stage-config.js";

export const config = new StageConfig(
  process.env["STAGE_NAME"] || StageName.Local
);
