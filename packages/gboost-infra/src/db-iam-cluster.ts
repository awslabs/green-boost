import { Stack } from "aws-cdk-lib";
import { Grant, type IGrantable } from "aws-cdk-lib/aws-iam";
import {
  DatabaseCluster as CdkDatabaseCluster,
  type DatabaseClusterProps as CdkDatabaseClusterProps,
} from "aws-cdk-lib/aws-rds";
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
} from "aws-cdk-lib/custom-resources";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";

interface DbIamClusterProps extends CdkDatabaseClusterProps {
  dbIamUser: string;
}
/**
 * Aurora Database Cluster for use with IAM Authentication. Adds `grantConnect`
 * method discussed here: https://github.com/aws/aws-cdk/issues/11851.
 */
export class DbIamCluster extends CdkDatabaseCluster {
  dbIamUser: string;
  resourceId: string;

  constructor(scope: Construct, id: string, props: DbIamClusterProps) {
    const { dbIamUser, ...restProps } = props;
    restProps.iamAuthentication = true;
    super(scope, id, restProps);
    this.dbIamUser = dbIamUser;

    const customResource = new AwsCustomResource(this, "DbResourceId", {
      // also called onCreate
      onUpdate: {
        service: "RDS",
        action: "describeDBClusters",
        parameters: {
          DBClusterIdentifier: this.clusterIdentifier,
        },
        physicalResourceId: PhysicalResourceId.fromResponse(
          "DBClusters.0.DbClusterResourceId",
        ),
      },
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });
    NagSuppressions.addResourceSuppressions(
      customResource,
      [
        {
          id: "AwsSolutions-IAM5",
          reason:
            "Cannot scope resource with cluster identifier (instead of *) b/c it's unknown",
        },
      ],
      true,
    );
    this.resourceId = customResource.getResponseField(
      "DBClusters.0.DbClusterResourceId",
    );
  }

  grantConnect(grantee: IGrantable) {
    Grant.addToPrincipal({
      actions: ["rds-db:connect"],
      grantee,
      resourceArns: [
        Stack.of(this).formatArn({
          resource: `dbuser:${this.resourceId}/${this.dbIamUser}`,
          service: "rds-db",
        }),
      ],
    });
  }
}
