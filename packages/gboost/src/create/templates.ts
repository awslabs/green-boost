import type prompts from "prompts";

export enum Template {
  Minimal = "Minimal",
  BasicUI = "Basic UI",
  CrudDynamo = "CrudDynamo",
  CrudPostgres = "CrudPostgres",
  // UserAuthMgmtCognito = "UserAuthMgmtCognito",
  // Dashboard = "Dashboard",
}

export const templateChoices: prompts.Choice[] = [
  {
    title: "Minimal",
    description:
      "Monorepo boilerplate code setup with linting, type checking and unit tests for React/Next.js, AWS CDK, Node.js.",
    value: Template.Minimal,
  },
  {
    title: "Basic UI",
    description:
      "'Hello, World' web app built on Minimal template using CloudFront, WAF, S3, and Lambda.",
    value: Template.BasicUI,
  },
  {
    title: "CRUD App with DynamoDB",
    description:
      "CRUD App with table and forms built on Minimal template using DynamoDB for data storage",
    value: Template.CrudDynamo,
  },
  {
    title: "CRUD App with Aurora Postgres",
    description:
      "CRUD App with table and forms built on Minimal template using Aurora PostgreSQL for data storage.",
    value: Template.CrudPostgres,
  },
  // {
  //   title: "User Auth and Management with Cognito",
  //   description:
  //     "User password authentication with Cognito User Pools and user management built on template: CRUD App with DynamoDB",
  //   value: Template.UserAuthMgmtCognito,
  //   disabled: true,
  // },
  // {
  //   title: "Dashboard",
  //   description:
  //     "Mock dashboard using amCharts built on template: User Auth and Management with Cognito",
  //   value: Template.Dashboard,
  //   disabled: true,
  // },
];
