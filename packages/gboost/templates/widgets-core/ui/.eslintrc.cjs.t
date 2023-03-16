// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["@{{GB_APP_ID}}/eslint-config-react"],
  rules: {
    // safe guard accidentally importing without type prefix
    // should only be imported from src/trpc.ts
    "no-restricted-imports": ["error", "@{{GB_APP_ID}}/core/app-router"],
  },
});