import { NagSuppressions } from "cdk-nag";
import type { IConstruct } from "constructs";

export function suppressCdkMonitoringConstructs(construct: IConstruct) {
  if (
    construct.node.path.endsWith(
      "/SecretsManagerMetricsPublisher/Lambda/ServiceRole/DefaultPolicy/Resource",
    )
  ) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-IAM5",
        reason:
          "CloudWatch Dashboard can monitor all secrets in SecretsManager",
      },
    ]);
  }
  if (
    construct.node.path.endsWith(
      "/SecretsManagerMetricsPublisher/Lambda/Resource",
    )
  ) {
    NagSuppressions.addResourceSuppressions(construct, [
      {
        id: "AwsSolutions-L1",
        reason:
          "cdk-monitoring-constructs maintainer will update Lambda version when required",
      },
    ]);
  }
}
