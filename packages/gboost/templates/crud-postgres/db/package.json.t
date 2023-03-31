{
  "name": "@{{GB_APP_ID}}/db",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": "./src/db.ts"
  },
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "watch": "tsc -w",
    "typecheck": "tsc --noEmit",
    "migrate": "ts-node ./src/migrations/migrate-cli.ts"
  },
  "dependencies": {
    "@aws-sdk/client-secrets-manager": "^3.299.0",
    "@aws-sdk/rds-signer": "^3.299.0",
    "@{{GB_APP_ID}}/core": "workspace:^0.1.0",
    "kysely": "^0.23.5",
    "pg": "^8.10.0"
  },
  "devDependencies": {
    "@{{GB_APP_ID}}/eslint-config-node": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/tsconfig": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/utils": "workspace:^0.1.0",
    "@swc/core": "^1.3.42",
    "@types/aws-lambda": "^8.10.114",
    "@types/node": "^18.15.10",
    "@types/pg": "^8.6.6",
    "eslint": "^8.36.0",
    "eslint-define-config": "^1.16.0",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  }
}