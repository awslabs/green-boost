// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["@myapp/eslint-config-node"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  },
});
