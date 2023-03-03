{
  "name": "@{{GB_APP_ID}}/core",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run --passWithNoTests",
    "watch": "tsc -w",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@aws-lambda-powertools/logger": "^1.5.1",
    "@trpc/server": "^10.11.1",
    "zod": "^3.20.6"
  },
  "devDependencies": {
    "eslint": "^8.32.0",
    "eslint-define-config": "^1.14.0",
    "typescript": "^4.9.4",
    "vitest": "^0.28.5"
  }
}
