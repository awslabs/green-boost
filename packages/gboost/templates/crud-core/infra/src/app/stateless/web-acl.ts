// @ts-nocheck
import {
  CfnIPSet,
  CfnWebACL,
  CfnWebACLAssociation,
  type CfnWebACLProps,
} from "aws-cdk-lib/aws-wafv2";
import { Construct } from "constructs";

export enum ManagedRuleName {
  "CommonRuleSet" = "AWSManagedRulesCommonRuleSet",
  "AmazonIpReputationList" = "AWSManagedRulesAmazonIpReputationList",
  "AnonymousIpList" = "AWSManagedRulesAnonymousIpList",
}

interface WebAclBaseProps {
  /**
   * ARN of resources to associate with WebAcl. Ensure you're selecting
   * correct `scope` based on resource ARNs passed in.
   *
   * Associations can also be made after instantiated with `associateResourceArn`
   * method.
   */
  associatedResourceArn?: string;
  /**
   * Defaults to `false` to reduce costs.
   * @default false
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html#cfn-wafv2-webacl-visibilityconfig-cloudwatchmetricsenabled
   */
  cloudWatchMetricsEnabled?: boolean;
  /**
   * Underlying props to override for Cfn resources.
   */
  override?: {
    webAcl?: Partial<CfnWebACLProps>;
    ruleProperty: Partial<CfnWebACL.RuleProperty>;
  };
  /**
   * Defaults to `false` to reduce costs.
   * @default false
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html#cfn-wafv2-webacl-visibilityconfig-sampledrequestsenabled
   */
  sampleRequestsEnabled?: boolean;
  /**
   * If you want to attach WebAcl to CloudFront distribution, then use scope of
   * "CLOUDFRONT" and make sure you deploy this into a stack in us-east-1. If
   * you want to attached WebAcl to API Gateway, AppSync API, or ALB, then
   * use scope of "REGIONAL".
   */
  scope: "REGIONAL" | "CLOUDFRONT";
}

interface WebAclManagedRulesProps extends WebAclBaseProps {
  allowedIps?: never;
  /**
   * Managed AWS WAF Rules to add to WebAcl
   */
  managedRuleNames: ManagedRuleName[];
}

interface WebAclAllowIpsProps extends WebAclBaseProps {
  /**
   * Allowed IP *CIDR ranges*. If allowing single IP address, add /32 to end.
   * All other IPs are blocked.
   */
  allowedIps: string[];
  managedRuleNames?: never;
}

type WebAclProps = WebAclManagedRulesProps | WebAclAllowIpsProps;

/**
 * L2 AWS WAF Web ACL Construct where you can specify an allow list of IPs with
 * default block unless ip is matched or AWS Managed Rule Groups with default
 * allow unless a rule catches a request.
 */
export class WebAcl extends Construct {
  webAcl: CfnWebACL;
  webAclArn: string;
  #props: WebAclProps;
  #priority = 0;

  constructor(scope: Construct, id: string, props: WebAclProps) {
    super(scope, id);
    this.#props = props;
    this.webAcl = this.#createWebAcl();
    this.webAclArn = this.webAcl.attrArn;
    if (this.#props.associatedResourceArn) {
      WebAcl.associateResourceArn({
        scope,
        resourceArn: this.#props.associatedResourceArn,
        webAclArn: this.webAclArn,
      });
    }
  }

  #createWebAcl() {
    return new CfnWebACL(this, "WebACL", {
      defaultAction:
        "allowedIps" in this.#props
          ? {
              block: {}, // block all other ips that don't match rule
            }
          : {
              allow: {}, // allow if no managed rule matches
            },
      scope: this.#props.scope,
      visibilityConfig: {
        cloudWatchMetricsEnabled: this.#cloudWatchMetricsEnabled,
        metricName: "WebACLMetrics",
        sampledRequestsEnabled: this.#sampleRequestsEnabled,
      },
      rules: this.#createRules(),
      ...this.#props.override?.webAcl,
    });
  }

  #createRules(): CfnWebACL.RuleProperty[] {
    const rules: CfnWebACL.RuleProperty[] = [];
    if (this.#props.allowedIps?.length) {
      const ipSet = new CfnIPSet(this, "AllowedIPSet", {
        addresses: this.#props.allowedIps,
        ipAddressVersion: "IPV4",
        scope: this.#props.scope,
      });
      rules.push({
        visibilityConfig: {
          cloudWatchMetricsEnabled: this.#cloudWatchMetricsEnabled,
          metricName: "IPSetAllowMetric",
          sampledRequestsEnabled: this.#sampleRequestsEnabled,
        },
        priority: this.#priority,
        statement: {
          ipSetReferenceStatement: {
            arn: ipSet.attrArn,
          },
        },
        name: "AllowedIps",
        action: { allow: {} },
      });
      this.#priority += 10;
    } else {
      for (const managedRuleName of this.#props.managedRuleNames || []) {
        rules.push({
          // Set the override action to none to leave the rule group rule actions in effect
          overrideAction: { none: {} },
          name: managedRuleName,
          statement: {
            managedRuleGroupStatement: {
              vendorName: "AWS",
              name: managedRuleName,
            },
          },
          priority: this.#priority,
          visibilityConfig: {
            cloudWatchMetricsEnabled: this.#cloudWatchMetricsEnabled,
            metricName: managedRuleName + "Metric",
            sampledRequestsEnabled: this.#sampleRequestsEnabled,
          },
          ...this.#props.override?.ruleProperty,
        });
        this.#priority += 10;
      }
    }
    return rules;
  }

  /**
   * Associate a resource (CloudFront Distribution, API Gateway, etc.) with a
   * Web ACL.
   *
   * This method needs to be static to prevent circular dependencies (i.e.
   * WebAcl -> Distribution & Distribution -> WebAcl)
   */
  static associateResourceArn(params: AssociateResourceArn) {
    // TODO: add arn's resource name to id so it's unique.
    new CfnWebACLAssociation(params.scope, "WebACLAssociation", {
      resourceArn: params.resourceArn,
      webAclArn: params.webAclArn,
    });
  }

  get #cloudWatchMetricsEnabled() {
    return Boolean(this.#props.cloudWatchMetricsEnabled);
  }
  get #sampleRequestsEnabled() {
    return Boolean(this.#props.sampleRequestsEnabled);
  }
}

interface AssociateResourceArn {
  resourceArn: string;
  scope: Construct;
  webAclArn: string;
}
