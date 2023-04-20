import { CustomResource, Duration, Stack } from "aws-cdk-lib";
import {
  IResource,
  LambdaIntegration,
  RestApi,
} from "aws-cdk-lib/aws-apigateway";
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

export const enum AuthType {
  "OAuth" = "OAuth",
  "MagicLink" = "MagicLink",
  "SAML" = "SAML",
  "WebAuthn" = "WebAuthn",
}

interface AuthProps {
  /**
   * API Gateway (v1) to attach to routes: .../authorize and .../callback
   */
  api: RestApi;
  /**
   * API path to prefix /authorize and /callback routes with
   * @default "auth"
   */
  apiPathPrefix?: string;
  /**
   * Function to authenticate users with. In this function you should call
   * `createAuthHandler`.
   */
  fn: GbFunction;
  /**
   * Type of authentication desire. Determines routes added to API Gateway.
   */
  types: AuthType[];
}

export class Auth extends Construct {
  constructor(scope: Construct, id: string, props: AuthProps) {
    super(scope, id);
    const { api, apiPathPrefix = "auth", fn, types } = props;
    const crFn = this.#getFunction();
    this.#createCustomResource(crFn);
    const resource = this.#getApiResource({ api, apiPathPrefix });
    this.#addRoutes({ fn, resource, types });
    this.#allowAccessToKeys(fn);
  }

  #getFunction() {
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
              resourceName: "gboost/auth/private-key",
            }),
            Stack.of(this).formatArn({
              service: "ssm",
              resource: "parameter",
              resourceName: "gboost/auth/public-key",
            }),
          ],
        }),
      ],
    });
    return fn;
  }

  #createCustomResource(fn: SingletonFunction) {
    const provider = new Provider(this, "Provider", {
      onEventHandler: fn,
      logRetention: RetentionDays.ONE_DAY,
    });

    const customResource = new CustomResource(this, "CustomResource", {
      resourceType: "Custom::WebDeployment",
      serviceToken: provider.serviceToken,
      properties: {
        PrivateKeyName: "/gboost/auth/private-key",
        PublicKeyName: "/gboost/auth/public-key",
      },
    });
    return customResource;
  }

  #getApiResource(params: GetApiResourceParams): IResource {
    const { api, apiPathPrefix } = params;
    if (!/^[a-z\/]+$/.test(apiPathPrefix)) {
      throw new Error(`Invalid apiPathPrefix: ${apiPathPrefix}`);
    }
    const paths = apiPathPrefix.split("/").filter(Boolean);
    let resource = api.root;
    for (const path of paths) {
      resource = resource.addResource(path);
    }
    return resource;
  }

  #addRoutes(params: AddRoutesParams) {
    const { resource, fn } = params;
    for (const authType of params.types) {
      if (authType === AuthType.MagicLink) {
        throw new Error("Not Implemented");
      } else if (authType === AuthType.OAuth) {
        const oAuthResource = resource.addResource("oauth");
        oAuthResource
          .addResource("authorize")
          .addMethod("GET", new LambdaIntegration(fn));
        oAuthResource
          .addResource("callback")
          .addMethod("GET", new LambdaIntegration(fn));
      } else if (authType === AuthType.SAML) {
        throw new Error("Not Implemented");
      } else if (authType === AuthType.WebAuthn) {
        throw new Error("Not Implemented");
      }
    }
  }

  #allowAccessToKeys(fn: GbFunction) {
    fn.addToRolePolicy(
      new PolicyStatement({
        actions: ["ssm:GetParameter"],
        resources: [
          Stack.of(this).formatArn({
            service: "ssm",
            resource: "parameter",
            resourceName: "gboost/auth/private-key",
          }),
          Stack.of(this).formatArn({
            service: "ssm",
            resource: "parameter",
            resourceName: "gboost/auth/public-key",
          }),
        ],
      })
    );
  }
}

interface GetApiResourceParams {
  api: RestApi;
  apiPathPrefix: string;
}
interface AddRoutesParams {
  resource: IResource;
  fn: GbFunction;
  types: AuthType[];
}
