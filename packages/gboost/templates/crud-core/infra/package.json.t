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
    "watch:api": "cdk watch \"*/api\" --hotswap-fallback --exclusively",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@aws-cdk/aws-apigatewayv2-alpha": "^2.69.0-alpha.0",
    "@aws-cdk/aws-redshift-alpha": "^2.69.0-alpha.0",
    "@aws-cdk/aws-synthetics-alpha": "^2.69.0-alpha.0",
    "@{{GB_APP_ID}}/core": "workspace:^0.1.0",
    "aws-cdk": "^2.68.0",
    "aws-cdk-lib": "^2.68.0",
    "cdk-monitoring-constructs": "^2.6.4",
    "cdk-nag": "^2.22.34",
    "constructs": "^10.1.277",
    "gboost-common": "^0.10.0",
    "gboost-infra": "^0.13.1",
    "vite": "^4.1.4",
    "vite-node": "^0.29.2"
  },
  "devDependencies": {
    "@{{GB_APP_ID}}/eslint-config-node": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/tsconfig": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/utils": "workspace:^0.1.0",
    "@types/node": "^18.15.2",
    "eslint": "^8.36.0",
    "eslint-define-config": "^1.16.0",
    "typescript": "^4.9.4",
    "vitest": "^0.28.5"
  }
}