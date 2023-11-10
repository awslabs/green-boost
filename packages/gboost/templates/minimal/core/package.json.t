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
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run",
    "watch": "tsc -w",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "eslint": "^8.53.0",
    "eslint-define-config": "^1.24.1",
    "typescript": "^5.2.2",
    "vitest": "^0.34.6"
  }
}
