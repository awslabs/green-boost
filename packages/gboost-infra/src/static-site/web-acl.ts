import { CfnIPSet, CfnWebACL } from "aws-cdk-lib/aws-wafv2";
import type { Construct } from "constructs";

interface StaticSiteWebAclProps {
  /**
   * IPs that are allowed to view docs - uses WAF (CIDR notation)
   * @default undefined
   */
  allowedIPs?: string[];
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
}

export class StaticSiteWebAcl extends CfnWebACL {
  constructor(scope: Construct, id: string, props: StaticSiteWebAclProps = {}) {
    const {
      allowedIPs,
      enableAmazonIPWafRuleGroup = true,
      enableAnonymousIPWafRuleGroup = true,
      enableCoreWafRuleGroup = true,
      enableWafMetrics = false,
    } = props;
    // allow requests that are not blocked by other rules by default
    let defaultAction: CfnWebACL.RuleActionProperty = { allow: {} };

    let ipRuleSet: CfnIPSet | undefined = undefined;
    if (allowedIPs) {
      defaultAction = { block: {} };
      ipRuleSet = new CfnIPSet(scope, "IPRuleSet", {
        addresses: allowedIPs,
        ipAddressVersion: "IPV4",
        scope: "CLOUDFRONT",
      });
    }

    // create WAF rules using relevant props
    const rules: CfnWebACL.RuleProperty[] = [];
    let priority = 0;

    if (enableAmazonIPWafRuleGroup) {
      rules.push({
        overrideAction: { none: {} },
        name: "AmazonIP",
        statement: {
          managedRuleGroupStatement: {
            vendorName: "AWS",
            name: "AWSManagedRulesAmazonIpReputationList",
          },
        },
        priority: priority++,
        visibilityConfig: {
          cloudWatchMetricsEnabled: enableWafMetrics,
          metricName: "AmazonIPMetric",
          sampledRequestsEnabled: enableWafMetrics,
        },
      });
    }

    if (enableAnonymousIPWafRuleGroup) {
      rules.push({
        overrideAction: { none: {} },
        name: "AnonymousIP",
        statement: {
          managedRuleGroupStatement: {
            vendorName: "AWS",
            name: "AWSManagedRulesAnonymousIpList",
          },
        },
        priority: priority++,
        visibilityConfig: {
          cloudWatchMetricsEnabled: enableWafMetrics,
          metricName: "AnonymousIPMetric",
          sampledRequestsEnabled: enableWafMetrics,
        },
      });
    }

    if (enableCoreWafRuleGroup) {
      rules.push({
        overrideAction: { none: {} },
        name: "CoreRuleSet",
        statement: {
          managedRuleGroupStatement: {
            vendorName: "AWS",
            name: "AWSManagedRulesCommonRuleSet",
          },
        },
        priority: priority++,
        visibilityConfig: {
          cloudWatchMetricsEnabled: enableWafMetrics,
          metricName: "CoreRuleSetMetric",
          sampledRequestsEnabled: enableWafMetrics,
        },
      });
    }

    // add allowed IPs to rule list if applicable
    if (allowedIPs && ipRuleSet) {
      rules.push({
        action: { allow: {} },
        name: "AllowIPs",
        statement: { ipSetReferenceStatement: { arn: ipRuleSet.attrArn } },
        priority: priority++,
        visibilityConfig: {
          cloudWatchMetricsEnabled: enableWafMetrics,
          metricName: "AllowIPsMetric",
          sampledRequestsEnabled: enableWafMetrics,
        },
      });
    }

    // For CLOUDFRONT, you must create your WAFv2 resources in the US East (N. Virginia) Region, us-east-1.
    super(scope, id, {
      defaultAction,
      rules,
      scope: "CLOUDFRONT",
      visibilityConfig: {
        cloudWatchMetricsEnabled: Boolean(enableWafMetrics),
        metricName: "DefaultMetric",
        sampledRequestsEnabled: Boolean(enableWafMetrics),
      },
    });
  }
}
