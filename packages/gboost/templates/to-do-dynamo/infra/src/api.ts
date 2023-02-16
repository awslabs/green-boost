// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { Function, Table } from "gboost-infra";
import { CorsHttpMethod, HttpApi } from "@aws-cdk/aws-apigatewayv2-alpha";
import { HttpLambdaIntegration } from "@aws-cdk/aws-apigatewayv2-integrations-alpha";
import { fileURLToPath } from "node:url";

interface ApiProps extends StackProps {
  table: Table;
}

interface GetFunctionParams {
  table: Table;
}

export class Api extends Stack {
  api: HttpApi;
  constructor(scope: Construct, id: string, props: ApiProps) {
    super(scope, id, props);
    this.api = this.getApi();
    const fn = this.getFunction({ table: props.table });
    this.api.addRoutes({
      path: "/trpc/{proxy+}",
      integration: new HttpLambdaIntegration("HttpLambdaIntegration", fn),
    });
  }

  getApi(): HttpApi {
    const api = new HttpApi(this, "Api", {
      corsPreflight: {
        allowHeaders: ["*"], // TODO: restrict
        allowMethods: [CorsHttpMethod.GET, CorsHttpMethod.POST],
        allowOrigins: ["https://*"], // TODO: restrict
      },
    });
    return api;
  }

  getFunction({ table }: GetFunctionParams) {
    const fn = new Function(this, "Function", {
      entry: fileURLToPath(
        new URL(
          "../../core-student/src/entrypoints/api/handler.ts",
          import.meta.url
        )
      ),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });
    return fn;
  }
}
