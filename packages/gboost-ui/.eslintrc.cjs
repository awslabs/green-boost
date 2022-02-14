// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "react-app", // use CRA linting rules
    "react-app/jest",
    "../../.eslintrc.cjs",
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // reduces development bundle size speeding up dev server
    // https://mui.com/guides/minimizing-bundle-size/#main-content
    "no-restricted-imports": ["error", "react-icons"],
  },
});
