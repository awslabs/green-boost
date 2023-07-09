import {
  createReadStream,
  createWriteStream,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import type { CdkCustomResourceHandler } from "aws-lambda";
import {
  DeleteObjectsCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3";
import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";
import AdmZip from "adm-zip";
import type { ResourceProperties } from "./common.js";
import { Readable } from "node:stream";
import { relative, resolve } from "node:path";
import { tmpdir } from "node:os";
import mime from "mime-types";

const s3 = new S3Client({});
const cf = new CloudFrontClient({});

export const handler: CdkCustomResourceHandler = async (event) => {
  console.log(event);
  if (event.RequestType === "Create" || event.RequestType === "Update") {
    const resourceProperties = event.ResourceProperties as ResourceProperties;
    const {
      destinationBucketName,
      destinationObjectKeyPrefix,
      environment,
      sourceBucketName,
      sourceObjectKey,
      distributionId,
      prune,
    } = resourceProperties;
    let tmpDir = "";
    try {
      tmpDir = mkdtempSync(resolve(tmpdir(), "web-deploy-"));
      const zipDirPath = resolve(tmpDir, "zip");
      mkdirSync(zipDirPath);
      const zipFilePath = resolve(zipDirPath, "temp.zip");
      const unzipDirPath = resolve(tmpDir, "unzip");
      mkdirSync(unzipDirPath);
      console.log("Downloading zip");
      await downloadFile({
        bucket: sourceBucketName,
        key: sourceObjectKey,
        destinationPath: zipFilePath,
      });
      console.log("Extracting zip");
      await extractZip({ zipFilePath, unzipDirPath });
      const filePaths = listFilePaths(unzipDirPath);
      if (Object.keys(environment).length) {
        console.log(
          "Replacing environment variables: " + JSON.stringify(environment)
        );
        replaceEnvVars({ environment, filePaths });
      }
      if (prune) {
        console.log("Emptying/pruning bucket: " + destinationBucketName);
        await emptyBucket(destinationBucketName);
      }
      console.log("Uploading objects to: " + destinationBucketName);
      await uploadObjects({
        bucket: destinationBucketName,
        keyPrefix: destinationObjectKeyPrefix,
        filePaths,
        tmpDir: unzipDirPath,
      });
      if (distributionId) {
        console.log("Invalidating CloudFront Distribution: " + distributionId);
        await createInvalidation({ distributionId });
      }
    } catch (err) {
      console.error(err);
    } finally {
      if (tmpDir.length) {
        rmSync(tmpDir, { force: true, recursive: true });
      }
    }
  }
  return {};
};

interface DownloadFileParams {
  bucket: string;
  key: string;
  destinationPath: string;
}
async function downloadFile(params: DownloadFileParams) {
  const { bucket, key, destinationPath } = params;
  const data = await s3.send(
    new GetObjectCommand({ Bucket: bucket, Key: key })
  );
  return new Promise(async (resolve, reject) => {
    const body = data.Body;
    if (body instanceof Readable) {
      const writeStream = createWriteStream(destinationPath);
      body
        .pipe(writeStream)
        .on("error", (err) => reject(err))
        .on("close", () => resolve(null));
    }
  });
}

interface ExtractParams {
  zipFilePath: string;
  unzipDirPath: string;
}
async function extractZip(params: ExtractParams) {
  const { zipFilePath, unzipDirPath } = params;
  const zip = new AdmZip(zipFilePath);
  zip.extractAllTo(unzipDirPath);
}

/**
 * Given path of directory, returns array of all file paths within directory
 */
function listFilePaths(dirPath: string): string[] {
  const filePaths: string[] = [];
  const directory = readdirSync(dirPath, { withFileTypes: true });
  for (const d of directory) {
    const filePath = resolve(dirPath, d.name);
    if (d.isDirectory()) {
      filePaths.push(...listFilePaths(filePath));
    } else {
      filePaths.push(filePath);
    }
  }
  return filePaths;
}

interface ReplaceEnvVarsParams {
  filePaths: string[];
  environment: Record<string, string>;
}
function replaceEnvVars(params: ReplaceEnvVarsParams) {
  const { filePaths, environment } = params;
  const findRegExp = new RegExp(Object.keys(environment).join("|"), "g");
  for (const filePath of filePaths) {
    if (filePath.endsWith(".js")) {
      const fileContents = readFileSync(filePath, { encoding: "utf8" });
      const newFileContents = fileContents.replace(findRegExp, (matched) => {
        const matchedEnvVar = environment[matched];
        if (matchedEnvVar) {
          return matchedEnvVar;
        } else {
          console.warn(
            `Could not find matched value: ${matched} in environment object. Returning ""`
          );
          return "";
        }
      });
      if (fileContents !== newFileContents) {
        writeFileSync(filePath, newFileContents);
      }
    }
  }
}

async function emptyBucket(bucketName: string) {
  const deleteObjectPromises: Promise<unknown>[] = [];
  let numObjectsDeleted = 0;
  let nextToken: string | undefined = undefined;
  do {
    const cmd: ListObjectsV2CommandInput = { Bucket: bucketName };
    if (nextToken) {
      cmd.ContinuationToken = nextToken;
    }
    const res = await s3.send(new ListObjectsV2Command(cmd));
    const contents = res.Contents;
    nextToken = res.NextContinuationToken;
    if (contents?.length) {
      const objects = contents?.map((o) => ({ Key: o.Key }));
      numObjectsDeleted += objects?.length;
      deleteObjectPromises.push(
        s3.send(
          new DeleteObjectsCommand({
            Bucket: bucketName,
            Delete: { Objects: objects },
          })
        )
      );
    }
  } while (nextToken);
  await Promise.all(deleteObjectPromises);
  console.log(
    `Number of objects deleted for bucket ${bucketName}: ${numObjectsDeleted}`
  );
}

interface UploadObjectsParams {
  bucket: string;
  keyPrefix: string;
  filePaths: string[];
  tmpDir: string;
}
function uploadObjects(params: UploadObjectsParams) {
  const { bucket, keyPrefix, filePaths, tmpDir } = params;
  // filePaths have /tmp/web-deploy-... in them, we don't that in s3 path
  // so get relative to tmpDir
  const putObjectInputs: PutObjectCommandInput[] = filePaths.map((path) => {
    const contentType = mime.lookup(path);
    let cacheControl: undefined | string = undefined;
    if (path.endsWith(".js") || path.endsWith(".css")) {
      // 31536000 = 1 year
      cacheControl = "max-age=31536000,public,immutable";
    } else if (path.endsWith(".html")) {
      cacheControl = "max-age=0,no-cache,no-store,must-revalidate";
    }
    return {
      Bucket: bucket,
      // .slice(1) to remove leading slash b/c s3 will create top level / folder
      Key: resolve("/" + keyPrefix, relative(tmpDir, path)).slice(1),
      Body: createReadStream(path),
      CacheControl: cacheControl,
      ContentType: contentType || undefined,
    };
  });
  return Promise.all(
    putObjectInputs.map((input) => s3.send(new PutObjectCommand(input)))
  );
}

interface CreateInvalidationParams {
  distributionId: string;
}
function createInvalidation(params: CreateInvalidationParams) {
  return cf.send(
    new CreateInvalidationCommand({
      DistributionId: params.distributionId,
      InvalidationBatch: {
        CallerReference: new Date().toISOString(),
        Paths: { Items: ["/*"], Quantity: 1 },
      },
    })
  );
}
