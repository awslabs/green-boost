// @ts-nocheck
import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { Function, Table } from "gboost-infra";
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
import { config } from "./config.js";
import { LogGroup } from "aws-cdk-lib/aws-logs";

interface ApiProps extends StackProps {
  table: Table;
}

export class Api extends Stack {
  api: RestApi;
  constructor(scope: Construct, id: string, props: ApiProps) {
    super(scope, id, props);
    this.api = this.getApi();
    const trpcResource = this.api.root.addResource("trpc");
    const trpcProxy = trpcResource.addResource("{proxy+}");
    const fn = this.getFunction(props.table);
    const fnIntegration = new LambdaIntegration(fn);
    trpcProxy.addMethod("GET", fnIntegration);
    trpcProxy.addMethod("POST", fnIntegration);
  }

  getApi(): RestApi {
    const api = new RestApi(this, "Api", {
      defaultCorsPreflightOptions: this.getApiCorsOptions(),
      deployOptions: this.getDeployOptions(),
      description: "Widgets API for stage: " + config.stage,
      endpointTypes: [EndpointType.REGIONAL],
    });
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
    return api;
  }

  getApiCorsOptions(): CorsOptions {
    return {
      allowOrigins: config.isPipelineStage
        ? ["null"]
        : ["http://localhost:5173"],
    };
  }

  getDeployOptions(): StageOptions {
    return {
      accessLogDestination: new LogGroupLogDestination(
        new LogGroup(this, "ApiAccessLogGroup", {
          removalPolicy: config.isPipelineStage
            ? RemovalPolicy.RETAIN
            : RemovalPolicy.DESTROY,
        })
      ),
    };
  }

  getFunction(table: Table) {
    const fn = new Function(this, "Function", {
      entry: fileURLToPath(
        new URL("../../core/src/entrypoints/api/handler.ts", import.meta.url)
      ),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });
    return fn;
  }
}
