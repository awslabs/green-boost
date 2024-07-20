// @ts-check
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import security from "eslint-plugin-security";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import * as mdx from "eslint-plugin-mdx";

const baseDirectory = dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory,
  resolvePluginsRelativeTo: baseDirectory,
});

export default tsEslint.config(
  {
    ignores: [
      "node_modules/**/*",
      "dist/**/*",
      "out/**/*",
      "cdk.out/**/*",
      ".next/**/*",
      "packages/gboost/templates/**/*",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  {
    ...security.configs.recommended,
    rules: {
      ...security.configs.recommended.rules,
      "security/detect-object-injection": "off", // too many false positives
      "security/detect-non-literal-fs-filename": "off", // too many false positives
    },
  },
  ...tsEslint.configs.recommended,
  ...compat.config({
    overrides: [
      {
        files: ["packages/gboost-ui/**/*.{ts,tsx}", "docs/**/*.{ts,tsx}"],
        extends: "next/core-web-vitals",
      },
    ],
  }),
  // mdx for docs
  {
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
    },
  },
);
