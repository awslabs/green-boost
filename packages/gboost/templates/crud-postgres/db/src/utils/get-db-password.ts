// @ts-nocheck
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import { getEnvVar } from "@{{GB_APP_ID}}/core/utils";

const smClient = new SecretsManagerClient({});

/**
 * Gets DB plaintext password via SECRET_ARN environment variable. Assumes
 * AWS Secrets Manager SecretValue is JSON with "password" property
 */
export async function getDbPassword(): Promise<string> {
  const secretId = getEnvVar("SECRET_ARN");
  const response = await smClient.send(
    new GetSecretValueCommand({ SecretId: secretId })
  );
  const { SecretString } = response;
  if (SecretString) {
    const parsedSecretString = JSON.parse(SecretString) as { password: string };
    return parsedSecretString.password;
  } else {
    throw new Error("GetSecretValueCommand returned empty SecretString");
  }
}
