import webpack from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
          { key: "X-Content-Type-Options", value: "nosniff" },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  modularizeImports: {
    // https://mui.com/material-ui/guides/minimizing-bundle-size/#development-environment
    // @mui/icons-material is automatically modularized by Next.js
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
  reactStrictMode: true,
  transpilePackages: ["@{{GB_APP_ID}}/core"],
  webpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        // https://github.com/aws-amplify/amplify-js/issues/11030
        resourceRegExp: /^aws-crt|@aws-sdk\/signature-v4-crt$/,
      }),
    );
    return config;
  },
};

export default nextConfig;
