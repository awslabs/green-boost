/**
 * Stage (environment) identifier. Local is for developer to deploy locally where all other stages are pipeline stages.
 */
export enum StageName {
  Local = "local",
  Dev = "dev",
  Test = "test",
  Prod = "prod",
}
