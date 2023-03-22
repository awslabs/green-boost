import type prompts from "prompts";

export enum Template {
  Minimal = "Minimal",
  CrudDynamo = "CrudDynamo",
  CrudPostgres = "CrudPostgres",
  UserAuthMgmtCognito = "UserAuthMgmtCognito",
  Dashboard = "Dashboard",
}

export const templateChoices: prompts.Choice[] = [
  {
    title: "Minimal",
    description:
      "Monorepo boilerplate code, 'Hello, World' web app built with React and CDK infrastructure. No backend.",
    value: Template.Minimal,
  },
  {
    title: "CRUD App with DynamoDB",
    description:
      "CRUD App with table and forms built on Minimal template. API layer uses tRPC with API Gateway and data layer uses DynamoDB",
    value: Template.CrudDynamo,
  },
  {
    title: "CRUD App with Aurora Serverless Postgres",
    description:
      "CRUD App with table and forms built on Minimal template. API layer uses tRPC with API Gateway and data layer uses Aurora Serverless Postgres",
    value: Template.CrudPostgres,
    disabled: true,
  },
  {
    title: "User Auth and Management with Cognito",
    description:
      "User password authentication with Cognito User Pools and user management built on CRUD App with DynamoDB",
    value: Template.UserAuthMgmtCognito,
    disabled: true,
  },
  {
    title: "Dashboard",
    description:
      "Mock dashboard using amCharts built on User Auth and Management with Cognito",
    value: Template.Dashboard,
    disabled: true,
  },
];
