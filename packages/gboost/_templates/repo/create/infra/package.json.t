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
    "@aws-sdk/client-cognito-identity-provider": "^3.51.0",
    "aws-cdk": "^2.12.0",
    "aws-cdk-lib": "^2.12.0",
    "cdk-nag": "^2.5.2",
    "constructs": "^10.0.63",
    "esbuild": "^0.14.21",
    "gboost-common": "^0.3.3",
    "gboost-infra": "^0.3.7"
  },
  "devDependencies": {
    "@types/aws-lambda": "^8.10.92",
    "@types/jest": "^27.4.0",
    "@types/node": "^14.18.12",
    "@typescript-eslint/eslint-plugin": "^5.12.0",
    "@typescript-eslint/parser": "^5.12.0",
    "eslint": "^8.9.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-define-config": "^1.2.5",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.5.1",
    "ts-jest": "^27.1.3",
    "ts-node": "^10.7.0",
    "typescript": "^4.5.5"
  }
}