---
to: infra/src/back-end-stack.ts
---

import { Aspects, CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import {
  GraphqlApi,
  Stage,
  SuppressOkNags,
  <% if (authn === "Cognito User Pool") { %>UserBase,<% } %>
  <% if (authn === "Cognito User Pool") { %>UserManagement,<% } %>
} from "gboost-infra";
<% if (authn === "Cognito User Pool") { -%>
import { userAttributes } from "../../common/src/userAttributes.js";
import { groups } from "../../common/src/groups.js";
<% } -%>

export interface BackEndStackProps extends StackProps {
  stage: Stage;
  email?: string;
}

export class BackEndStack extends Stack {
  awsRegion = new CfnOutput(this, "AwsRegionOutput", {
    value: Stack.of(this).region,
  });
  gqlUrl!: CfnOutput;
<% if (authn === "Cognito User Pool") { -%>
  userPoolId!: CfnOutput;
  userPoolClientId!: CfnOutput;
<% } -%>

  constructor(scope: Construct, id: string, props: BackEndStackProps) {
    super(scope, id, props);
    const { email, stage } = props;
<% if (authn === "Cognito User Pool") { -%>
    const userBase = new UserBase(this, "UserBase", {
      defaultGroupName: "User",
      email,
      groups,
      stage,
      standardAttributes: userAttributes,
    });
    this.userPoolId = new CfnOutput(this, "UserPoolIdOutput", {
      value: userBase.userPool.userPoolId,
    });
    this.userPoolClientId = new CfnOutput(this, "UserPoolClientIdOutput", {
      value: userBase.userPoolClient.userPoolClientId,
    });
<% } -%>

    const gqlApi = new GraphqlApi(this, "GqlApi", {
      name: `${stage}-gql-api`,
<% if (authn === "Cognito User Pool") { -%>
      userPool: userBase.userPool,
<% } -%>
    });
    this.gqlUrl = new CfnOutput(this, "GqlUrlOutput", {
      value: gqlApi.graphqlUrl,
    });

<% if (features.includes("User Management")) { -%>
    new UserManagement(this, "UserManagement", {
      api: gqlApi,
      userPoolId: userBase.userPool.userPoolId,
      groupNames: groups.map((g) => g.groupName),
      adminGroupNames: ["Admin"],
      stage,
    });
<% } -%>

    Aspects.of(this).add(new SuppressOkNags());
  }
}
