// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const typeDocOptions = {
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  gitRevision: "main",
  validation: {
    invalidLink: true,
  },
  readme: "none",
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Green Boost",
  tagline: "Build Full Stack Serverless Web Apps on AWS Fast",
  url: "https://awslabs.github.io",
  baseUrl: "/green-boost/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "awslabs", // Usually your GitHub org/user name.
  projectName: "green-boost", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/awslabs/green-boost",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: "https://github.com/awslabs/green-boost",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Green Boost",
        logo: {
          alt: "Green Boost",
          src: "favicon-32x32.png",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started/intro",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/awslabs/green-boost",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/green-boost",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/awslabs/green-boost",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Amazon Web Services. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      },
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      // Plugin / TypeDoc options
      // https://typedoc.org/guides/options
      {
        id: "api-common",
        entryPoints: ["../packages/gboost-common/src"],
        tsconfig: "../packages/gboost-common/tsconfig.json",
        out: "api-common",
        name: "gboost-common",
        ...typeDocOptions,
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "api-infra",
        entryPoints: ["../packages/gboost-infra/src"],
        tsconfig: "../packages/gboost-infra/tsconfig.json",
        out: "api-infra",
        name: "gboost-infra",
        ...typeDocOptions,
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "api-ui",
        entryPoints: ["../packages/gboost-ui/src"],
        tsconfig: "../packages/gboost-ui/tsconfig.json",
        out: "api-ui",
        name: "gboost-ui",
        ...typeDocOptions,
      },
    ],
  ],
};

module.exports = config;
