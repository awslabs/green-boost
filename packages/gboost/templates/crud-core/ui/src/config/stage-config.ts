// @ts-nocheck
import { CommonStageConfig } from "@{{GB_APP_ID}}/core";

export class StageConfig extends CommonStageConfig {
  apiUrl = String(import.meta.env.VITE_API_URL);
  appTitle = String(import.meta.env.VITE_APP_TITLE);
}
