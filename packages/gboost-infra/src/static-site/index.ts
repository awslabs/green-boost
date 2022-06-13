import { existsSync } from "node:fs";
import { Construct } from "constructs";
import {
  Distribution,
  ViewerProtocolPolicy,
  DistributionProps,
  SecurityPolicyProtocol,
  ResponseHeadersPolicy,
  FunctionEventType,
  Function,
  FunctionCode,
} from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { CfnWebACL, CfnIPSet } from "aws-cdk-lib/aws-wafv2";
import {
  IHostedZone,
  HostedZone,
  AaaaRecord,
  ARecord,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { Bucket } from "../bucket.js";
import type { ResponseHeaders } from "./responseHeaders.js";
import { getResponseHeadersPolicyProps } from "./responseHeaders.js";
import { createWafRules } from "./createWafRules.js";
import { CfnOutput } from "aws-cdk-lib";
import { NagSuppressions } from "cdk-nag";
import { CommonProps, Stage } from "../common-props.js";

export interface StaticSiteProps extends CommonProps {
  /**
   * IPs that are allowed to view docs - uses WAF (CIDR notation)
   * @default undefined
   */
  allowedIPs?: string[];
  /**
   * Enable WAF with common AWS managed rules by default
   * @link https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list.html
   * @default true
   */
  enableWaf?: boolean;
  /**
   * Enable metrics for WAF
   * @default false
   */
  enableWafMetrics?: boolean;
  /**
   * Enable Core rule set (CRS) WAF Rule Group
   * WCU: 700
   * @default true
   */
  enableCoreWafRuleGroup?: boolean;
  /**
   * Enable Amazon IP  WAF Rule Group
   * WCU: 25
   * @default true
   */
  enableAmazonIPWafRuleGroup?: boolean;
  /**
   * Enable Anonymous IP WAF Rule Group
   * WCU: 50
   * @default true
   */
  enableAnonymousIPWafRuleGroup?: boolean;
  /**
   * Base domain name (should match Route 53 hosted zone name)
   * @default undefined
   */
  domainNameBase?: string;
  /**
   * Prefix for this application specifically (comes before hosted zone name in URL)
   * e.g. subsite.base.com
   * @default undefined
   */
  domainNamePrefix?: string;
  /**
   * Configuration for HTTP response headers return by CloudFront Distribution
   * @default ResponseHeaders
   */
  responseHeaders?: ResponseHeaders;
  /**
   * Path for web assets that will be deployed to S3
   */
  webAssetsPath: string;
}

/**
 * StaticSite Construct
 * Creates an S3 Bucket, Origin Access Identity, CloudFront Web Distribution,
 * and builds Static Site with optional environment variables
 */
export class StaticSite extends Construct {
  bucket: Bucket;
  distribution: Distribution;
  zone?: IHostedZone;
  fullDomainName?: string;

  constructor(scope: Construct, id: string, props: StaticSiteProps) {
    super(scope, id);
    const {
      allowedIPs,
      enableCoreWafRuleGroup = true,
      enableAmazonIPWafRuleGroup = true,
      enableAnonymousIPWafRuleGroup = true,
      domainNameBase,
      domainNamePrefix,
      enableWaf = true,
      enableWafMetrics,
      responseHeaders,
      stage = Stage.Dev,
      webAssetsPath,
    } = props;

    // S3
    this.bucket = new Bucket(this, "StaticSiteBucket", { stage });

    // WAF
    const webACL = this.#getWaf({
      allowedIPs,
      enableWaf,
      enableWafMetrics,
      enableAmazonIPWafRuleGroup,
      enableAnonymousIPWafRuleGroup,
      enableCoreWafRuleGroup,
    });

    // CloudFront
    let distributionProps = this.#getDistributionProps({
      responseHeaders,
      stage,
    });

    // add WAF web ACL to distribution if present
    if (webACL) {
      distributionProps = { ...distributionProps, webAclId: webACL.attrArn };
    }

    // configure Route 53 only if domain name base and prefix are set
    if (domainNameBase && domainNamePrefix) {
      this.zone = HostedZone.fromLookup(this, "StaticSiteHostedZone", {
        domainName: domainNameBase,
      });
      // prefix allows multiple apps to use same base
      this.fullDomainName = `${domainNamePrefix}.${domainNameBase}`;
      // can only create certificate in CDK if using Route 53 for DNS
      const certificate = new Certificate(this, "StaticSiteCertificate", {
        domainName: this.fullDomainName,
        validation: CertificateValidation.fromDns(this.zone),
        // allow subdomains (e.g. www, test, stage, etc)
        subjectAlternativeNames: [`*.${this.fullDomainName}`],
      });
      // update CloudFront distribution with domain names and certificate
      distributionProps = {
        ...distributionProps,
        domainNames: [this.fullDomainName, `www.${this.fullDomainName}`],
        certificate,
      };
    }

    this.distribution = new Distribution(
      this,
      "StaticSiteDistribution",
      distributionProps
    );

    NagSuppressions.addResourceSuppressions(this.distribution, [
      { id: "AwsSolutions-CFR1", reason: "Geo restrictions do not apply" },
      {
        id: "AwsSolutions-CFR4",
        reason:
          "TODO - why isn't `minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021` working?",
      },
    ]);

    new CfnOutput(this, "CloudFrontUrl", {
      value: this.distribution.distributionDomainName,
    });

    this.#createRoute53Records();

    if (existsSync(webAssetsPath)) {
      new BucketDeployment(this, "BucketDeployment", {
        destinationBucket: this.bucket,
        sources: [Source.asset(webAssetsPath)],
        distribution: this.distribution,
        retainOnDelete: false,
      });
    } else {
      console.log(
        `Skipping bucket deployment because nothing exists at webAssetsPaths: ${webAssetsPath}`
      );
    }
  }

  #getWaf({
    allowedIPs,
    enableWaf,
    enableWafMetrics,
    enableAmazonIPWafRuleGroup,
    enableAnonymousIPWafRuleGroup,
    enableCoreWafRuleGroup,
  }: {
    allowedIPs?: string[];
    enableWaf?: boolean;
    enableWafMetrics?: boolean;
    enableAmazonIPWafRuleGroup?: boolean;
    enableAnonymousIPWafRuleGroup?: boolean;
    enableCoreWafRuleGroup?: boolean;
  }): CfnWebACL | undefined {
    if (enableWaf) {
      // allow requests that are not blocked by other rules by default
      let defaultAction: CfnWebACL.RuleActionProperty = { allow: {} };

      let ipRuleSet: CfnIPSet | undefined = undefined;
      if (allowedIPs) {
        defaultAction = { block: {} };
        ipRuleSet = new CfnIPSet(this, "IPRuleSet", {
          addresses: allowedIPs,
          ipAddressVersion: "IPV4",
          scope: "CLOUDFRONT",
        });
      }

      // create WAF rules using relevant props
      const rules: CfnWebACL.RuleProperty[] = createWafRules({
        enableWafMetrics: enableWafMetrics === true,
        enableAmazonIPWafRuleGroup,
        enableAnonymousIPWafRuleGroup,
        enableCoreWafRuleGroup,
        allowedIPs,
        ipRuleSet,
      });

      // For CLOUDFRONT, you must create your WAFv2 resources in the US East (N. Virginia) Region, us-east-1.
      return new CfnWebACL(this, "WebACL", {
        defaultAction,
        rules,
        scope: "CLOUDFRONT",
        visibilityConfig: {
          cloudWatchMetricsEnabled: enableWafMetrics === true,
          metricName: "DefaultMetric",
          sampledRequestsEnabled: enableWafMetrics === true,
        },
      });
    }
  }

  #getDistributionProps({
    responseHeaders,
    stage,
  }: {
    responseHeaders?: ResponseHeaders;
    stage: Stage;
  }): DistributionProps {
    const responseHeadersPolicyProps =
      getResponseHeadersPolicyProps(responseHeaders);
    const logBucket = new Bucket(this, "StaticSiteServerAccessLogsBucket", {
      stage,
      disableServerAccessLogsBucket: true,
    });
    NagSuppressions.addResourceSuppressions(logBucket, [
      {
        id: "AwsSolutions-S1",
        reason:
          "Server Access Logs Bucket doesn't need a Server Access Logs Bucket",
      },
    ]);
    return {
      defaultBehavior: {
        origin: new S3Origin(this.bucket),
        functionAssociations: [
          {
            eventType: FunctionEventType.VIEWER_REQUEST,
            function: new Function(this, "RewriteUrl", {
              code: FunctionCode.fromFile({
                filePath: new URL("./rewrite-url.js", import.meta.url).pathname,
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
      enableLogging: true,
      logBucket,
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
    };
  }

  #createRoute53Records() {
    // hosted zone and full domain name must exist to create Route 53 records
    if (this.zone && this.fullDomainName) {
      // IPV4
      new ARecord(this, "StaticSiteARecord", {
        zone: this.zone,
        recordName: this.fullDomainName,
        target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
      });
      new ARecord(this, "StaticSiteSubsiteARecord", {
        zone: this.zone,
        recordName: `*.${this.fullDomainName}`,
        target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
      });
      // IPV6
      new AaaaRecord(this, "StaticSiteAaaaRecord", {
        zone: this.zone,
        recordName: this.fullDomainName,
        target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
      });
      new AaaaRecord(this, "StaticSiteSubsiteAaaaRecord", {
        zone: this.zone,
        recordName: `*.${this.fullDomainName}`,
        target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
      });
    }
  }
}
