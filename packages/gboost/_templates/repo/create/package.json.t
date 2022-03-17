---
to: package.json
---

{
  "name": "<%= repoName %>-monorepo",
  "version": "0.1.0",
  "type": "module",
  "engines": {
    "node": ">=16"
  },
  "scripts": {
    "build": "pnpm --recursive --parallel build",
    "lint": "pnpm --recursive --parallel lint",
    "test": "pnpm --recursive --parallel test",
    "prepare": "husky install",
    "preinstall": "npx only-allow pnpm"
  },
  "dependencies": {
    "esbuild": "^0.14.27"
  },
  "devDependencies": {
    "husky": "^7.0.4",
    "lint-staged": "^12.3.5"
  },
  "lint-staged": {
    "*": "true"
  }
}
