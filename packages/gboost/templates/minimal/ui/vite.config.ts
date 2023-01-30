import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import _react from "@vitejs/plugin-react";
// https://github.com/vitejs/vite/issues/10481
const react = _react as unknown as typeof _react.default;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({ inject: { data: env } }),
      tsconfigPaths(), // needed for baseUrl tsconfig option
      vanillaExtractPlugin(),
    ],
    resolve: {
      alias: [
        {
          // https://ui.docs.amplify.aws/getting-started/installation#vite
          find: "./runtimeConfig",
          replacement: "./runtimeConfig.browser",
        },
      ],
      dedupe: ["react-router-dom"],
    },
  };
});
