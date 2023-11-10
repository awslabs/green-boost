// @ts-check
import { removeIgnoredFiles } from "@min1/utils";

export default {
  "*.ts": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [
      `eslint --fix --max-warnings=0 ${filesToLint}`,
      `vitest related --run ${files}`,
      "tsc --noEmit",
    ];
  },
};
