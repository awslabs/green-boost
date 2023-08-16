import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";

const title = "Green Boost";
const description = "Build Full Stack Cloud Native Web Apps on AWS Fast";
const repo = "https://github.com/awslabs/green-boost";
const url = "https://awslabs.github.io/green-boost";

const docsThemeConfig: DocsThemeConfig = {
  docsRepositoryBase: repo + "/tree/main/docs",
  footer: {
    text: `Apache 2.0 ${new Date().getFullYear()} © Amazon Web Services.`,
  },
  logo: (
    <>
      <span>⏩ Green Boost</span>
    </>
  ),
  primaryHue: 142, // hsl(141.89999999999998, 69.2%, 58%) --tw-green-400
  project: {
    link: repo,
  },
  useNextSeoProps() {
    const { title: pageTitle } = useConfig();
    return {
      additionalLinkTags: [
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/svg+xml",
        },
      ],
      additionalMetaTags: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      canonical: url,
      description,
      openGraph: {
        title,
        description,
        url,
      },
      themeColor: "hsl(141.89999999999998, 69.2%, 58%)",
      title: pageTitle ? `${pageTitle} - ${title}` : title,
    };
  },
};

export default docsThemeConfig;
