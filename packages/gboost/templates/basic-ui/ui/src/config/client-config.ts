// @ts-nocheck
import { SharedConfig } from "@{{GB_APP_ID}}/core/shared";

class ClientConfig extends SharedConfig {
  appTitle = "My App 2";
}

export const clientConfig = new ClientConfig(
  process.env["NEXT_PUBLIC_STAGE_NAME"],
);
