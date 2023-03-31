// @ts-nocheck
import { StageConfig as CoreStageConfig } from "@{{GB_APP_ID}}/core";

export class StageConfig extends CoreStageConfig {
  appTitle = String(import.meta.env.VITE_APP_TITLE);
}
