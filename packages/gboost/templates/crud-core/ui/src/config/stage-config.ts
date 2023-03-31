// @ts-nocheck
import { CommonStageConfig } from "@myapp1/core";

export class StageConfig extends CommonStageConfig {
  apiUrl = String(import.meta.env.VITE_API_URL);
  appTitle = String(import.meta.env.VITE_APP_TITLE);
}
