import type { IAspect } from "aws-cdk-lib";
import type { IConstruct } from "constructs";
import { Suppression } from "./suppression.js";
import { suppressAwsLambdaBasicExecutionRole } from "./suppress-aws-lambda-basic-execution-role.js";
import { suppressCdkBucketNotifications } from "./suppress-cdk-bucket-notifications.js";
import { suppressCdkBucketDeployment } from "./suppress-cdk-bucket-deployment.js";
import { suppressCdkCustomResourceProvider } from "./suppress-cdk-custom-resource-provider.js";
import { suppressCdkLogRetention } from "./suppress-cdk-log-retention.js";
import { suppressCdkCustomResource } from "./suppress-cdk-custom-resource.js";

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
  }
}
