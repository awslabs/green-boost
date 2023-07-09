import { Duration } from "aws-cdk-lib";
import { IGrantable, Grant } from "aws-cdk-lib/aws-iam";
import {
  BlockPublicAccess,
  Bucket as CdkBucket,
  BucketEncryption,
  BucketProps as CdkBucketProps,
  StorageClass,
} from "aws-cdk-lib/aws-s3";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";
import { mergeDeep } from "gboost-common";
import { constructDefaultProps } from "../construct-default-props.js";
import * as perms from "./permissions.js";

export type BucketProps = CdkBucketProps;

const defaultBucketProps: BucketProps = {
  encryption: BucketEncryption.S3_MANAGED,
  enforceSSL: true,
  blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
};

/**
 * S3 Bucket with default managed encryption, enforced SSL and blocked public
 * access
 * Also adds a server access logs bucket following AWS best practices
 */
export class Bucket extends CdkBucket {
  #scope: Construct;
  #id: string;
  constructor(scope: Construct, id: string, props?: BucketProps) {
    const newProps = mergeDeep(
      defaultBucketProps,
      constructDefaultProps.bucket,
      props
    );
    super(scope, id, newProps);
    this.#id = id;
    this.#scope = scope;
  }

  /**
   * Adds server access logs bucket with SSL enforced, S3 Managed encryption,
   * and intelligent tiering
   */
  addServerAccessLogsBucket() {
    const serverAccessLogsBucket = new CdkBucket(
      this.#scope,
      // access logs bucket id should be based on bucket name so that dev
      // can instantiate multiple buckets within same stack/construct
      this.#id + "AccessLogsBucket",
      {
        enforceSSL: true,
        encryption: BucketEncryption.S3_MANAGED,
        lifecycleRules: [
          {
            transitions: [
              {
                storageClass: StorageClass.INTELLIGENT_TIERING,
                transitionAfter: Duration.days(0),
              },
            ],
          },
        ],
      }
    );
    NagSuppressions.addResourceSuppressions(serverAccessLogsBucket, [
      {
        id: "AwsSolutions-S1",
        reason:
          "Server Access Logs Bucket doesn't need a Server Access Logs Bucket",
      },
    ]);
  }

  override grantRead(
    identity: IGrantable,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    objectsKeyPattern?: any,
    suppressNags?: boolean
  ): Grant {
    const grant = super.grantRead(identity, objectsKeyPattern);
    if (suppressNags) {
      // TODO: need to find generic way of accessing IGrantable's IAM policy
      // to addResourceSuppressions on it. I can for example find a lambda
      // function's IAM policy with ServiceRole > DefaultPolicy > Resource
      // but what about other resources?
      // if (grant instanceof Construct) {
      //   grant.node.
      // }
      // const policy = this.node.findChild("Policy").node.findChild("Resource");
      // const bucketLogicalId = Stack.of(this).getLogicalId(
      //   this.node.defaultChild as CfnBucket
      // );
      // NagSuppressions.addResourceSuppressions(policy, [
      //   {
      //     id: "AwsSolutions-IAM5",
      //     reason: "Specified object in bucket can be read by granted resource",
      //     appliesTo: [
      //       "Action::s3:GetObject*",
      //       "Action::s3:GetBucket*",
      //       "Action::s3:List*",
      //       `Resource::<${bucketLogicalId}.Arn>/*`,
      //     ],
      //   },
      // ]);
    }
    return grant;
  }

  #grantExplicit(params: GrantExplicitParams) {
    const { bucketActions, grantee, keyActions, resourceArns } = params;
    const grant = Grant.addToPrincipalOrResource({
      grantee,
      actions: bucketActions,
      resourceArns,
      resource: this,
    });
    if (this.encryptionKey && keyActions?.length) {
      return this.encryptionKey.grant(grantee, ...keyActions);
    }
    return grant;
  }

  /**
   * Same as `grantRead` but enumerates all actions instead of using wildcards.
   * @deprecated
   */
  grantReadTame(identity: IGrantable, objectsKeyPattern = "*"): Grant {
    return this.#grantExplicit({
      grantee: identity,
      bucketActions: perms.BUCKET_READ_ACTIONS,
      keyActions: perms.KEY_READ_ACTIONS,
      resourceArns: [this.bucketArn, this.arnForObjects(objectsKeyPattern)],
    });
  }

  /**
   * Same as `grantWrite` but enumerates all actions instead of using wildcards.
   * @deprecated
   */
  grantWriteTame(identity: IGrantable, objectsKeyPattern = "*"): Grant {
    return this.#grantExplicit({
      grantee: identity,
      bucketActions: [
        ...new Set([
          ...perms.BUCKET_PUT_ACTIONS,
          ...perms.BUCKET_DELETE_ACTIONS,
        ]),
      ],
      keyActions: perms.KEY_WRITE_ACTIONS,
      resourceArns: [this.bucketArn, this.arnForObjects(objectsKeyPattern)],
    });
  }

  /**
   * Same as `grantPut` but enumerates all actions instead of using wildcards.
   * @deprecated
   */
  grantPutTame(identity: IGrantable, objectsKeyPattern = "*"): Grant {
    return this.#grantExplicit({
      grantee: identity,
      bucketActions: perms.BUCKET_PUT_ACTIONS,
      keyActions: perms.KEY_WRITE_ACTIONS,
      resourceArns: [this.arnForObjects(objectsKeyPattern)],
    });
  }

  /**
   * Same as `grantPutAcl` but enumerates all actions instead of using wildcards.
   * @deprecated
   */
  grantPutAclTame(identity: IGrantable, objectsKeyPattern = "*"): Grant {
    return this.#grantExplicit({
      grantee: identity,
      bucketActions: perms.BUCKET_PUT_ACL_ACTIONS,
      keyActions: [],
      resourceArns: [this.arnForObjects(objectsKeyPattern)],
    });
  }

  /**
   * Same as `grantDelete` but enumerates all actions instead of using wildcards.
   * @deprecated
   */
  grantDeleteTame(identity: IGrantable, objectsKeyPattern = "*"): Grant {
    return this.#grantExplicit({
      grantee: identity,
      bucketActions: perms.BUCKET_DELETE_ACTIONS,
      keyActions: [],
      resourceArns: [this.arnForObjects(objectsKeyPattern)],
    });
  }

  /**
   * Same as `grantReadWrite` but enumerates all actions instead of using wildcards.
   * @deprecated
   */
  grantReadWriteTame(identity: IGrantable, objectsKeyPattern = "*"): Grant {
    return this.#grantExplicit({
      grantee: identity,
      bucketActions: [
        ...new Set([
          ...perms.BUCKET_READ_ACTIONS,
          ...perms.BUCKET_PUT_ACTIONS,
          ...perms.BUCKET_DELETE_ACTIONS,
        ]),
      ],
      keyActions: [
        ...new Set([...perms.KEY_READ_ACTIONS, ...perms.KEY_WRITE_ACTIONS]),
      ],
      resourceArns: [this.bucketArn, this.arnForObjects(objectsKeyPattern)],
    });
  }
}

interface GrantExplicitParams {
  grantee: IGrantable;
  bucketActions: string[];
  keyActions: string[];
  resourceArns: string[];
}
