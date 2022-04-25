import {
  AuthorizationType,
  DataSourceOptions,
  FieldLogLevel,
  GraphqlApi as AwsGraphqlApi,
  GraphqlApiProps as AwsGraphqlApiProps,
  LambdaDataSource,
} from "@aws-cdk/aws-appsync-alpha";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { IUserPool } from "aws-cdk-lib/aws-cognito";
import { IFunction } from "aws-cdk-lib/aws-lambda";

interface GraphqlApiProps extends AwsGraphqlApiProps {
  userPool?: IUserPool;
}

/**
 * GraphqlApi with logs enabled by default and shorthand user pool config
 */
export class GraphqlApi extends AwsGraphqlApi {
  constructor(scope: Construct, id: string, props: GraphqlApiProps) {
    const { userPool, ...newProps } = props;
    if (newProps.authorizationConfig === undefined && userPool) {
      newProps.authorizationConfig = {
        defaultAuthorization: {
          authorizationType: AuthorizationType.USER_POOL,
          userPoolConfig: {
            userPool: userPool,
          },
        },
      };
    }
    if (newProps.logConfig === undefined) {
      newProps.logConfig = {
        excludeVerboseContent: false,
        fieldLogLevel: FieldLogLevel.ERROR,
      };
    }
    super(scope, id, newProps);
    NagSuppressions.addResourceSuppressions(
      this,
      [
        {
          id: "AwsSolutions-IAM4",
          reason:
            "The AWSAppSyncPushToCloudWatchLogsRole is not overly permissives",
        },
      ],
      true
    );
  }

  addLambdaDataSource(
    id: string,
    lambdaFunction: IFunction,
    options?: DataSourceOptions
  ): LambdaDataSource {
    const lambdaDataSource = super.addLambdaDataSource(
      id,
      lambdaFunction,
      options
    );
    NagSuppressions.addResourceSuppressions(
      lambdaFunction,
      [
        {
          id: "AwsSolutions-IAM5",
          reason:
            "Allow AppSync to invoke any version/alias of the specified lambda data source",
        },
      ],
      true
    );
    return lambdaDataSource;
  }
}
