---
to: ui/vite.config.ts
---

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { injectHtml } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [tsconfigPaths(), react(), injectHtml({ data: env })],
    resolve: {
      alias: [
        {
          // https://ui.docs.amplify.aws/getting-started/installation#vite
          find: "./runtimeConfig",
          replacement: "./runtimeConfig.browser",
        },
      ],
    },
  };
});
