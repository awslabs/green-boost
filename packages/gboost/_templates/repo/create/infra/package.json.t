---
to: infra/package.json
---

{
  "name": "<%= repoName %>-back-end",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": ">=16"
  },
  "type": "module",
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "test": "jest",
    "watch": "tsc -w"
  },
  "dependencies": {
    "@aws-cdk/aws-appsync-alpha": "^2.5.0-alpha.0",
    "@aws-sdk/client-cognito-identity-provider": "^3.102.0",
    "aws-cdk": "^2.26.0",
    "aws-cdk-lib": "^2.26.0",
    "cdk-nag": "^2.14.21",
    "constructs": "^10.1.24",
    "esbuild": "^0.14.42",
    "gboost-common": "^0.6.0",
    "gboost-infra": "^0.5.0"
  },
  "devDependencies": {
    "@swc/core": "^1.2.196",
    "@types/aws-lambda": "^8.10.97",
    "@types/jest": "^27.5.1",
    "@types/node": "^16.11.38",
    "@typescript-eslint/eslint-plugin": "^5.27.0",
    "@typescript-eslint/parser": "^5.27.0",
    "eslint": "^8.16.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-define-config": "^1.5.0",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.6.2",
    "ts-jest": "^27.1.5",
    "ts-node": "^10.8.0",
    "typescript": "^4.7.2"
  }
}