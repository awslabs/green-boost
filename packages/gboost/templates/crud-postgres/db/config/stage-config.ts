// @ts-nocheck
import { StageConfig as CoreStageConfig } from "@{{GB_APP_ID}}/core";
import { getEnvVar } from "@{{GB_APP_ID}}/core/utils";

export class StageConfig extends CoreStageConfig {
  constructor(stageName: string) {
    super(stageName);
  }
  get dbHost() {
    return getEnvVar("PGHOST");
  }
  get dbHostReadOnly() {
    return getEnvVar("PGHOST_RO");
  }
  get dbPort() {
    return Number(getEnvVar("PGPORT"));
  }
  get dbPortReadOnly() {
    return Number(getEnvVar("PGPORT_RO"));
  }
}
