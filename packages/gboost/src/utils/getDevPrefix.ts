import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export function getDevPrefix(infraDir: string) {
  const cdkJsonPath = resolve(infraDir, "cdk.json");
  const cdkJsonString = readFileSync(cdkJsonPath, {
    encoding: "utf8",
  });
  const cdkJson = JSON.parse(cdkJsonString);
  return cdkJson.context.devPrefix;
}
