import type { CdkCustomResourceHandler } from "aws-lambda";
import { generateKeyPairSync } from "node:crypto";
import {
  DeleteParameterCommand,
  GetParameterCommand,
  PutParameterCommand,
  SSMClient,
} from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient({});

export const handler: CdkCustomResourceHandler = async (event) => {
  console.log(event);
  const privateKeyName: string = event.ResourceProperties["PrivateKeyName"];
  const publicKeyName: string = event.ResourceProperties["PublicKeyName"];
  if (event.RequestType === "Create") {
    const { privateKey, publicKey } = generateKeys();
    await Promise.all([
      ssmClient.send(
        new PutParameterCommand({
          Name: privateKeyName,
          Value: privateKey,
          Type: "SecureString",
        })
      ),
      ssmClient.send(
        new PutParameterCommand({
          Name: publicKeyName,
          Value: publicKey,
          Type: "SecureString",
        })
      ),
    ]);
  } else if (event.RequestType === "Update") {
    const oldPrivateKeyPath: string =
      event.OldResourceProperties["PrivateKeyName"];
    const oldPublicKeyPath: string =
      event.OldResourceProperties["PublicKeyName"];
    const promises: Promise<unknown>[] = [];
    if (oldPrivateKeyPath !== privateKeyName) {
      promises.push(updateSecureString(oldPrivateKeyPath, privateKeyName));
    }
    if (oldPublicKeyPath !== publicKeyName) {
      promises.push(updateSecureString(oldPublicKeyPath, publicKeyName));
    }
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

async function updateSecureString(oldName: string, newName: string) {
  const oldParam = await ssmClient.send(
    new GetParameterCommand({
      Name: oldName,
      WithDecryption: true,
    })
  );
  await ssmClient.send(
    new PutParameterCommand({
      Name: newName,
      Value: oldParam.Parameter?.Value,
      Type: "SecureString",
    })
  );
  return ssmClient.send(
    new DeleteParameterCommand({
      Name: oldName,
    })
  );
}
