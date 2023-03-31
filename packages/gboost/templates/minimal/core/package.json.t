{
  "name": "@{{GB_APP_ID}}/core",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": "./src/index.ts"
  },
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run --passWithNoTests",
    "watch": "tsc -w",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "eslint": "^8.37.0",
    "eslint-define-config": "^1.17.0",
    "typescript": "^4.9.5",
    "vitest": "^0.29.8"
  }
}