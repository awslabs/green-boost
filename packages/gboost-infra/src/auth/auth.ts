import { CustomResource, Duration } from "aws-cdk-lib";
import {
  IResource,
  LambdaIntegration,
  RestApi,
} from "aws-cdk-lib/aws-apigateway";
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
import { fileURLToPath } from "url";
import type { Function as GbFunction } from "../function.js";

const thisFilePath = fileURLToPath(import.meta.url);

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
}

export class Auth extends Construct {
  constructor(scope: Construct, id: string, props: AuthProps) {
    super(scope, id);
    const { api, apiPathPrefix = "auth", fn } = props;
    const crFn = this.#getFunction();
    this.#createCustomResource(crFn);
    const resource = this.#getApiResource({ api, apiPathPrefix });
    this.#addRoutes({ fn, resource });
  }

  #getFunction() {
    const isDev = import.meta.url.endsWith(".ts");
    let codePath = "";
    if (isDev) {
      codePath = resolve(
        thisFilePath,
        "../../../lib/web-deployment/custom-resource-handler"
      );
    } else {
      codePath = resolve(thisFilePath, "../custom-resource-handler");
    }
    const uuid = "e92614cc-1c65-4033-adc4-fa6b6aeef31e";
    const lambdaPurpose = "AuthSetupCustomResourceHandler";
    return new SingletonFunction(this, "CustomResourceHandler", {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(codePath),
      handler: "custom-resource-handler.handler",
      uuid,
      architecture: Architecture.ARM_64,
      lambdaPurpose,
      timeout: Duration.minutes(10),
      memorySize: 128,
      environment: {
        NODE_OPTIONS: "--enable-source-maps",
      },
    });
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
    const paths = apiPathPrefix.split("/");
    let resource = api.root;
    for (const path of paths) {
      if (path) {
        resource = resource.addResource(path);
      }
    }
    return resource;
  }

  #addRoutes(params: AddRoutesParams) {
    const { resource, fn } = params;
    resource
      .addResource("authorize")
      .addMethod("GET", new LambdaIntegration(fn));
    resource
      .addResource("callback")
      .addMethod("POST", new LambdaIntegration(fn));
  }
}

interface GetApiResourceParams {
  api: RestApi;
  apiPathPrefix: string;
}
interface AddRoutesParams {
  resource: IResource;
  fn: GbFunction;
}
