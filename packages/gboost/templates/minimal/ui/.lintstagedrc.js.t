// @ts-check
import { removeIgnoredFiles } from "@{{GB_APP_ID}}/utils";

export default {
  "*.ts?(x)": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --fix --max-warnings=0 ${filesToLint}`, `vitest --passWithNoTests related ${files}`, "tsc --noEmit"];
  }
}