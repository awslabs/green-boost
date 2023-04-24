import { Stack } from "aws-cdk-lib";
import { CfnRole } from "aws-cdk-lib/aws-iam";
import { NagSuppressions } from "cdk-nag";
import type { IConstruct } from "constructs";

export function suppressAwsLambdaBasicExecutionRole(construct: IConstruct) {
  if (construct instanceof CfnRole) {
    /**
     * @example
     * ```ts
     * [{
          'Fn::Join': [
            '',
            [
              'arn:',
              [Object],
              ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'
            ]
          ]
        }]
     * ```
     */
    const managedPolicyArns =
      Stack.of(construct).resolve(construct.managedPolicyArns) || [];
    for (const managedPolicyArn of managedPolicyArns) {
      const endOfArn = managedPolicyArn?.["Fn::Join"]?.at(-1)?.at(-1);
      if (endOfArn?.endsWith("AWSLambdaBasicExecutionRole")) {
        NagSuppressions.addResourceSuppressions(
          construct,
          [
            {
              id: "AwsSolutions-IAM4",
              reason:
                "The Lambda Basic Execution Role does not grant excessive access",
            },
          ],
          true
        );
      }
    }
  }
}
