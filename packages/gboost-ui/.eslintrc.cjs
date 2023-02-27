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
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // reduces development bundle size speeding up dev server
    // https://mui.com/guides/minimizing-bundle-size/#main-content
    "no-restricted-imports": ["error", "react-icons"],
  },
});

/**
 * Cannot use root .eslintrc.cjs b/c of this error:
    packages/gboost-ui lint: Oops! Something went wrong! :(
    packages/gboost-ui lint: ESLint: 8.13.0
    packages/gboost-ui lint: ESLint couldn't determine the plugin "@typescript-eslint" uniquely.
    packages/gboost-ui lint: - /Users/stickb/Code/green-boost/node_modules/.pnpm/@typescript-eslint+eslint-plugin@5.27.0_xgwjwvswzzo77lpghh6plzerx4/node_modules/@typescript-eslint/eslint-plugin/dist/index.js (loaded in ".eslintrc.cjs » ../../.eslintrc.cjs » plugin:@typescript-eslint/recommended » ./configs/base")
    packages/gboost-ui lint: - /Users/stickb/Code/green-boost/node_modules/.pnpm/@typescript-eslint+eslint-plugin@5.27.0_hc5nseoddt63bvpdva6z5vpn44/node_modules/@typescript-eslint/eslint-plugin/dist/index.js (loaded in ".eslintrc.cjs » eslint-config-react-app#overrides[0]")
    packages/gboost-ui lint: Please remove the "plugins" setting from either config or remove either plugin installation.
    packages/gboost-ui lint: If you still can't figure out the problem, please stop by https://eslint.org/chat/help to chat with the team.
    packages/gboost-ui lint: Failed
 */
