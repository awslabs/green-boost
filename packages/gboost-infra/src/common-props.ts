export enum Stage {
  Prod = "prod",
  Test = "test",
  Dev = "dev",
}

export interface CommonProps {
  /**
   * Stage or type of environment to deploy to
   * @default Stage.Dev
   */
  stage?: Stage;
}
