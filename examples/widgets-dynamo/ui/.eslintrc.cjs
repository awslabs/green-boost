// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["@myapp/eslint-config-react"],
  rules: {
    // @myapp/core/app-router: safe guard accidentally importing without type prefix
    // should only be imported from src/trpc.ts.
    // react-icons: only import from sub paths like react-icons/md to speed up
    // development server
    "no-restricted-imports": ["error", "@myapp/core/app-router", "react-icons"],
  },
});
