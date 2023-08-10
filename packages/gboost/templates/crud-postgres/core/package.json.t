{
  "name": "@{{GB_APP_ID}}/core",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "exports": {
    "./server": "./src/index.server.ts",
    "./shared": "./src/index.shared.ts"
  },
  "scripts": {
    "db:connect": "aws ssm start-session --target $DB_BASTION_ID --document-name AWS-StartPortForwardingSessionToRemoteHost --parameters host=$DB_ENDPOINT,portNumber=5432,localPortNumber=5432",
    "db:generate": "tsx node_modules/drizzle-kit/index.cjs generate:pg --config ./src/db/drizzle.config.ts",
    "db:migrate": "tsx ./src/db/migrate.ts",
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run",
    "watch": "tsc -w",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@aws-lambda-powertools/logger": "^1.11.1",
    "@aws-sdk/client-secrets-manager": "^3.379.1",
    "@aws-sdk/rds-signer": "^3.379.1",
    "drizzle-kit": "^0.19.12",
    "drizzle-orm": "^0.27.2",
    "postgres": "^3.3.5",
    "zod": "^3.21.4"
  },
  "devDependencies": {
    "@types/aws-lambda": "^8.10.119",
    "eslint": "^8.45.0",
    "eslint-define-config": "^1.17.0",
    "typescript": "^5.1.6",
    "vitest": "^0.33.0"
  }
}