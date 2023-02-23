import { CustomResource, Duration, Token } from "aws-cdk-lib";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import {
  Architecture,
  Code,
  Runtime,
  SingletonFunction,
} from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Asset } from "aws-cdk-lib/aws-s3-assets";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Bucket } from "../bucket.js";
import { InputResourceProperties } from "./common.js";

const thisFilePath = fileURLToPath(import.meta.url);

interface BuildConfigProps {
  /**
   * Build command to run in `workingDirectory`
   */
  command?: string;
  /**
   * Environment variables to inject into process where `buildCommand` is run.
   * For values where `Token.isUnresolved` is true (i.e. `api.url`), temporary
   * values will be injected into build environment and then replaced in
   * custom resource before deployed to `destinationBucket`
   */
  environment?: Record<string, string>;
  /**
   * Path of directory where `buildCommand` is run.
   */
  workingDirectory: string;
}

interface WebDeploymentProps {
  buildConfig?: BuildConfigProps;
  /**
   * Bucket to write assets to.
   */
  destinationBucket: Bucket;
  /**
   * Key prefix to deploy your assets to.
   * @default '/'
   */
  destinationKeyPrefix?: string;
  /**
   * CloudFront Distribution to invalidate after deploying new web assets to
   * `destinationBucket`
   */
  distribution?: Distribution;
  /**
   * Memory limit for lambda custom resource
   * @default 1024
   */
  memoryLimit?: number;
  /**
   * Remove all files in destination bucket before uploading new files
   * @default true
   */
  prune?: boolean;
  /**
   * File path of directory to be deployed to destination bucket. CDK `Asset`
   * for `sourcePath` is created after `buildConfig.command` is executed if specified.
   */
  sourcePath: string;
}

/**
 * Like `BucketDeployment`, but enables replacing environment variables within
 * your static sites within a custom resource.
 * @example
 * ```ts
 * const workingDirectory = resolve(thisFilePath, "../../../ui");
    new WebDeployment(this, "WebDeployment", {
      buildConfig: {
        command: "pnpm build",
        workingDirectory,
        environment: {
          VITE_API_URL: api.url,
          VITE_APP_NAME: "Green Boost",
        },
      },
      destinationBucket: staticSite.bucket,
      distribution: staticSite.distribution,
      sourcePath: resolve(workingDirectory, "dist"),
    });
 * ```
 */
export class WebDeployment extends Construct {
  constructor(scope: Construct, id: string, props: WebDeploymentProps) {
    super(scope, id);
    const buildConfig = props.buildConfig;
    let customResourceEnv: Record<string, string> = {};
    if (buildConfig) {
      if (!existsSync(buildConfig.workingDirectory)) {
        throw new Error(
          `directoryPath: ${buildConfig.workingDirectory} does not exist`
        );
      }
      const envs = this.#getEnv(buildConfig.environment);
      customResourceEnv = envs.customResourceEnv; // used in custom resource
      if (buildConfig.command) {
        execSync(buildConfig.command, {
          cwd: buildConfig.workingDirectory,
          env: { ...process.env, ...envs.localEnv },
          stdio: "inherit",
        });
      }
    }
    const fn = this.#getFunction(props.memoryLimit);
    const asset = new Asset(this, "Asset", {
      path: props.sourcePath,
    });

    asset.grantRead(fn);
    props.destinationBucket.grantReadWrite(fn);
    props.destinationBucket.grantDelete(fn);
    if (props.distribution) {
      props.distribution.grantCreateInvalidation(fn);
    }

    const properties: InputResourceProperties = {
      sourceBucketName: asset.bucket.bucketName,
      sourceObjectKey: asset.s3ObjectKey,
      destinationBucketName: props.destinationBucket.bucketName,
      destinationObjectKeyPrefix: props.destinationKeyPrefix || "/",
      environment: customResourceEnv,
      distributionId: props.distribution?.distributionId,
      prune: props.prune || true,
    };

    this.#getCustomResource(fn, properties);
  }

  /**
   * Returns `localEnv` which is injected into build command process and returns
   * `customResourceEnv` which is sent to custom resource to replace unresolved
   * token markers with resolved values
   */
  #getEnv(environment: BuildConfigProps["environment"] = {}): {
    localEnv: Record<string, string>;
    customResourceEnv: Record<string, string>;
  } {
    const localEnv: Record<string, string> = {};
    const customResourceEnv: Record<string, string> = {};
    for (const [k, v] of Object.entries(environment)) {
      if (Token.isUnresolved(v)) {
        const marker = `{{ ${k} }}`; // to be replaced in custom resource
        customResourceEnv[marker] = v;
        localEnv[k] = marker;
      } else {
        localEnv[k] = v;
      }
    }
    return { localEnv, customResourceEnv };
  }

  #getFunction(memorySize = 1024): SingletonFunction {
    const isDev = import.meta.url.endsWith(".ts");
    let codePath = "";
    if (isDev) {
      codePath = resolve(
        thisFilePath,
        "../../../lib/web-deployment/custom-resource-handler"
      );
    } else {
      codePath = resolve(thisFilePath, "../custom-resource-handler");
    }
    return new SingletonFunction(this, "CustomResourceHandler", {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(codePath),
      handler: "custom-resource-handler.handler",
      uuid: "e94797a6-488d-4a73-8e2b-79695c7ec7dd",
      architecture: Architecture.ARM_64,
      lambdaPurpose: "WebDeploymentCustomResourceHandler",
      timeout: Duration.minutes(10),
      memorySize,
      environment: {
        NODE_OPTIONS: "--enable-source-maps",
      },
    });
  }

  #getCustomResource(
    fn: SingletonFunction,
    properties: InputResourceProperties
  ) {
    const provider = new Provider(this, "Provider", {
      onEventHandler: fn,
      logRetention: RetentionDays.ONE_DAY,
    });

    return new CustomResource(this, "CustomResource", {
      resourceType: "Custom::WebDeployment",
      serviceToken: provider.serviceToken,
      properties,
    });
  }
}
