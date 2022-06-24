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
    "esbuild": "^0.14.47"
  },
  "devDependencies": {
    "husky": "^8.0.1",
    "lint-staged": "^13.0.2"
  },
  "lint-staged": {
    "*": "true"
  },
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@aws-amplify/core",
        "@aws-amplify/geo",
        "@babel/plugin-syntax-flow",
        "@babel/plugin-transform-react-jsx",
        "react-native"
      ]
    }
  }
}
