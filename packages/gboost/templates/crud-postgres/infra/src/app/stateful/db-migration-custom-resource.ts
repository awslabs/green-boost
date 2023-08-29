// @ts-nocheck
import { CustomResource, Duration } from "aws-cdk-lib";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { Function as GbFunction, DbIamCluster } from "gboost-infra";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { getDbFnProps } from "../../utils/get-db-fn-props";
import { connectFnToDb } from "../../utils/connect-fn-to-db";
import { randomUUID } from "node:crypto";

const thisFilePath = fileURLToPath(import.meta.url);

interface DbMigrationCustomResourceProps {
  cluster: DbIamCluster;
}

export class DbMigrationCustomResource extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: DbMigrationCustomResourceProps,
  ) {
    super(scope, id);

    const { cluster } = props;

    const fn = this.createFunction(cluster);
    const provider = this.createProvider(fn);
    this.createCustomResource(provider.serviceToken);
  }

  createFunction(cluster: DbIamCluster): GbFunction {
    const migrateFn = new GbFunction(this, "DbMigrationFunction", {
      entry: resolve(thisFilePath, "../../../../../core/src/db/migrate.ts"),
      timeout: Duration.minutes(2),
      memorySize: 1024,
      environment: {
        DB_SECRET_ARN: cluster.secret?.secretArn as string,
        POWERTOOLS_SERVICE_NAME: "{{GB_APP_ID}}-DbMigrate",
      },
      bundling: {
        commandHooks: {
          afterBundling: () => [],
          beforeBundling: (inputDir, outputDir) => {
            // windows compat
            const convertPath = (path: string) => path.replaceAll("\\", "/");
            return [
              `node -e "fs.mkdirSync('${convertPath(
                resolve(outputDir, "drizzle"),
              )}', { recursive: true})"`,
              `node -e "fs.cpSync('${convertPath(
                resolve(inputDir, "core", "src", "db", "drizzle"),
              )}', '${convertPath(
                outputDir,
              )}', { recursive: true, force: true })"`,
            ];
          },
          beforeInstall: () => [],
        },
      },
      ...getDbFnProps(cluster),
    });

    cluster.secret?.grantRead(migrateFn);
    connectFnToDb(cluster, migrateFn);
    const dbInstance = cluster.node.findChild("WriterInstance");
    // prevent migration running before db instance is ready
    migrateFn.node.addDependency(dbInstance);
    return migrateFn;
  }

  createProvider(fn: GbFunction) {
    const provider = new Provider(this, "DbMigrationProvider", {
      onEventHandler: fn,
    });
    return provider;
  }

  createCustomResource(serviceToken: string) {
    new CustomResource(this, "DbMigrationCustomResource", {
      serviceToken: serviceToken,
      properties: {
        // ensures migrations (idempotent) are run on each deployment
        randomValue: randomUUID(),
      },
    });
  }
}
