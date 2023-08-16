import createWithNextra from "nextra";

const withNextra = createWithNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
});

export default withNextra({
  images: {
    unoptimized: true,
  },
  output: "export",
  modularizeImports: {
    // https://mui.com/material-ui/guides/minimizing-bundle-size/#development-environment
    // @mui/icons-material is automatically modularized by Next.js
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
  reactStrictMode: true,
});
