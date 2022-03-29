---
to: ui/.eslintrc.cjs
---

// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "react-app", // use CRA linting rules
    "react-app/jest",
    "plugin:prettier/recommended",
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // reduces development bundle size speeding up dev server
    "no-restricted-imports": ["error", "react-icons"],
  },
});
