import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const title = "Green Boost";
const description = "Build Full Stack Cloud Native Web Apps on AWS Fast";
const repo = "https://github.com/awslabs/green-boost";
const url = "https://awslabs.github.io/green-boost";

const docsThemeConfig: DocsThemeConfig = {
  docsRepositoryBase: repo + "/tree/main/docs",
  head: () => <></>,
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
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    const { title: pageTitle } = useConfig();
    return {
      additionalLinkTags: [
        {
          rel: "icon",
          href: "/green-boost/fast-forward-emoji.svg",
          type: "image/svg+xml",
        },
      ],
      additionalMetaTags: [],
      canonical: url,
      description,
      openGraph: {
        title,
        description,
        url,
        images: [
          {
            url: "/green-boost/og2.png",
            alt: "Green Boost",
          },
        ],
      },
      themeColor: "hsl(141.89999999999998, 69.2%, 58%)",
      title: asPath !== "/" ? `${pageTitle} - ${title}` : title,
    };
  },
};

export default docsThemeConfig;
