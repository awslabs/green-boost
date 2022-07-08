import { Construct } from "constructs";
import {
  AttributeMapping,
  OAuthSettings,
  StringAttribute,
  UserPool,
  UserPoolClient,
  UserPoolClientIdentityProvider,
  UserPoolDomain,
  UserPoolDomainProps,
  UserPoolIdentityProviderOidc,
  UserPoolIdentityProviderOidcProps,
} from "aws-cdk-lib/aws-cognito";
import { Function } from "../index.js";
import { CommonUserBaseProps, createUserPoolGroups } from "./common.js";
import { CommonProps, Stage } from "../common-props.js";

interface OidcUserBaseProps extends CommonProps, CommonUserBaseProps {
  attributeMapping: AttributeMapping;
  clientId: string;
  clientSecret: string;
  domainPrefix: string;
  issuerUrl: string;
  oAuth: OAuthSettings;
  /**
   * The OAuth 2.0 scopes that you will request from OpenID Connect. Scopes are groups of OpenID Connect user attributes to exchange with your app.
   */
  scopes: string[];
  userPoolDomainProps?: UserPoolDomainProps;
  userPoolIdentityProviderOidcProps?: UserPoolIdentityProviderOidcProps;
}

/**
 * Federated User Base with OIDC
 * Creates a Cognito User Pool, User Pool Client, User Pool Domain, and User
 * Pool Identity Provider
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
      scopes,
      stage = Stage.Dev,
      userPoolProps,
      userPoolClientProps,
      userPoolDomainProps,
      userPoolIdentityProviderOidcProps,
    } = props;

    const fileExt = import.meta.url.slice(-2);
    const preTokenGeneration = new Function(
      this,
      "PreTokenGenerationFunction",
      {
        entry: new URL(`./pre-token-generation.${fileExt}`, import.meta.url)
          .pathname,
        stage,
      }
    );

    this.userPool = new UserPool(this, "UserPool", {
      // Cognito shouldn't send verification email - already handled by idP
      autoVerify: { email: false },
      signInAliases: { username: true, email: true },
      lambdaTriggers: {
        preTokenGeneration,
      },
      customAttributes: {
        // Groups/roles from IdP are stored in custom:groups and then Pre-Token
        // Generation Lambda adds custom:groups to cognito:groups attribute.
        // This provides same functionality as if user were actually in the
        // Cognito User Group while limiting out of sync group info in Cognito
        // since on each login custom:groups is updated from IdP
        "custom:groups": new StringAttribute({ mutable: true }),
      },
      ...userPoolProps,
    });

    createUserPoolGroups(this, groups, this.userPool.userPoolId);

    this.userPoolClient = new UserPoolClient(this, "UserPoolClient", {
      oAuth: {
        flows: { authorizationCodeGrant: true },
        ...oAuth,
      },
      supportedIdentityProviders: [UserPoolClientIdentityProvider.COGNITO],
      // TODO: maybe need readAttributes and writeAttributes?
      userPool: this.userPool,
      ...userPoolClientProps,
    });

    this.userPoolIdentityProviderOidc = new UserPoolIdentityProviderOidc(
      this,
      "UserPoolIdP",
      {
        attributeMapping,
        clientId,
        clientSecret,
        issuerUrl,
        scopes,
        userPool: this.userPool,
        ...userPoolIdentityProviderOidcProps,
      }
    );

    this.userPoolDomain = new UserPoolDomain(this, "UserPoolDomain", {
      userPool: this.userPool,
      cognitoDomain: {
        domainPrefix,
      },
      ...userPoolDomainProps,
    });
  }
}
