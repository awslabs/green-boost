{
  "name": "@{{GB_APP_ID}}/monorepo",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "pnpm --recursive --parallel build",
    "lint": "pnpm --recursive --parallel lint",
    "test": "pnpm --recursive --parallel test",
    "typecheck": "pnpm --recursive --parallel typecheck",
    "prepare": "husky install",
    "preinstall": "npx only-allow pnpm"
  },
  "devDependencies": {
    "@types/node": "^18.18.9",
    "eslint": "^8.53.0",
    "husky": "^8.0.3",
    "lint-staged": "^15.0.2",
    "typescript": "^5.2.2"
  },
  "dependencies": {
    "esbuild": "^0.19.5"
  },
  "pnpm": {
    "overrides": {},
    "peerDependencyRules": {}
  }
}
