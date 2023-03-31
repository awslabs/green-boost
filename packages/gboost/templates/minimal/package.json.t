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
    "@types/node": "^18.15.11",
    "eslint": "^8.37.0",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.0",
    "typescript": "^4.9.5"
  },
  "dependencies": {
    "esbuild": "^0.17.14"
  },
  "pnpm": {
    "overrides": {
      "xstate": "^4.33.6"
    },
    "peerDependencyRules": {
      "allowedVersions": {
        "react": "18"
      },
      "ignoreMissing": [
        "@aws-amplify/geo",
        "@aws-amplify/core",
        "@babel/plugin-syntax-flow",
        "@babel/plugin-transform-react-jsx",
        "react-native"
      ]
    }
  }
}