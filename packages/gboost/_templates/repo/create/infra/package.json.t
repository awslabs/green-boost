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
    "@aws-sdk/client-cognito-identity-provider": "^3.54.1",
    "aws-cdk": "^2.16.0",
    "aws-cdk-lib": "^2.16.0",
    "cdk-nag": "^2.11.1",
    "constructs": "^10.0.89",
    "esbuild": "^0.14.27",
    "gboost-common": "^0.5.0",
    "gboost-infra": "^0.3.9"
  },
  "devDependencies": {
    "@types/aws-lambda": "^8.10.93",
    "@types/jest": "^27.4.1",
    "@types/node": "^16.11.26",
    "@typescript-eslint/eslint-plugin": "^5.15.0",
    "@typescript-eslint/parser": "^5.15.0",
    "eslint": "^8.11.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-define-config": "^1.3.0",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.6.0",
    "ts-jest": "^27.1.3",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.2"
  }
}