// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  env: {
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "next/core-web-vitals",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  overrides: [{ files: [".mdx"], extends: "plugin:mdx/recommended" }], // https://github.com/mdx-js/eslint-mdx/issues/251#issuecomment-736139224
  ignorePatterns: ["node_modules", "out"],
  parser: "@typescript-eslint/parser", // This allows ESLint to understand TypeScript syntax
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // reduces development bundle size speeding up dev server
  },
  settings: {
    "mdx/code-blocks": true,
  },
});
