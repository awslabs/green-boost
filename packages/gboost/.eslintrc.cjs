// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["../../.eslintrc.cjs"],
  ignorePatterns: [
    "/templates/**/*.ts",
    "/templates/**/*.tsx",
    "/examples/**/*.ts",
    "/examples/**/*.tsx",
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  },
});
