// Adapted from: https://github.com/aws/aws-cdk/blob/main/packages/@aws-cdk/aws-s3/lib/perms.ts
// removing wildcards and adding explicit actions to reduce cdk-nag complaints
// about wildcards in IAM policies

const s3GetObjectActions = [
  "s3:GetObject",
  "s3:GetObjectAcl",
  "s3:GetObjectAttributes",
  "s3:GetObjectLegalHold",
  "s3:GetObjectRetention",
  "s3:GetObjectTagging",
  "s3:GetObjectTorrent",
  "s3:GetObjectVersion",
  "s3:GetObjectVersionAcl",
  "s3:GetObjectVersionForReplication",
  "s3:GetObjectVersionTagging",
  "s3:GetObjectVersionTorrent",
];

const s3GetBucketActions = [
  "s3:GetBucketAcl",
  "s3:GetBucketCORS",
  "s3:GetBucketLocation",
  "s3:GetBucketLogging",
  "s3:GetBucketNotification",
  "s3:GetBucketObjectLockConfiguration",
  "s3:GetBucketOwnershipControls",
  "s3:GetBucketPolicy",
  "s3:GetBucketPolicyStatus",
  "s3:GetBucketPublicAccessBlock",
  "s3:GetBucketRequestPayment",
  "s3:GetBucketTagging",
  "s3:GetBucketVersioning",
  "s3:GetBucketWebsite",
];

const s3ListActions = [
  "s3:ListAccessPoints",
  "s3:ListAccessPointsForObjectLambda",
  "s3:ListAllMyBuckets",
  "s3:ListBucket",
  "s3:ListBucketMultipartUploads",
  "s3:ListBucketVersions",
  "s3:ListJobs",
  "s3:ListMultiRegionAccessPoints",
  "s3:ListMultipartUploadParts",
  "s3:ListStorageLensConfigurations",
];

const s3PutActions = [
  "s3:PutObject",
  "s3:PutObjectAcl",
  "s3:PutObjectLegalHold",
  "s3:PutObjectRetention",
  "s3:PutObjectTagging",
  "s3:PutObjectVersionAcl",
  "s3:PutObjectVersionTagging",
];

const s3AbortActions = ["s3:AbortMultipartUpload"];

const s3DeleteActions = [
  "s3:DeleteObject",
  "s3:DeleteObjectTagging",
  "s3:DeleteObjectVersion",
  "s3:DeleteObjectVersionTagging",
];

const kmsReEncryptActions = ["kms:ReEncryptFrom", "kms:ReEncryptTo"];

const kmsGenerateDataKeyActions = [
  "kms:GenerateDataKey",
  "kms:GenerateDataKeyPair",
  "kms:GenerateDataKeyPairWithoutPlaintext",
  "kms:GenerateDataKeyWithoutPlaintext",
];

export const BUCKET_READ_ACTIONS = [
  ...s3GetObjectActions,
  ...s3GetBucketActions,
  "s3:List*",
];

export const BUCKET_READ_METADATA_ACTIONS = [
  ...s3GetBucketActions,
  ...s3ListActions,
];

export const LEGACY_BUCKET_PUT_ACTIONS = [...s3PutActions, ...s3AbortActions];

export const BUCKET_PUT_ACTIONS = [...s3PutActions, ...s3AbortActions];

export const BUCKET_PUT_ACL_ACTIONS = [
  "s3:PutObjectAcl",
  "s3:PutObjectVersionAcl",
];

export const BUCKET_DELETE_ACTIONS = [...s3DeleteActions];

export const KEY_READ_ACTIONS = ["kms:Decrypt", "kms:DescribeKey"];

export const KEY_WRITE_ACTIONS = [
  "kms:Encrypt",
  ...kmsReEncryptActions,
  ...kmsGenerateDataKeyActions,
  "kms:Decrypt", // required for multipart uploads. Refer https://aws.amazon.com/premiumsupport/knowledge-center/s3-multipart-kms-decrypt/
];
