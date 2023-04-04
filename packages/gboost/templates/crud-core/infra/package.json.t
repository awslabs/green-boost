{
  "name": "@{{GB_APP_ID}}/infra",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "deploy:local": "cdk deploy \"**\" --require-approval never --no-rollback",
    "deploy:pipeline": "cdk --app \"./node_modules/.bin/ts-node src/pipeline/pipeline-app.ts\" deploy \"*\" --no-rollback",
    "destroy:local": "cdk destroy --force \"**\"",
    "destroy:pipeline": "cdk --app \"./node_modules/.bin/ts-node src/pipeline/pipeline-app.ts\" --force destroy \"*\"",
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run --passWithNoTests",
    "watch:api": "cdk watch \"*/api\" --hotswap-fallback --exclusively",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@aws-cdk/aws-apigatewayv2-alpha": "^2.72.1-alpha.0",
    "@aws-cdk/aws-redshift-alpha": "^2.72.1-alpha.0",
    "@aws-cdk/aws-synthetics-alpha": "^2.72.1-alpha.0",
    "aws-cdk": "^2.72.1",
    "aws-cdk-lib": "^2.72.1",
    "cdk-monitoring-constructs": "^2.6.4",
    "cdk-nag": "^2.25.2",
    "constructs": "^10.1.300",
    "gboost-common": "^0.11.1",
    "gboost-infra": "^0.14.0",
    "vite": "^4.2.1",
    "vite-node": "^0.29.8"
  },
  "devDependencies": {
    "@types/node": "^18.15.11",
    "eslint": "^8.37.0",
    "eslint-define-config": "^1.17.0",
    "typescript": "^4.9.5",
    "vitest": "^0.29.8"
  }
}