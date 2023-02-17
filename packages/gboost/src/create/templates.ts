import type prompts from "prompts";

export enum Template {
  Minimal = "Minimal",
  WidgetsDynamo = "WidgetsDynamo",
  WidgetsPostgres = "WidgetsPostgres",
  WebPortal = "WebPortal",
  KitchenSink = "KitchenSink",
}

export const templateChoices: prompts.Choice[] = [
  {
    title: "Minimal",
    description:
      "Monorepo boilerplate code, 'Hello, World' web app built with React, and CDK infrastructure",
    value: Template.Minimal,
  },
  {
    title: "Widgets App with DynamoDB",
    description:
      "Widgets App based on minimal template + tRPC via API Gateway and DynamoDB",
    value: Template.WidgetsDynamo,
  },
  {
    title: "Widgets App with Aurora Serverless Postgres",
    description:
      "Widgets App based on minimal template + tRPC via API Gateway and Aurora Serverless Postgres",
    value: Template.WidgetsPostgres,
    disabled: true,
  },
  {
    title: "Web Portal",
    description:
      "Web Portal based on Widgets App with Aurora Serverless Postgres + Cognito Authentication and user management",
    value: Template.WebPortal,
    disabled: true,
  },
  {
    title: "Kitchen Sink",
    description: "Showcase of all Green Boost's E2E Features",
    value: Template.KitchenSink,
  },
];
