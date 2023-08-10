// @ts-nocheck
import { Port } from "aws-cdk-lib/aws-ec2";
import type { DbIamCluster, Function as GbFunction } from "gboost-infra";

/**
 * Connect Aurora PostgreSQL DB to Node.js Lambda Function. Add required environment
 * variables.
 */
export function connectFnToDb(cluster: DbIamCluster, fn: GbFunction) {
  // TODO: verify this works
  fn.connections.allowTo(cluster, Port.tcp(cluster.clusterEndpoint.port));
  cluster.grantConnect(fn);
  fn.addEnvironment("PGHOST", String(cluster.clusterEndpoint.hostname));
  fn.addEnvironment("PGHOST_RO", String(cluster.clusterReadEndpoint.hostname));
}
