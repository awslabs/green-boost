// @ts-nocheck
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";

const smClient = new SecretsManagerClient({});

/**
 * Gets DB plaintext password via DB_SECRET_ARN environment variable. Assumes
 * AWS Secrets Manager SecretValue is JSON with "password" property which is
 * setup for you when using `Credentials.fromGeneratedSecret` method
 */
export async function getDbPassword(): Promise<string> {
  const secretId = process.env["DB_SECRET_ARN"];
  if (!secretId) throw new Error(`Missing process.env["DB_SECRET_ARN"]`);
  const response = await smClient.send(
    new GetSecretValueCommand({ SecretId: secretId }),
  );
  const { SecretString } = response;
  if (SecretString) {
    const parsedSecretString = JSON.parse(SecretString) as { password: string };
    return parsedSecretString.password;
  } else {
    throw new Error("GetSecretValueCommand returned empty SecretString");
  }
}
