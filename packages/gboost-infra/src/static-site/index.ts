import { existsSync } from "node:fs";
import { Construct } from "constructs";
import {
  Distribution,
  ViewerProtocolPolicy,
  SecurityPolicyProtocol,
  ResponseHeadersPolicy,
  FunctionEventType,
  Function,
  FunctionCode,
} from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { CfnWebACL } from "aws-cdk-lib/aws-wafv2";
import { ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { Bucket } from "../bucket.js";
import type { ResponseHeaders } from "./responseHeaders.js";
import { getResponseHeadersPolicyProps } from "./responseHeaders.js";
import { NagSuppressions } from "cdk-nag";
import { fileURLToPath } from "node:url";
import { StaticSiteWebAcl } from "./web-acl.js";
import { execSync } from "node:child_process";
import { resolve } from "node:path";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

const thisFilePath = fileURLToPath(import.meta.url);

export interface StaticSiteProps {
  /**
   * Custom bucket
   */
  bucket?: Bucket;
  /**
   * Build command to run in `buildDirectory`
   * @default "pnpm build"
   */
  buildCommand?: string;
  /**
   * Build directory to run `buildCommand` in
   */
  buildDirectory?: string;
  /**
   * Environment variables that will be set before your build command runs.
   * Unresolved values will be replaced in a custom resource
   * @example
   * ```ts
   * { VITE_API_URL: api.url }
   * ```
   */
  buildEnvVars?: Record<string, string>;
  /**
   * Build output directory resulting from `buildCommand` running in `buildDirectory`
   * @default "dist"
   */
  buildOutputDirectory?: string;
  /**
   * Certificate for CloudFront for custom domain. If using custom domain, `domainNames`
   * is also required.
   */
  certificate?: ICertificate;
  /**
   * Custom domain names for CloudFront to use to serve static site. If using
   * a custom domain, `certificate` is also required.
   */
  domainNames?: string[];
  distribution?: Distribution;
  /**
   * @default false
   */
  enableWaf?: boolean;
  /**
   * Configuration for HTTP response headers return by CloudFront Distribution
   * @default ResponseHeaders
   */
  responseHeaders?: ResponseHeaders;
  /**
   * Custom WebACL
   */
  webAcl?: CfnWebACL;
}

/**
 * StaticSite Construct
 * Creates an S3 Bucket, Origin Access Identity, CloudFront Web Distribution,
 * and builds Static Site with environment variables that resolved or unresolved
 */
export class StaticSite extends Construct {
  bucket: Bucket;
  distribution: Distribution;
  fullDomainName?: string;

  constructor(scope: Construct, id: string, props: StaticSiteProps) {
    super(scope, id);
    const {
      bucket,
      buildDirectory,
      distribution,
      enableWaf = true,
      webAcl: overrideWebAcl,
    } = props;

    // S3
    if (bucket) {
      this.bucket = bucket;
    } else {
      this.bucket = new Bucket(this, "StaticSiteBucket");
      this.bucket.addServerAccessLogsBucket();
    }

    // WAF
    let webAcl: CfnWebACL | undefined;
    if (enableWaf) {
      if (overrideWebAcl) {
        webAcl = overrideWebAcl;
      } else {
        webAcl = new StaticSiteWebAcl(this, "StaticSiteWebAcl");
      }
    }

    // CloudFront
    if (distribution) {
      this.distribution = distribution;
    } else {
      this.distribution = this.#getDistribution({ ...props, webAcl });
    }

    if (buildDirectory) {
      this.#buildSite({ ...props, buildDirectory });
    }
  }

  #getDistribution(params: GetDistributionParams): Distribution {
    const { certificate, domainNames, responseHeaders, webAcl } = params;
    const responseHeadersPolicyProps =
      getResponseHeadersPolicyProps(responseHeaders);
    const logBucket = new Bucket(this, "StaticSiteServerAccessLogsBucket");
    NagSuppressions.addResourceSuppressions(logBucket, [
      {
        id: "AwsSolutions-S1",
        reason:
          "Server Access Logs Bucket doesn't need a Server Access Logs Bucket",
      },
    ]);
    const filePath = resolve(thisFilePath, "../rewrite-url.js");
    const distribution = new Distribution(this, "Distribution", {
      certificate,
      defaultBehavior: {
        origin: new S3Origin(this.bucket),
        functionAssociations: [
          {
            eventType: FunctionEventType.VIEWER_REQUEST,
            function: new Function(this, "RewriteUrl", {
              code: FunctionCode.fromFile({
                filePath,
              }),
            }),
          },
        ],
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        responseHeadersPolicy: new ResponseHeadersPolicy(
          this,
          "ResponseHeadersPolicy",
          responseHeadersPolicyProps
        ),
      },
      domainNames,
      enableLogging: true,
      logBucket,
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      webAclId: webAcl?.attrArn,
    });
    NagSuppressions.addResourceSuppressions(distribution, [
      { id: "AwsSolutions-CFR1", reason: "Geo restrictions do not apply" },
      {
        id: "AwsSolutions-CFR4",
        reason:
          "TODO - why isn't `minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021` working?",
      },
    ]);
    return distribution;
  }

  #buildSite(params: BuildSiteParams): void {
    const {
      buildCommand = "pnpm build",
      buildDirectory,
      buildOutputDirectory = "dist",
      buildEnvVars,
    } = params;
    if (buildDirectory && existsSync(buildDirectory)) {
      // TODO: implement cache so we only build site when needed. Will need to
      // create hash of buildDirectory AND any workspace dependencies - can
      // loop over package.json to find those
      const env = { ...process.env, ...buildEnvVars };
      console.log({ env });
      execSync(buildCommand, { cwd: buildDirectory, env, stdio: "inherit" });
      const buildOutputPath = resolve(buildDirectory, buildOutputDirectory);
      if (existsSync(buildOutputPath)) {
        // const unreplacedAsset = new Asset(this, "OriginalWebAssets", {
        //   path: buildOutputDirectory,
        // });
        // unreplacedAsset.s3ObjectUrl;
        // create singleton CR deployment function that can find and replace values
        // that were unresolved. in CR fn, invalidate distribution
        new BucketDeployment(this, "BucketDeployment", {
          destinationBucket: this.bucket,
          sources: [Source.asset(buildOutputPath)],
          distribution: this.distribution,
          retainOnDelete: false,
          memoryLimit: 512,
        });
      } else {
        throw new Error(
          `buildOutputDirectory: ${buildOutputDirectory} does not exist in buildDirectory: ${buildDirectory}`
        );
      }
    } else {
      throw new Error(`buildDirectory: ${buildDirectory} does not exist`);
    }
  }
}

interface GetDistributionParams
  extends Pick<
    StaticSiteProps,
    "certificate" | "domainNames" | "enableWaf" | "responseHeaders"
  > {
  webAcl?: CfnWebACL;
}

interface BuildSiteParams
  extends Pick<
    StaticSiteProps,
    "buildCommand" | "buildEnvVars" | "buildOutputDirectory"
  > {
  buildDirectory: string;
}
