// @ts-nocheck
import { CustomResource, Duration } from "aws-cdk-lib";
import { Port, SubnetType } from "aws-cdk-lib/aws-ec2";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { Function as GbFunction, DbIamCluster } from "gboost-infra";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getDbEnvVars } from "../utils/get-db-env-vars.js";

const thisFilePath = fileURLToPath(import.meta.url);

interface InitDbCustomResourceProps {
  cluster: DbIamCluster;
}

export class InitDbCustomResource extends Construct {
  constructor(scope: Construct, id: string, props: InitDbCustomResourceProps) {
    super(scope, id);

    const { cluster } = props;

    const fn = this.createFunction(cluster);
    const provider = this.createProvider(fn);
    this.createCustomResource(provider.serviceToken);
  }

  createFunction(cluster: DbIamCluster): GbFunction {
    const fn = new GbFunction(this, "InitDbFunction", {
      entry: resolve(
        thisFilePath,
        "../../../../../db/src/migrations/migration-handler.ts"
      ),
      timeout: Duration.minutes(2),
      memorySize: 1024,
      environment: {
        SECRET_ARN: cluster.secret?.secretArn as string,
        ...getDbEnvVars(cluster),
      },
      bundling: {
        externalModules: ["pg-native"],
      },
      vpc: cluster.vpc,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_WITH_EGRESS,
      },
    });

    cluster.secret?.grantRead(fn);
    cluster.connections.allowFrom(fn, Port.tcp(cluster.clusterEndpoint.port));
    cluster.grantConnect(fn);
    if (cluster.node.defaultChild) {
      // prevent migration running before db instance is ready
      fn.node.addDependency(cluster.node.defaultChild);
    }
    return fn;
  }

  createProvider(fn: GbFunction) {
    const provider = new Provider(this, "InitDbProvider", {
      onEventHandler: fn,
    });
    return provider;
  }

  /**
   * @link https://ilikekillnerds.com/2020/04/how-to-get-the-hash-of-a-file-in-node-js/
   */
  getHashOfFile(path: string) {
    const fileBuffer = readFileSync(path);
    const hashSum = createHash("sha1");
    hashSum.update(fileBuffer);
    return hashSum.digest("base64");
  }

  createCustomResource(serviceToken: string) {
    // NOTE: if a migration is expected to be applied to DB but doesn't change
    // this file, it will not be applied.
    const migrationsHash = this.getHashOfFile(
      resolve(
        thisFilePath,
        "../../../../../db/src/migrations/migration-provider.ts"
      )
    );

    new CustomResource(this, "InitDbCustomResource", {
      serviceToken: serviceToken,
      properties: {
        migrationsHash,
      },
    });
  }
}
