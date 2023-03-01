// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "react-app", // use CRA linting rules
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  ignorePatterns: ["node_modules", "lib"],
  parser: "@typescript-eslint/parser", // This allows ESLint to understand TypeScript syntax
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // reduces development bundle size speeding up dev server
    // https://mui.com/guides/minimizing-bundle-size/#main-content
    "no-restricted-imports": ["error", "react-icons"],
  },
});
