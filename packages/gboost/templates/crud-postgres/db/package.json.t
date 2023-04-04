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
    "@aws-sdk/client-secrets-manager": "^3.303.0",
    "@aws-sdk/rds-signer": "^3.303.0",
    "kysely": "^0.24.2",
    "pg": "^8.10.0"
  },
  "devDependencies": {
    "@swc/core": "^1.3.44",
    "@types/aws-lambda": "^8.10.114",
    "@types/node": "^18.15.11",
    "@types/pg": "^8.6.6",
    "eslint": "^8.37.0",
    "eslint-define-config": "^1.17.0",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.5"
  }
}