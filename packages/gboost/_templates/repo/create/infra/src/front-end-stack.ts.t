---
to: infra/src/front-end-stack.ts
---

import { Aspects, Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { StaticSite, SuppressOkNags } from "gboost-infra";

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
      webAssetsPath: new URL("../../ui/dist", import.meta.url).pathname,
      responseHeaders: {
        securityHeaders: {
          contentSecurityPolicy: {
            connectSrc: [
              "self",
              `https://cognito-idp.${Stack.of(this).region}.amazonaws.com/`,
              gqlUrl,
            ],
            fontSrc: ["self", "data:"],
            imgSrc: ["self", "data:"],
            styleSrc: ["self", "unsafe-inline"],
            styleSrcAttr: ["self"],
            styleSrcElem: ["self", "unsafe-inline"],
          },
        },
      },
    });

    Aspects.of(this).add(new SuppressOkNags());
  }
}
