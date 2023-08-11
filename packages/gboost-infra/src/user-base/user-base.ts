import { Arn, Duration, Stack } from "aws-cdk-lib";
import { Mfa, UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { NagSuppressions } from "cdk-nag";
import { Construct } from "constructs";
import { fileURLToPath } from "node:url";
import { Function } from "../index.js";
import {
  type CommonUserBaseProps,
  createUserPoolGroups,
  defaultPasswordPolicy,
} from "./common.js";

export interface UserBaseProps extends CommonUserBaseProps {
  sesEmail?: string;
  defaultGroupName: string;
}

/**
 * UserBase Construct
 * Creates a Cognito User Pool, User Pool Client, and User Pool Groups
 * @deprecated
 */
export class UserBase extends Construct {
  userPool!: UserPool;
  userPoolClient!: UserPoolClient;

  constructor(scope: Construct, id: string, props: UserBaseProps) {
    super(scope, id);
    const { defaultGroupName, groups, userPoolProps, userPoolClientProps } =
      props;

    const fileExt = import.meta.url.slice(-2);
    const entry = fileURLToPath(
      new URL(`./post-confirmation.${fileExt}`, import.meta.url)
    );
    const postConfirmationFn = new Function(this, "PostConfirmationFunction", {
      entry,
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
    });

    this.userPool = new UserPool(this, "UserPool", {
      selfSignUpEnabled: true,
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
      passwordPolicy: defaultPasswordPolicy,
      ...userPoolProps,
    });
    NagSuppressions.addResourceSuppressions(this.userPool, [
      {
        id: "AwsSolutions-COG3",
        reason: "Let user opt in if desired - too expensive for default",
      },
    ]);

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

    createUserPoolGroups(this, groups, this.userPool.userPoolId);

    this.userPoolClient = new UserPoolClient(this, "UserPoolClient", {
      userPool: this.userPool,
      ...userPoolClientProps,
    });

    // TODO: create custom resource to lock down post confirmation fn permissions
  }
}
