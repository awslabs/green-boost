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
    "@aws-sdk/client-cognito-identity-provider": "^3.112.0",
    "aws-cdk": "^2.29.0",
    "aws-cdk-lib": "^2.29.0",
    "cdk-nag": "^2.14.41",
    "constructs": "^10.1.42",
    "esbuild": "^0.14.47",
    "gboost-common": "^0.6.0",
    "gboost-infra": "^0.7.0"
  },
  "devDependencies": {
    "@swc/core": "^1.2.204",
    "@types/aws-lambda": "^8.10.101",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.41",
    "@typescript-eslint/eslint-plugin": "^5.29.0",
    "@typescript-eslint/parser": "^5.29.0",
    "eslint": "^8.18.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-define-config": "^1.5.1",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.6.2",
    "ts-jest": "^27.1.5",
    "ts-node": "^10.8.0",
    "typescript": "^4.7.4"
  }
}