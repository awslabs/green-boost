// @ts-nocheck
import { Signer } from "@aws-sdk/rds-signer";

interface GetDbPasswordParams {
  host: string;
  port: number;
  user: string;
}

/**
 * Gets signed DB auth token for usage as IAM user within Aurora
 * Note, the IAM user must be created before this password can be used.
 * @link https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html
 */
export async function getDbAuthToken(params: GetDbPasswordParams) {
  const { host, port, user } = params;
  const signer = new Signer({
    hostname: host,
    port: port,
    username: user,
  });
  return signer.getAuthToken();
}
