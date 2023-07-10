import type { IAspect } from "aws-cdk-lib";
import type { IConstruct } from "constructs";
import { Suppression } from "./suppression";
import { suppressAwsLambdaBasicExecutionRole } from "./suppress-aws-lambda-basic-execution-role";
import { suppressCdkBucketNotifications } from "./suppress-cdk-bucket-notifications";
import { suppressCdkBucketDeployment } from "./suppress-cdk-bucket-deployment";
import { suppressCdkCustomResourceProvider } from "./suppress-cdk-custom-resource-provider";
import { suppressCdkLogRetention } from "./suppress-cdk-log-retention";
import { suppressCdkCustomResource } from "./suppress-cdk-custom-resource";
import { suppressCdkMonitoringConstructs } from "./suppress-cdk-monitoring-constructs";

/**
 * Suppresses common cdk-nags that are acceptable to many development teams.
 * Suppressions are controlled by passing in
 */
export class SuppressNags implements IAspect {
  #suppressions: Suppression[];
  constructor(suppressions: Suppression[] = []) {
    this.#suppressions = suppressions;
  }
  visit(construct: IConstruct) {
    if (this.#suppressions.includes(Suppression.AWSLambdaBasicExecutionRole)) {
      suppressAwsLambdaBasicExecutionRole(construct);
    }
    if (this.#suppressions.includes(Suppression.CdkBucketDeployment)) {
      suppressCdkBucketDeployment(construct);
    }
    if (this.#suppressions.includes(Suppression.CdkBucketNotifications)) {
      suppressCdkBucketNotifications(construct);
    }
    if (this.#suppressions.includes(Suppression.CdkCustomResource)) {
      suppressCdkCustomResource(construct);
    }
    if (this.#suppressions.includes(Suppression.CdkCustomResourceProvider)) {
      suppressCdkCustomResourceProvider(construct);
    }
    if (this.#suppressions.includes(Suppression.CdkLogRetention)) {
      suppressCdkLogRetention(construct);
    }
    if (this.#suppressions.includes(Suppression.CdkMonitoringConstructs)) {
      suppressCdkMonitoringConstructs(construct);
    }
  }
}
