# Green Boost Template: CRUD with Postgres

## Deploy Infrastructure Locally
1. From the root of your monorepo, `cd infra`
2. `pnpm deploy:local`

## Develop Frontend with Fast Refresh
1. Copy your API Gateway URL to VITE_API_URL environment variable in ui/.env.local
- Example: `VITE_API_URL=https://0p9l5vkduj.execute-api.us-east-1.amazonaws.com/prod`
2. From the root of your monorepo, `cd ui`
3. `pnpm dev`

## Develop Backend with Hotswap
1. From the root of your monorepo, `cd infra`
2. `pnpm watch:api`
3. Make file changes in `core/` or `infra/` and updates will be "hotswapped" and function logs tailed. With small Lambda functions, deployment can ~5 seconds.

## Clean Up Infrastructure Locally
1. From the root of your monorepo, `cd infra`
2. `pnpm destroy:local`