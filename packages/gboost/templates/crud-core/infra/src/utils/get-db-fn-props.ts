// @ts-nocheck
import { SubnetType } from "aws-cdk-lib/aws-ec2";
import type { DbIamCluster, FunctionProps } from "gboost-infra";

/**
 * Get function props needed to connect Node.js Lambda Function to Aurora PostgreSQL DB
 */
export function getDbFnProps(
  cluster: DbIamCluster,
): Omit<FunctionProps, "entry"> {
  return {
    vpc: cluster.vpc,
    vpcSubnets: { subnetType: SubnetType.PRIVATE_WITH_EGRESS },
  };
}
