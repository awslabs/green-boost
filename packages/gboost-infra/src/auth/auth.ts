import { CustomResource, Duration, Stack } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  Architecture,
  Code,
  Runtime,
  SingletonFunction,
} from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Function as GbFunction } from "../function.js";

const thisFilePath = fileURLToPath(import.meta.url);

interface AuthProps {
  /**
   * API Gateway (v1) to attach auth routes to.
   */
  api: RestApi;
  /**
   * Prefix for auth proxy route.
   * @default "auth"
   */
  apiPathPrefix?: string;
  /**
   * Function to authenticate users with. In this function use Green Boost's
   * Auth handlers like `handleOAuth` or `handleLink`. You're responsible for
   * ensuring the frontend redirects or makes requests to API paths that call
   * the correct auth "handlers".
   */
  authFunction: GbFunction;
}

/**
 * Sets up resources necessary for Green Boost's Auth including SSM Parameters
 * for public/private key pair an API routes.
 *
 * Each API Gateway resource can only be associated with 1 `Auth` construct.
 */
export class Auth extends Construct {
  constructor(scope: Construct, id: string, props: AuthProps) {
    super(scope, id);
    const { api, apiPathPrefix = "auth", authFunction } = props;
    this.#createCustomResource(api.restApiId);
    this.#addRoute({ api, apiPathPrefix, authFunction });
  }

  #createCustomResource(apiId: string) {
    const provider = new Provider(this, "Provider", {
      onEventHandler: this.#getFunction(apiId),
      logRetention: RetentionDays.ONE_DAY,
    });

    const customResource = new CustomResource(this, "CustomResource", {
      resourceType: "Custom::WebDeployment",
      serviceToken: provider.serviceToken,
      properties: {
        PrivateKeyName: getKeyName({ apiId, type: "private" }),
        PublicKeyName: getKeyName({ apiId, type: "public" }),
      },
    });
    return customResource;
  }

  #getFunction(apiId: string) {
    const isDev = import.meta.url.endsWith(".ts");
    let codePath = "";
    if (isDev) {
      codePath = resolve(thisFilePath, "../../../lib/auth/auth-cr-handler");
    } else {
      codePath = resolve(thisFilePath, "..auth-cr-handler");
    }
    const uuid = "e92614cc-1c65-4033-adc4-fa6b6aeef31e";
    const lambdaPurpose = "AuthSetupCustomResourceHandler";
    const fn = new SingletonFunction(this, "CustomResourceHandler", {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(codePath),
      handler: "auth-cr-handler.handler",
      uuid,
      architecture: Architecture.ARM_64,
      lambdaPurpose,
      timeout: Duration.minutes(10),
      memorySize: 128,
      environment: {
        NODE_OPTIONS: "--enable-source-maps",
      },
      initialPolicy: [
        new PolicyStatement({
          actions: ["ssm:PutParameter", "ssm:DeleteParameter"],
          resources: [
            Stack.of(this).formatArn({
              service: "ssm",
              resource: "parameter",
              resourceName: getKeyName({ apiId, type: "private" }).slice(1),
            }),
            Stack.of(this).formatArn({
              service: "ssm",
              resource: "parameter",
              resourceName: getKeyName({ apiId, type: "public" }).slice(1),
            }),
          ],
        }),
      ],
    });
    return fn;
  }

  #addRoute(params: AddRouteParams) {
    const { api, apiPathPrefix, authFunction } = params;
    if (!/^[a-z\/]+$/.test(apiPathPrefix)) {
      throw new Error(`Invalid apiPathPrefix: ${apiPathPrefix}`);
    }
    const paths = apiPathPrefix.split("/").filter(Boolean);
    let resource = api.root;
    for (const path of paths) {
      resource = resource.addResource(path);
    }
    resource
      .addResource("{proxy+}")
      .addMethod("ANY", new LambdaIntegration(authFunction));
  }
}

interface AddRouteParams {
  api: RestApi;
  apiPathPrefix: string;
  authFunction: GbFunction;
}

interface GetKeyNameParams {
  apiId: string;
  type: "private" | "public";
}
function getKeyName(params: GetKeyNameParams): string {
  const { apiId, type } = params;
  return `/gboost/auth/${apiId}/${type}-key`;
}
