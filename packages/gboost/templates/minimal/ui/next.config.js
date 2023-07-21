/** @type {import('next').NextConfig} */
const nextConfig = {
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
  reactStrictMode: true,
  transpilePackages: ["@{{GB_APP_ID}}/core"],
};

export default nextConfig;
