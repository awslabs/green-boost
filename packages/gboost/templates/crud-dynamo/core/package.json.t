{
  "name": "@{{GB_APP_ID}}/core",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./models": "./src/domain/models/index.ts",
    "./schemas": "./src/domain/schemas/index.ts",
    "./router": "./src/entrypoints/api/router.ts",
    "./utils": "./src/utils/index.ts"
  },
  "imports": {
    "#adapters/*": "./src/adapters/*.ts",
    "#models/*": "./src/domain/models/*.ts",
    "#schemas/*": "./src/domain/schemas/*.ts",
    "#services/*": "./src/services/*.ts"
  },
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run --passWithNoTests",
    "watch": "tsc -w",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@aws-lambda-powertools/logger": "^1.14.2",
    "@aws-sdk/client-dynamodb": "^3.445.0",
    "@aws-sdk/lib-dynamodb": "^3.445.0",
    "@aws-sdk/smithy-client": "^3.370.0",
    "@trpc/server": "^10.43.2",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@aws-sdk/types": "^3.433.0",
    "eslint": "^8.53.0",
    "eslint-define-config": "^1.24.1",
    "typescript": "^4.9.5",
    "vitest": "^0.34.6"
  }
}
