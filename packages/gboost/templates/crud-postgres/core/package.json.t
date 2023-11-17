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
    "@aws-lambda-powertools/logger": "^1.16.0",
    "@aws-sdk/client-secrets-manager": "^3.451.0",
    "@aws-sdk/rds-signer": "^3.451.0",
    "drizzle-kit": "^0.20.4",
    "drizzle-orm": "^0.29.0",
    "postgres": "^3.4.3",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/aws-lambda": "^8.10.126",
    "eslint": "^8.53.0",
    "eslint-define-config": "^2.0.0",
    "typescript": "^5.2.2",
    "vitest": "^0.34.6"
  }
}