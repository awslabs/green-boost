---
to: back-end/package.json
---

{
  "name": "<%= repoName %>-back-end",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": ">=14.13.1"
  },
  "type": "module",
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "test": "jest",
    "typecheck": "tsc --noEmit",
    "watch": "tsc -w"
  },
  "dependencies": {
    "@aws-cdk/aws-appsync-alpha": "^2.5.0-alpha.0",
    "@aws-sdk/client-cognito-identity-provider": "^3.46.0",
    "aws-cdk": "^2.8.0",
    "aws-cdk-lib": "^2.8.0",
    "constructs": "^10.0.37",
    "cdk-nag": "^2.4.43",
    "esbuild": "^0.14.11",
    "gb-lib": "^0.2.0"
  },
  "devDependencies": {
    "@types/aws-lambda": "^8.10.89",
    "@types/jest": "^27.4.0",
    "@types/node": "^14.18.5",
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "eslint": "^8.6.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-define-config": "^1.2.2",
    "eslint-plugin-jest": "^25.3.4",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.4.7",
    "prettier": "^2.5.1",
    "ts-jest": "^27.1.2",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.4"
  }
}