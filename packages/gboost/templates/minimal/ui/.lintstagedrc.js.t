// @ts-check
import { removeIgnoredFiles } from "@{{GB_APP_ID}}/utils";

export default {
  "*.ts?(x)": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    // TODO: use setup here: https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged
    return [`next lint`, `vitest related --run ${files}`, "tsc --noEmit"];
  }
}