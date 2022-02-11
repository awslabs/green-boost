import { Arn, Duration, RemovalPolicy, Stack } from "aws-cdk-lib";
import {
  CfnUserPoolGroup,
  CfnUserPoolGroupProps,
  Mfa,
  StandardAttributes,
  UserPool,
  UserPoolClient,
} from "aws-cdk-lib/aws-cognito";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { Function } from "../function.js";
import { Stage } from "../stages.js";

export interface UserPoolGroupProps
  extends Omit<CfnUserPoolGroupProps, "userPoolId"> {
  groupName: string;
}

export interface UserBaseProps {
  email?: string;
  groups: UserPoolGroupProps[];
  defaultGroupName: string;
  standardAttributes: StandardAttributes;
  stage: string;
}

/**
 * UserBase Construct
 * Creates an Cognito User Pool, Groups, Client
 */
export class UserBase extends Construct {
  userPool!: UserPool;
  userPoolClient!: UserPoolClient;

  constructor(scope: Construct, id: string, props: UserBaseProps) {
    super(scope, id);
    const { defaultGroupName, groups, standardAttributes, stage } = props;
    const isProd = stage === Stage.Prod;

    const postConfirmationFn = new Function(this, "PostConfirmationFunction", {
      entry: new URL("./post-confirmation.ts", import.meta.url).pathname,
      environment: {
        DEFAULT_GROUP_NAME: defaultGroupName,
      },
      initialPolicy: [
        new PolicyStatement({
          actions: ["cognito-idp:AdminAddUserToGroup"],
          resources: [
            Arn.format(
              // TODO: lock down resource but how to get around circular dep?
              { service: "cognito-idp", resource: "userpool/*" },
              Stack.of(this)
            ),
          ],
        }),
      ],
      memorySize: 256,
      timeout: Duration.seconds(5),
      stage,
    });

    this.userPool = new UserPool(this, "UserPool", {
      removalPolicy: isProd ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      selfSignUpEnabled: true,
      standardAttributes,
      autoVerify: {
        // require user to enter email confirmation code
        email: true,
      },
      lambdaTriggers: {
        postConfirmation: postConfirmationFn,
      },
      mfa: Mfa.REQUIRED,
      mfaSecondFactor: { otp: true, sms: false },
      deviceTracking: {
        challengeRequiredOnNewDevice: true,
        deviceOnlyRememberedOnUserPrompt: true,
      },
    });

    // TODO enable for prod
    // const cfnUserPool = userPool.node.defaultChild as CfnUserPool;
    // // required to avoid 50 email daily limit
    // cfnUserPool.emailConfiguration = {
    //   emailSendingAccount: "DEVELOPER",
    //   from: email,
    //   sourceArn: Arn.format(
    //     { service: "ses", resource: `identity/${email}` },
    //     this
    //   ),
    // };
    groups.forEach(
      ({ groupName, precedence, description }) =>
        new CfnUserPoolGroup(this, `UserPoolGroup${groupName}`, {
          userPoolId: this.userPool.userPoolId,
          groupName,
          precedence, // lower takes precendence
          description,
        })
    );
    this.userPoolClient = new UserPoolClient(this, "UserPoolClient", {
      userPool: this.userPool,
    });

    // TODO: create custom resource to lock down post confirmation fn permissions
  }
}
