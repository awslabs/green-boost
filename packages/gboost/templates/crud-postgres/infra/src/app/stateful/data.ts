// @ts-nocheck
import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Bucket, DbIamCluster } from "gboost-infra";
import type { Construct } from "constructs";
import type { StageConfig } from "../../config/stage-config.js";
import { FlowLogDestination, IVpc, SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";
import {
  AuroraPostgresEngineVersion,
  CfnDBCluster,
  Credentials,
  DatabaseClusterEngine,
} from "aws-cdk-lib/aws-rds";
import { InitDbCustomResource } from "./init-db-custom-resource.js";
import { NagSuppressions } from "cdk-nag";

interface DataProps extends StackProps {
  config: StageConfig;
}

export class Data extends Stack {
  cluster: DbIamCluster;

  constructor(scope: Construct, id: string, props: DataProps) {
    super(scope, id, props);

    const vpc = this.getVpc(props.config);
    this.cluster = this.getCluster(props.config, vpc);
    new InitDbCustomResource(this, "InitDbCR", {
      cluster: this.cluster,
    });
  }

  getVpc(config: StageConfig) {
    const flowLogsBucket = new Bucket(this, "FlowLogsBucket", {
      removalPolicy: config.isLocal
        ? RemovalPolicy.DESTROY
        : RemovalPolicy.RETAIN,
    });
    NagSuppressions.addResourceSuppressions(flowLogsBucket, [
      {
        id: "AwsSolutions-S1",
        reason: "Flow logs bucket doesn't need server access logs",
      },
    ]);
    return new Vpc(this, "Vpc", {
      maxAzs: config.isLocal ? 2 : 3,
      // every subnet group (PrivateIsolated, PrivateWithEgress, Ingress) will have a subnet
      // in each AZ
      // learn more here: https://stackoverflow.com/a/52994841/9658768
      subnetConfiguration: [
        // subnet for resources that only need to communicate with db
        { name: "PrivateIsolated", subnetType: SubnetType.PRIVATE_ISOLATED },
        // subnet for resources that need to communicate with db and internet
        {
          name: "PrivateWithEgress",
          subnetType: SubnetType.PRIVATE_WITH_EGRESS,
        },
        // subnet for NAT gateways which allow PrivateWithEgress subnet to
        // communicate with internet
        { name: "Public", subnetType: SubnetType.PUBLIC },
      ],
      flowLogs: {
        s3FlowLogs: { destination: FlowLogDestination.toS3(flowLogsBucket) },
      },
    });
  }

  getCluster(config: StageConfig, vpc: IVpc) {
    const cluster = new DbIamCluster(this, "DbCluster", {
      credentials: Credentials.fromGeneratedSecret(config.dbAdminUsername),
      dbIamUser: config.dbIamUsername,
      defaultDatabaseName: config.dbName,
      engine: DatabaseClusterEngine.auroraPostgres({
        version: AuroraPostgresEngineVersion.VER_14_6,
      }),
      instanceProps: {
        vpc,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        instanceType: "serverless" as any,
      },
      storageEncrypted: true,
      removalPolicy: config.isLocal
        ? RemovalPolicy.DESTROY
        : RemovalPolicy.RETAIN,
    });
    if (config.isLocal) {
      NagSuppressions.addResourceSuppressions(cluster, [
        {
          id: "AwsSolutions-RDS10",
          reason:
            "Aurora cluster doesn't need deletion protection for local development",
        },
      ]);
    }
    cluster.addRotationSingleUser();
    // workaround until AWS CDK supports serverless v2 in L3 construct
    // https://github.com/aws/aws-cdk/issues/20197
    const cfnDbCluster = cluster.node.findChild("Resource") as CfnDBCluster;
    cfnDbCluster.serverlessV2ScalingConfiguration = {
      // capacity unit is ACU. 1 ACU = 2GB memory
      minCapacity: config.isLocal ? 2 : 4,
      maxCapacity: config.isLocal ? 4 : 8,
    };
    return cluster;
  }
}
