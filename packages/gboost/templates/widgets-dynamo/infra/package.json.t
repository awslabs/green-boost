{
  "name": "@{{GB_APP_ID}}/infra",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "deploy:local": "cdk deploy \"**\" --require-approval never",
    "deploy:pipeline": "cdk --app \"./node_modules/.bin/ts-node src/pipeline/pipeline-app.ts\" deploy \"*\"",
    "destroy:local": "cdk destroy --force \"**\"",
    "destroy:pipeline": "cdk --app \"./node_modules/.bin/ts-node src/pipeline/pipeline-app.ts\" --force destroy \"*\"",
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run --passWithNoTests",
    "watch": "cdk --watch",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@aws-cdk/aws-apigatewayv2-alpha": "^2.66.1-alpha.0",
    "@aws-cdk/aws-redshift-alpha": "^2.66.1-alpha.0",
    "@aws-cdk/aws-synthetics-alpha": "^2.66.1-alpha.0",
    "aws-cdk": "^2.67.0",
    "aws-cdk-lib": "^2.67.0",
    "cdk-monitoring-constructs": "^2.6.4",
    "cdk-nag": "^2.21.67",
    "constructs": "^10.1.225",
    "gboost-common": "^0.10.0",
    "gboost-infra": "^0.13.0",
    "vite": "^4.1.4",
    "vite-node": "^0.29.2"
  },
  "devDependencies": {
    "@types/node": "^18.13.0",
    "eslint": "^8.32.0",
    "eslint-define-config": "^1.14.0",
    "typescript": "^4.9.4",
    "vitest": "^0.28.5"
  }
}