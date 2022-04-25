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
    "@aws-sdk/client-cognito-identity-provider": "^3.75.0",
    "aws-cdk": "^2.21.1",
    "aws-cdk-lib": "^2.21.1",
    "cdk-nag": "^2.12.32",
    "constructs": "^10.0.125",
    "esbuild": "^0.14.38",
    "gboost-common": "^0.5.0",
    "gboost-infra": "^0.3.9"
  },
  "devDependencies": {
    "@swc/core": "^1.2.170",
    "@types/aws-lambda": "^8.10.95",
    "@types/jest": "^27.4.1",
    "@types/node": "^16.11.27",
    "@typescript-eslint/eslint-plugin": "^5.20.0",
    "@typescript-eslint/parser": "^5.20.0",
    "eslint": "^8.13.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-define-config": "^1.4.0",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.6.2",
    "ts-jest": "^27.1.4",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
  }
}