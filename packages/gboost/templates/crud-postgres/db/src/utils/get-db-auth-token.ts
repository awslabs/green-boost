// @ts-nocheck
import { Signer } from "@aws-sdk/rds-signer";

interface GetDbPasswordParams {
  host: string;
  port: number;
  username: string;
}

/**
 * Gets signed DB auth token for usage as IAM user within Aurora
 * Note, the IAM user must be created before this password can be used.
 */
export async function getDbAuthToken(params: GetDbPasswordParams) {
  const { host, port, username } = params;
  const localPassword = process.env["PGPASSWORD"];
  if (localPassword) {
    return localPassword;
  }
  const signer = new Signer({
    hostname: host,
    port: port,
    username: username,
  });
  return signer.getAuthToken();
}
