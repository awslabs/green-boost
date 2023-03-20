import { defineConfig } from "vite";
export default defineConfig({
  resolve: {
    dedupe: ["aws-cdk-lib", "cdk-nag"],
  },
});
