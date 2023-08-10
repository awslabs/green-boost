// @ts-nocheck
import { RemovalPolicy, Stack, type StackProps } from "aws-cdk-lib";
import { Bucket, DbIamCluster } from "gboost-infra";
import type { Construct } from "constructs";
import { Config } from "../../config/config";
import {
  FlowLogDestination,
  type IVpc,
  SubnetType,
  Vpc,
  InstanceClass,
  InstanceSize,
  InstanceType,
  MachineImage,
  Port,
  BastionHostLinux,
} from "aws-cdk-lib/aws-ec2";
import {
  AuroraPostgresEngineVersion,
  ClusterInstance,
  Credentials,
  DatabaseClusterEngine,
} from "aws-cdk-lib/aws-rds";
import { DbMigrationCustomResource } from "./db-migration-custom-resource.js";
import { NagSuppressions } from "cdk-nag";
import { ManagedPolicy } from "aws-cdk-lib/aws-iam";

interface DataStackProps extends StackProps {
  config: Config;
}

export class DataStack extends Stack {
  cluster: DbIamCluster;
  #props: DataStackProps;

  constructor(scope: Construct, id: string, props: DataStackProps) {
    super(scope, id, props);
    this.#props = props;
    const vpc = this.#getVpc();
    this.cluster = this.#getCluster(vpc);
    this.#addSsmBastionHost();
    new DbMigrationCustomResource(this, "InitDbCR", {
      cluster: this.cluster,
    });
  }

  #getVpc() {
    const flowLogsBucket = new Bucket(this, "FlowLogsBucket");
    NagSuppressions.addResourceSuppressions(flowLogsBucket, [
      {
        id: "AwsSolutions-S1",
        reason: "Flow logs bucket doesn't need server access logs",
      },
    ]);
    return new Vpc(this, "Vpc", {
      maxAzs: this.#props.config.isProd ? 3 : 2, // aurora requires >= 2 azs
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

  #getCluster(vpc: IVpc) {
    const instanceType = InstanceType.of(
      InstanceClass.T4G,
      InstanceSize.MEDIUM,
    );
    const cluster = new DbIamCluster(this, "DbCluster", {
      credentials: Credentials.fromGeneratedSecret(Config.dbAdminUsername),
      dbIamUser: Config.dbIamUsername,
      defaultDatabaseName: Config.dbName,
      engine: DatabaseClusterEngine.auroraPostgres({
        version: AuroraPostgresEngineVersion.VER_15_3,
      }),
      writer: ClusterInstance.provisioned("WriterInstance", {
        instanceType,
      }),
      // Uncomment below if prod experiences scaling issues
      // readers: this.#props.config.isProd
      //   ? [
      //       ClusterInstance.provisioned("ReaderInstance", {
      //         instanceType,
      //       }),
      //     ]
      //   : [],
      vpc,
      vpcSubnets: { subnetType: SubnetType.PRIVATE_ISOLATED },
      storageEncrypted: true,
      deletionProtection: this.#props.config.isProd,
      removalPolicy: this.#props.config.isProd
        ? RemovalPolicy.RETAIN
        : RemovalPolicy.DESTROY,
    });
    if (!this.#props.config.isProd) {
      NagSuppressions.addResourceSuppressions(cluster, [
        {
          id: "AwsSolutions-RDS10",
          reason:
            "Aurora cluster doesn't need deletion protection for non-prod stages",
        },
      ]);
    }
    cluster.addRotationSingleUser();
    return cluster;
  }

  #addSsmBastionHost() {
    const bastion = new BastionHostLinux(this, "SSMBastionHost", {
      vpc: this.cluster.vpc,
      instanceName: `${this.#props.config.stageName}-ssm-db-bastion`,
      instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
      machineImage: MachineImage.latestAmazonLinux2023({
        cachedInContext: true,
      }),
    });
    const ssmManagedInstanceCorePolicy = ManagedPolicy.fromAwsManagedPolicyName(
      "AmazonSSMManagedInstanceCore",
    );
    bastion.role.addManagedPolicy(ssmManagedInstanceCorePolicy);
    this.cluster.connections.allowFrom(
      bastion.connections,
      Port.tcp(this.cluster.clusterEndpoint.port),
      "Bastion host connection",
    );
    this.cluster.grantConnect(bastion);
    NagSuppressions.addResourceSuppressions(
      bastion,
      [
        {
          id: "AwsSolutions-IAM4",
          reason:
            "Bastion host can have managed policy: AmazonSSMManagedInstanceCore",
        },
        {
          id: "AwsSolutions-IAM5",
          reason: "Bastion host can have wildcard policies",
        },
        {
          id: "AwsSolutions-EC26",
          reason: "Bastion host's volumes don't need to be encrypted",
        },
        {
          id: "AwsSolutions-EC28",
          reason:
            "Bastion host's autoscaling launch config doesn't need detailed monitoring",
        },
        {
          id: "AwsSolutions-EC29",
          reason: "Bastion host's ASG doesn't need termination protection",
        },
      ],
      true,
    );
    return bastion;
  }
}
