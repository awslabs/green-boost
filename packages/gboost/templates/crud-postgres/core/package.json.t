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
    "@aws-lambda-powertools/logger": "^1.7.0",
    "@aws-sdk/smithy-client": "^3.296.0",
    "@{{GB_APP_ID}}/db": "workspace:^0.1.0",
    "@trpc/server": "^10.17.0",
    "zod": "^3.21.4"
  },
  "devDependencies": {
    "@aws-sdk/types": "^3.296.0",
    "@{{GB_APP_ID}}/eslint-config-node": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/tsconfig": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/utils": "workspace:^0.1.0",
    "eslint": "^8.36.0",
    "eslint-define-config": "^1.16.0",
    "typescript": "^4.9.4",
    "vitest": "^0.28.5"
  }
}