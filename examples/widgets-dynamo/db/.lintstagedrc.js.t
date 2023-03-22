// @ts-check
import { removeIgnoredFiles } from "@myapp/utils";

export default {
  "*.ts": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --fix --max-warnings=0 ${filesToLint}`, "tsc --noEmit"];
  }
}