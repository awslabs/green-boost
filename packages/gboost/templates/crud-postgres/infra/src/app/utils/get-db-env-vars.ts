// @ts-nocheck
import type { DbIamCluster } from "gboost-infra";

export function getDbEnvVars(cluster: DbIamCluster): Record<string, string> {
  return {
    PGPORT: String(cluster.clusterEndpoint.port),
    PGPORT_RO: String(cluster.clusterReadEndpoint.port),
    PGHOST: cluster.clusterEndpoint.hostname,
    PGHOST_RO: cluster.clusterReadEndpoint.hostname,
  };
}
