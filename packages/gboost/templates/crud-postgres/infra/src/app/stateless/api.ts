// @ts-nocheck
import { Duration, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { DbIamCluster, Function } from "gboost-infra";
import {
  CorsOptions,
  EndpointType,
  LambdaIntegration,
  LogGroupLogDestination,
  ResponseType,
  RestApi,
  StageOptions,
} from "aws-cdk-lib/aws-apigateway";
import { fileURLToPath } from "node:url";
import { LogGroup } from "aws-cdk-lib/aws-logs";
import { NagSuppressions } from "cdk-nag";
import { CfnWebACL, CfnWebACLAssociation } from "aws-cdk-lib/aws-wafv2";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { resolve } from "node:path";
import type { StageConfig } from "../../config/stage-config.js";
import { Port, SubnetType } from "aws-cdk-lib/aws-ec2";
import { getDbEnvVars } from "../utils/getDbEnvVars.js";

const thisFilePath = fileURLToPath(import.meta.url);

interface ApiProps extends StackProps {
  cluster: DbIamCluster;
  config: StageConfig;
}

export class Api extends Stack {
  api: RestApi;

  constructor(scope: Construct, id: string, props: ApiProps) {
    super(scope, id, props);
    this.api = this.getApi(props.config);
    const trpcResource = this.api.root.addResource("trpc");
    const trpcProxy = trpcResource.addResource("{proxy+}");
    const fn = this.getFunction(props);
    const fnIntegration = new LambdaIntegration(fn);
    trpcProxy.addMethod("GET", fnIntegration);
    trpcProxy.addMethod("POST", fnIntegration);
    this.suppressApiNags(this.api);
  }

  getApi(config: StageConfig): RestApi {
    const api = new RestApi(this, "Api", {
      defaultCorsPreflightOptions: this.getApiCorsOptions(config.isLocal),
      deployOptions: this.getDeployOptions(config.isLocal),
      description: `${config.appId} API for stage: ${config.stageName}`,
      endpointTypes: [EndpointType.REGIONAL],
    });
    // https://sst.dev/chapters/handle-api-gateway-cors-errors.html
    api.addGatewayResponse("GatewayResponseDefault4XX", {
      type: ResponseType.DEFAULT_4XX,
      responseHeaders: {
        "Access-Control-Allow-Origin": "'*'",
        "Access-Control-Allow-Headers": "'*'",
      },
    });
    api.addGatewayResponse("GatewayResponseDefault5XX", {
      type: ResponseType.DEFAULT_5XX,
      responseHeaders: {
        "Access-Control-Allow-Origin": "'*'",
        "Access-Control-Allow-Headers": "'*'",
      },
    });
    NagSuppressions.addResourceSuppressions(
      api,
      [
        {
          id: "AwsSolutions-APIG2",
          reason: "Request validation is performed within lambda",
        },
        {
          id: "AwsSolutions-IAM4",
          reason:
            "AmazonAPIGatewayPushToCloudWatchLogs is not overly permissive",
          appliesTo: [
            "Policy::arn:<AWS::Partition>:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs",
          ],
        },
        {
          id: "AwsSolutions-APIG6",
          reason:
            "CloudWatch logging is too expensive to enable for all methods",
        },
      ],
      true
    );
    return api;
  }

  getApiCorsOptions(isLocal: boolean): CorsOptions {
    return {
      // TODO: replace * with CloudFront URL
      allowOrigins: isLocal ? ["*"] : ["*"],
    };
  }

  getDeployOptions(isLocal: boolean): StageOptions {
    return {
      accessLogDestination: new LogGroupLogDestination(
        new LogGroup(this, "LogGroup", {
          removalPolicy: isLocal ? RemovalPolicy.DESTROY : RemovalPolicy.RETAIN,
        })
      ),
    };
  }

  getFunction({ config, cluster }: ApiProps) {
    const fn = new Function(this, "Function", {
      entry: resolve(
        thisFilePath,
        "../../../../../core/src/entrypoints/api/handler.ts"
      ),
      memorySize: 512,
      runtime: Runtime.NODEJS_18_X,
      environment: {
        POWERTOOLS_SERVICE_NAME: config.appId,
        ...getDbEnvVars(cluster),
      },
      vpc: cluster.vpc,
      vpcSubnets: { subnetType: SubnetType.PRIVATE_WITH_EGRESS },
      timeout: Duration.seconds(29),
      bundling: {
        externalModules: ["pg-native"],
      },
    });
    fn.connections.allowTo(cluster, Port.tcp(cluster.clusterEndpoint.port));
    cluster.grantConnect(fn);
    return fn;
  }

  suppressApiNags(api: RestApi) {
    NagSuppressions.addResourceSuppressions(
      api,
      [
        {
          id: "AwsSolutions-APIG4",
          reason: "Authorization is not required for this template",
        },
        {
          id: "AwsSolutions-COG4",
          reason: "Cognito is not used for authorization",
        },
      ],
      true
    );
  }

  associateWaf(api: RestApi): void {
    const webACL = new CfnWebACL(this, "WebACL", {
      defaultAction: {
        allow: {},
      },
      scope: "REGIONAL",
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: "webACL",
        sampledRequestsEnabled: true,
      },
      rules: this.getWafRules(),
    });

    new CfnWebACLAssociation(this, "WebACLAssociation", {
      webAclArn: webACL.attrArn,
      resourceArn: api.deploymentStage.stageArn,
    });
  }

  getWafRules(): CfnWebACL.RuleProperty[] {
    let priority = 0;
    return [
      {
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
          cloudWatchMetricsEnabled: true,
          metricName: "AmazonIPMetric",
          sampledRequestsEnabled: true,
        },
      },
      {
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
          cloudWatchMetricsEnabled: true,
          metricName: "AnonymousIPMetric",
          sampledRequestsEnabled: true,
        },
      },
      {
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
          cloudWatchMetricsEnabled: true,
          metricName: "CoreRuleSetMetric",
          sampledRequestsEnabled: true,
        },
      },
    ];
  }
}
