// @ts-nocheck
import { StageName } from "@{{GB_APP_ID}}/core";

export const config = {
  apiUrl: String(import.meta.env.VITE_API_URL),
  mode: import.meta.env.MODE,
  stage: import.meta.env.VITE_STAGE,
  get isLocal() {
    return this.stage === StageName.Local;
  },
};
