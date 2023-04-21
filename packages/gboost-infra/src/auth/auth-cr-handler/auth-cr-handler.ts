import type { CdkCustomResourceHandler } from "aws-lambda";
import { generateKeyPairSync } from "node:crypto";
import {
  DeleteParameterCommand,
  PutParameterCommand,
  SSMClient,
} from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient({});

export const handler: CdkCustomResourceHandler = async (event) => {
  console.log(event);
  const privateKeyName: string = event.ResourceProperties["PrivateKeyName"];
  const publicKeyName: string = event.ResourceProperties["PublicKeyName"];
  if (event.RequestType === "Create" || event.RequestType === "Update") {
    const promises: Promise<unknown>[] = [];
    if (event.RequestType === "Update") {
      promises.push(
        ssmClient.send(
          new DeleteParameterCommand({
            Name: event.OldResourceProperties["PrivateKeyName"],
          })
        )
      );
      promises.push(
        ssmClient.send(
          new DeleteParameterCommand({
            Name: event.OldResourceProperties["PublicKeyName"],
          })
        )
      );
    }
    const { privateKey, publicKey } = generateKeys();
    promises.push(
      ssmClient.send(
        new PutParameterCommand({
          Name: privateKeyName,
          Value: privateKey,
          Type: "SecureString",
        })
      )
    );
    promises.push(
      ssmClient.send(
        new PutParameterCommand({
          Name: publicKeyName,
          Value: publicKey,
          Type: "SecureString",
        })
      )
    );
    await Promise.all(promises);
  } else if (event.RequestType === "Delete") {
    await Promise.all([
      ssmClient.send(
        new DeleteParameterCommand({
          Name: privateKeyName,
        })
      ),
      ssmClient.send(
        new DeleteParameterCommand({
          Name: publicKeyName,
        })
      ),
    ]);
  }
  return {};
};

function generateKeys() {
  // why ed25519? see https://www.scottbrady91.com/jose/jwts-which-signing-algorithm-should-i-use
  const keyPair = generateKeyPairSync("ed25519");
  const privateKey = keyPair.privateKey
    .export({ format: "pem", type: "pkcs8" })
    .toString("utf8");
  const publicKey = keyPair.publicKey
    // spki required for public key
    .export({ format: "pem", type: "spki" })
    .toString("utf8");
  return { privateKey, publicKey };
}
