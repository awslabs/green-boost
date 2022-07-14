import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        // https://ui.docs.amplify.aws/getting-started/installation#vite
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
    ],
  },
});
