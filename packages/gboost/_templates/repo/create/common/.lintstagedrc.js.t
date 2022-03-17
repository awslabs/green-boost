---
to: common/.lintstagedrc.js
---

import { removeIgnoredFiles } from "../utils/lintStaged.js"

export default {
  "*.ts?(x)": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --fix --max-warnings=0 ${filesToLint}`, `jest --watchAll=false --findRelatedTests ${files}`, "tsc --noEmit"];
  }
}