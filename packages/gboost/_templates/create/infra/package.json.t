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
    "test": "vitest run",
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
    "@types/aws-lambda": "^8.10.101",
    "@types/node": "^16.11.41",
    "@typescript-eslint/eslint-plugin": "^5.29.0",
    "@typescript-eslint/parser": "^5.29.0",
    "eslint": "^8.18.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-define-config": "^1.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "^2.6.2",
    "ts-node": "^10.8.0",
    "typescript": "^4.7.4",
    "vite": "^2.9.12",
    "vitest": "^0.17.0"
  }
}