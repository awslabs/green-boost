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
    title: "CRUD with DynamoDB",
    description: "CRUD via table and forms. API Gateway with tRPC and DynamoDB",
    value: Template.CrudDynamo,
  },
  {
    title: "CRUD with Aurora Serverless Postgres",
    description:
      "CRUD via table and forms. API Gateway with tRPC and Aurora Serverless Postgres",
    value: Template.CrudPostgres,
    disabled: true,
  },
  {
    title: "User Authentication and Management with Cognito",
    description:
      "User password authentication with Cognito User Pools and Green Boost's user management use-case feature",
    value: Template.UserAuthMgmtCognito,
    disabled: true,
  },
  {
    title: "Dashboard",
    description: "Mock dashboard built with amcharts",
    value: Template.UserAuthMgmtCognito,
    disabled: true,
  },
];
