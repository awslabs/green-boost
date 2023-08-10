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
    "eslint": "^8.44.0",
    "eslint-define-config": "^1.21.0",
    "typescript": "^5.1.6",
    "vitest": "^0.33.0"
  }
}