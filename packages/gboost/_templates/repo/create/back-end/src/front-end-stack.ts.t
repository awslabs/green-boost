---
to: back-end/src/front-end-stack.ts
---

import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { StaticSite } from "gb-lib/back/static-site/index";

export interface FrontEndStackProps extends StackProps {
  gqlUrl: string;
  stage: string;
}

export class FrontEndStack extends Stack {
  constructor(scope: Construct, id: string, props: FrontEndStackProps) {
    super(scope, id, props);
    const { gqlUrl, stage } = props;
    new StaticSite(this, "StaticSite", {
      stage,
      webAssetsPath: new URL("../../front-end/dist", import.meta.url).pathname,
      responseHeaders: {
        securityHeaders: {
          contentSecurityPolicy: {
            connectSrc: [
              "self",
              `https://cognito-idp.${Stack.of(this).region}.amazonaws.com/`,
              gqlUrl,
            ],
            fontSrc: ["self", "data:"],
            styleSrc: ["self", "unsafe-inline"],
            styleSrcAttr: ["self"],
            styleSrcElem: ["self", "unsafe-inline"],
          },
        },
      },
    });
  }
}
