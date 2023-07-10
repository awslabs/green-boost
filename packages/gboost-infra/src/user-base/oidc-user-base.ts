import { Construct } from "constructs";
import {
  type AttributeMapping,
  ClientAttributes,
  type OAuthSettings,
  StringAttribute,
  UserPool,
  UserPoolClient,
  UserPoolClientIdentityProvider,
  UserPoolDomain,
  type UserPoolDomainProps,
  UserPoolIdentityProviderOidc,
  type UserPoolIdentityProviderOidcProps,
} from "aws-cdk-lib/aws-cognito";
import {
  type CommonUserBaseProps,
  createUserPoolGroups,
  defaultPasswordPolicy,
  standardWriteAttributes,
} from "./common.js";
import { NagSuppressions } from "cdk-nag";

interface OidcUserBaseProps extends Partial<CommonUserBaseProps> {
  attributeMapping: AttributeMapping;
  clientId: string;
  clientSecret: string;
  domainPrefix: string;
  issuerUrl: string;
  oAuth: OAuthSettings;
  /**
   * The OAuth 2.0 scopes that you will request from OpenID Connect. Scopes are
   * groups of OpenID Connect user attributes to exchange with your app.
   * @default ["openid"]
   */
  idpScopes: string[];
  userPoolDomainProps?: Partial<UserPoolDomainProps>;
  userPoolIdentityProviderOidcProps?: Partial<UserPoolIdentityProviderOidcProps>;
}

/**
 * Federated User Base with OIDC
 * Creates a Cognito User Pool, User Pool Client, User Pool Domain, and User
 * Pool Identity Provider
 * @deprecated
 */
export class OidcUserBase extends Construct {
  userPool!: UserPool;
  userPoolClient!: UserPoolClient;
  userPoolDomain!: UserPoolDomain;
  userPoolIdentityProviderOidc!: UserPoolIdentityProviderOidc;

  constructor(scope: Construct, id: string, props: OidcUserBaseProps) {
    super(scope, id);
    const {
      attributeMapping,
      clientId,
      clientSecret,
      domainPrefix,
      groups,
      issuerUrl,
      oAuth,
      idpScopes = ["openid"],
      userPoolProps,
      userPoolClientProps,
      userPoolDomainProps,
      userPoolIdentityProviderOidcProps,
    } = props;

    this.userPool = new UserPool(this, "UserPool", {
      // Cognito shouldn't send verification email - already handled by idP
      autoVerify: { email: false },
      signInAliases: { username: true, email: true },
      customAttributes: {
        // Groups/roles from IdP are stored in custom:groups and then Pre-Token
        // Generation Lambda adds custom:groups to cognito:groups attribute.
        // This provides same functionality as if user were actually in the
        // Cognito User Group while limiting out of sync group info in Cognito
        // since on each login custom:groups is updated from IdP
        groups: new StringAttribute({ mutable: true }),
      },
      // must explictly define password policy for cdk-nag
      passwordPolicy: defaultPasswordPolicy,
      ...userPoolProps,
    });

    if (groups) {
      createUserPoolGroups(this, groups, this.userPool.userPoolId);
    }

    this.userPoolIdentityProviderOidc = new UserPoolIdentityProviderOidc(
      this,
      "UserPoolIdP",
      {
        attributeMapping,
        clientId,
        clientSecret,
        issuerUrl,
        scopes: idpScopes,
        userPool: this.userPool,
        ...userPoolIdentityProviderOidcProps,
      }
    );

    this.userPoolClient = new UserPoolClient(this, "UserPoolClient", {
      oAuth: {
        flows: { authorizationCodeGrant: true },
        ...oAuth,
      },
      supportedIdentityProviders: [
        UserPoolClientIdentityProvider.COGNITO,
        { name: this.userPoolIdentityProviderOidc.providerName },
      ],
      // TODO: maybe need readAttributes and writeAttributes?
      writeAttributes: new ClientAttributes().withStandardAttributes(
        standardWriteAttributes
      ),
      userPool: this.userPool,
      ...userPoolClientProps,
    });

    this.userPoolDomain = new UserPoolDomain(this, "UserPoolDomain", {
      userPool: this.userPool,
      cognitoDomain: {
        domainPrefix,
      },
      ...userPoolDomainProps,
    });

    NagSuppressions.addResourceSuppressions(this.userPool, [
      {
        id: "AwsSolutions-COG3",
        reason: "Let user opt in if desired - too expensive for default",
      },
      {
        id: "AwsSolutions-COG2",
        reason: "User authentication is federated. No need for MFA",
      },
    ]);
  }
}
