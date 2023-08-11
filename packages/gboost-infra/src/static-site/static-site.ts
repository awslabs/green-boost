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
import type { CfnWebACL } from "aws-cdk-lib/aws-wafv2";
import type { ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { Bucket } from "../bucket/bucket.js";
import type { ResponseHeaders } from "./response-headers.js";
import { getResponseHeadersPolicyProps } from "./response-headers.js";
import { NagSuppressions } from "cdk-nag";
import { fileURLToPath } from "node:url";
import { StaticSiteWebAcl } from "./web-acl.js";
import { resolve } from "node:path";
import { RemovalPolicy } from "aws-cdk-lib";
import { ObjectOwnership } from "aws-cdk-lib/aws-s3";

const thisFilePath = fileURLToPath(import.meta.url);

export interface StaticSiteProps {
  /**
   * Override bucket
   */
  bucket?: Bucket;
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
  /**
   * Override distribution
   */
  distribution?: Distribution;
  /**
   * @default true
   */
  enableWaf?: boolean;
  /**
   * Configuration for HTTP response headers return by CloudFront Distribution
   * @default ResponseHeaders
   */
  responseHeaders?: ResponseHeaders;
  /**
   * Retain CloudFront access logs in S3 Bucket
   * @default true
   */
  retainAccessLogs?: boolean;
  /**
   * Override WebACL
   */
  webAcl?: CfnWebACL;
}

/**
 * StaticSite Construct
 * Creates an S3 Bucket, Origin Access Identity, CloudFront Web Distribution.
 *
 * By default, the S3 Bucket's retainment policy is DESTROY where all objects
 * are auto-deleted when resource is removed. You can override this behavior by
 * providing your own bucket.
 */
export class StaticSite extends Construct {
  bucket: Bucket;
  distribution: Distribution;
  fullDomainName?: string;

  constructor(scope: Construct, id: string, props: StaticSiteProps = {}) {
    super(scope, id);
    const {
      bucket,
      distribution,
      enableWaf = false,
      webAcl: overrideWebAcl,
    } = props;

    // S3
    if (bucket) {
      this.bucket = bucket;
    } else {
      this.bucket = new Bucket(this, "Bucket", {
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
      });
      NagSuppressions.addResourceSuppressions(this.bucket, [
        {
          id: "AwsSolutions-S1",
          reason:
            "StaticSite S3 Bucket doesn't need a server access logs bucket b/c CloudFront logs document access",
        },
      ]);
    }

    // WAF
    let webAcl: CfnWebACL | undefined;
    if (enableWaf) {
      if (overrideWebAcl) {
        webAcl = overrideWebAcl;
      } else {
        webAcl = new StaticSiteWebAcl(this, "WebAcl");
      }
    }

    // CloudFront
    if (distribution) {
      this.distribution = distribution;
    } else {
      this.distribution = this.#getDistribution({ ...props, webAcl });
    }
  }

  #getDistribution(params: GetDistributionParams): Distribution {
    const {
      certificate,
      domainNames,
      responseHeaders,
      retainAccessLogs = true,
      webAcl,
    } = params;
    const responseHeadersPolicyProps =
      getResponseHeadersPolicyProps(responseHeaders);
    const logBucket = new Bucket(this, "CloudFrontAccessLogsBucket", {
      autoDeleteObjects: !retainAccessLogs,
      removalPolicy: retainAccessLogs
        ? RemovalPolicy.RETAIN
        : RemovalPolicy.DESTROY,
      // ObjectOwnership.OBJECT_WRITER required or you get error:
      // The S3 bucket that you specified for CloudFront logs does not enable ACL access
      objectOwnership: ObjectOwnership.OBJECT_WRITER,
    });
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
}

interface GetDistributionParams
  extends Pick<
    StaticSiteProps,
    | "certificate"
    | "domainNames"
    | "enableWaf"
    | "responseHeaders"
    | "retainAccessLogs"
  > {
  webAcl?: CfnWebACL;
}
