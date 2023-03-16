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
    "@{{GB_APP_ID}}/eslint-config-node": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/tsconfig": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/utils": "workspace:^0.1.0",
    "eslint": "^8.32.0",
    "eslint-define-config": "^1.14.0",
    "typescript": "^4.9.4",
    "vitest": "^0.28.5"
  }
}
